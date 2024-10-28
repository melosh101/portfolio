import GhostContentAPI from "@tryghost/content-api"
import "server-only"
import { env } from "~/env"
import axios from "axios"
import { unstable_cache } from "next/cache"

export const ghostClient = new GhostContentAPI({
    url: env.GHOST_API_URL,
    key: env.GHOST_CONTENT_KEY,
    version: "v5.0",
    makeRequest: ({headers, params, url}) => {
        return axios.get(url, {
            params,
            paramsSerializer: (parameters: {
                [key: string]: any;
            }) => {
                console.log("doing req");
                return Object.keys(parameters).reduce((parts, k) => {
                    const val = encodeURIComponent([].concat(parameters[k]).join(','));
                    //@ts-expect-error some weird type error, ts is casting it as a array but is in fact a string
                    return parts.concat(`${k}=${val}`);
                }, []).join('&');
            },
            headers
        });
    }
})

export const getBlogPosts = unstable_cache(async () => {
    return await ghostClient.posts
    .browse({
      limit: "all",
      include: "tags"
    })
    .catch(err => {
      console.error(err);
    });
}, ["posts"], {revalidate: 60, tags: ["posts"]});

export const getBlogPost = unstable_cache(async (slug: string) => {
    return await ghostClient.posts.read({slug},{include: "tags"})
}, [`post`], {revalidate: 3600, tags: ["post"]});