import Link from "next/link";
import { type ReactElement } from "react";
import { getBlogPosts} from "~/lib/ghost";
import Navbar from "../_components/navbar";
import { unstable_noStore } from "next/cache";
import { api } from "~/trpc/server";

export const revalidate = 60

export default async function Blog() {
    unstable_noStore()
    const posts = await api.post.getAllPosts();
    const renderList:ReactElement[] = []
    if(!posts) {
        console.log("why never?")
        return;
    }
    console.log(posts);
    posts.map((post, i) => {
        renderList.push(<Link key={i} href={`/blog/posts/${post.slug}`} prefetch><h1>{post.title}</h1></Link>)
    })
    return (
        <>
        <header><Navbar/></header>
        <main>
            <h1>THIS IS WORK IN PROGRESS</h1>
            <h1>Recent blogs</h1>
            <li>
                {renderList}
            </li>
        </main>
        </>
    )
}
