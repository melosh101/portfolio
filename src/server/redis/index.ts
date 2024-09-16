import Redis from "ioredis";
import { env } from "~/env";

const redis = new Redis(`redis://default:${env.REDIS_PASSWORD}@${env.REDIS_HOST}:${env.REDIS_PORT}`)
redis.on("error", (err) => {console.error(err)})
if(redis.status == "close") {
    await redis.connect()
}

export {redis as RedisClient}