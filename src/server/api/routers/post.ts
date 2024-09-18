import { z } from "zod";
import { getBlogPosts } from "~/lib/ghost";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const PostSchema = z.object({
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  html: z.string(),
});

export const cacheAllPostSchema = z.array(PostSchema);



export const postRouter = createTRPCRouter({

  getAllPosts: publicProcedure
    .query(async ({ctx}) => {
      const cacheResult = await cacheAllPostSchema.safeParseAsync(JSON.parse(await ctx.redis.call("JSON.GET", "allPosts") as string));
      if(cacheResult.success) {
        return cacheResult.data;
      }
      console.log("not cached, fetching fresh data");

      const res = await cacheAllPostSchema.safeParseAsync(await getBlogPosts());
      if(!res.success) {
        return null
      };
      console.log("data fetched caching results")
      await ctx.redis.multi().call("JSON.SET", "allPosts", "$", JSON.stringify(res.data)).expire("allPosts", 3600).exec();
      
      return res.data;
    }),

    getSinglePost: publicProcedure
      .input(z.object({slug: z.string()}))
      .query(async ({ctx, input}) => {
        const cacheResult = await PostSchema.safeParseAsync(JSON.parse(await ctx.redis.call("JSON.GET", "Post", input.slug) as string));
        if(cacheResult.success) {
          return cacheResult.data;
        }
        
        
      })
});
