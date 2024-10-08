import { createEnv } from "@t3-oss/env-nextjs";
import { number, z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.string().url(),
    GHOST_CONTENT_KEY: z.string(),
    GHOST_ADMIN_KEY: z.string(),
    GHOST_API_URL: z.string(),
    REDIS_HOST: z.string(),
    REDIS_PASSWORD: z.string(),
    REDIS_PORT: z.number(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    GHOST_ADMIN_KEY: process.env.GHOST_ADMIN_KEY,
    GHOST_API_URL: process.env.GHOST_API_URL,
    GHOST_CONTENT_KEY: process.env.GHOST_CONTENT_KEY,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    // @ts-ignore
    REDIS_PORT: parseInt(process.env.REDIS_PORT),
    REDIS_HOST: process.env.REDIS_HOST
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
