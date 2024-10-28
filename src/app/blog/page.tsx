import Link from "next/link";
import { type ReactElement } from "react";
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
        renderList.push(<article key={i} className="bg-slate-700 p-4">
            <Link href={`/blog/posts/${post.slug}`} className="hover:cursor-help" prefetch>{post.title}</Link>
            <section>
                <p>{post.excerpt}</p>
            </section>
        </article>)
    })
    return (
        <>
        <header><Navbar/></header>
        <main className="">
            <h1>THIS IS WORK IN PROGRESS</h1>
            <h1>Recent blogs</h1>
            <div className="grid grid-cols-1 gap-4 w-[80%] mx-auto mt-8">
                    {renderList}
            </div>
        </main>
        </>
    )
}
