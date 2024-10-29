import { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "www.milasholsting.dk",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1
        }
    ]
}