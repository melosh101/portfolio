import { PostsOrPages } from "@tryghost/content-api";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactElement, use, useEffect } from "react";
import { getBlogPosts, ghostClient } from "~/lib/ghost";


export default async function Blog() {
    const posts = await getBlogPosts();
    const renderList:ReactElement[] = []
    if(!posts) {
        console.log("why never?")
        return;
    }
    posts.map((post, i) => {
        renderList.push(<Link key={i} href={`/blog/posts/${post.slug}`}><h1>{post.title}</h1></Link>)
    })
    return (
        <>
        {renderList}
        </>
    )
}
