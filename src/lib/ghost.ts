import GhostContentAPI from "@tryghost/content-api"
import "server-only"
import { env } from "~/env"
import axios from "axios"
import { cache } from "react"

export const ghostClient = new GhostContentAPI({
    url: env.GHOST_API_URL,
    key: env.GHOST_CONTENT_KEY,
    version: "v5.0",
    makeRequest: ({method, headers, params, url}) => {
        console.log("making request");
        // @ts-ignore
        return axios[method](url, {
            params,
            paramsSerializer: (parameters: {
                [key: string]: any;
            }) => {
                return Object.keys(parameters).reduce((parts, k) => {
                    const val = encodeURIComponent([].concat(parameters[k]).join(','));
                    //@ts-ignore
                    return parts.concat(`${k}=${val}`);
                }, []).join('&');
            },
            headers
        });
    }
})

export const getBlogPosts = cache(async () => {
    return await ghostClient.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
});

export const getBlogPost = cache(async (slug: string) => {
    return await ghostClient.posts.read({slug,})
})