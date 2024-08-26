import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import Image from "next/image";
import Navbar from "./_components/navbar";

export default async function Home() {
  return (
    <HydrateClient>
      <header>
        <nav id="navbar" className="col-span-2">
          <Navbar className="" />
        </nav>
      </header>
      <main className="min-h-screen bg-slate-800 text-white">
        <div className="relative grid h-full grid-cols-[2.5fr_1fr] dark:bg-background">
          <div
            id="gridContentWrapper"
            className="ml-[40%] h-full flex-nowrap items-center justify-end self-start"
          >
            <li className="font-snippet ml-[30%] mt-14 list-none text-8xl font-bold dark:text-white">
              Melosh
            </li>
            <li className="font-scp ml-[40%] mt-2 list-none text-2xl font-bold dark:text-white">
              &lt;Code is life /&gt;
            </li>
            <section className="font-scp grid h-full w-full list-none grid-cols-2 grid-rows-[auto_auto_auto] justify-around gap-4 self-end pt-9 font-medium">
              <article className="col-span-1 size-12 h-full w-full rounded-md bg-primary p-2 dark:text-white">
                <li className="text-xl">Want to see more?</li>
                <li className="text-l">
                  including blog posts, self-hosting projects and much more
                </li>
              </article>
              <article className="col-span-1 size-12 h-full w-full rounded-md bg-primary p-2 dark:text-white">
                <li className="text-xl">Want to see more?</li>
                <li className="text-l">
                  including blog posts, self-hosting projects and much more
                </li>
              </article>
              <article className="col-span-1 size-12 h-full w-full rounded-md bg-primary p-2 dark:text-white">
                <li className="text-xl">Want to see more?</li>
                <li className="text-l">
                  including blog posts, self-hosting projects and much more
                </li>
              </article>
              <article className="col-span-1 size-12 h-full w-full rounded-md bg-primary p-2 dark:text-white">
                <li className="text-xl">Want to see more?</li>
                <li className="text-l">
                  including blog posts, self-hosting projects and much more
                </li>
              </article>
              <Link
                className="relative list-none self-start"
                href={"https://github.com/melosh101"}
                target="_blank"
              >
                Check out my github
              </Link>
            </section>
          </div>
          <section className="col-span-1 h-full w-full">
            <Image
              alt="pfp"
              src={"/pfp_nobg.svg"}
              height={"1000"}
              width={"1000"}
              className="ml-12 mt-20 h-[80%] w-[80%]"
            />
          </section>
        </div>
      </main>
    </HydrateClient>
  );
}
