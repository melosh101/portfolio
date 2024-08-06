import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import Navbar from "./_components/navbar";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="text-white bg-slate-800 min-h-screen">
        <div id="navbar" className='col-span-2'>
          <Navbar className='' />
        </div>
        <div className="grid grid-cols-[2.5fr_1fr] h-full relative dark:bg-background">
          <div id="gridContentWrapper" className="items-center self-start justify-end h-full ml-[40%] flex-nowrap">
            <li className='font-bold list-none dark:text-white text-8xl mt-14 font-snippet ml-[30%]'>Melosh</li>
            <li className='dark:text-white text-2xl mt-2 font-bold font-scp list-none ml-[40%]'>&lt;Code is life /&gt;</li>
            <div className='grid self-end font-medium font-scp justify-around w-full h-full grid-cols-2 grid-rows-[auto_auto_auto] gap-4 list-none pt-9'>
              <div className="w-full h-full col-span-1 p-2 rounded-md dark:text-white size-12 bg-primary">
                <li className='text-xl'>Want to see more?</li>
                <li className='text-l'>
                  including blog posts, self-hosting projects and much more
                </li>
              </div>
              <div className="w-full h-full col-span-1 p-2 rounded-md dark:text-white size-12 bg-primary">
                <li className='text-xl'>Want to see more?</li>
                <li className='text-l'>
                  including blog posts, self-hosting projects and much more
                </li>
              </div>
              <div className="w-full h-full col-span-1 p-2 rounded-md dark:text-white size-12 bg-primary">
                <li className='text-xl'>Want to see more?</li>
                <li className='text-l'>
                  including blog posts, self-hosting projects and much more
                </li>
              </div>
              <div className="w-full h-full col-span-1 p-2 rounded-md dark:text-white size-12 bg-primary">
                <li className='text-xl'>Want to see more?</li>
                <li className='text-l'>
                  including blog posts, self-hosting projects and much more
                </li>
              </div>
              <Link className='relative self-start list-none' href={"https://github.com/melosh101"} target="_blank">Check out my github</Link>

            </div>
          </div>
          <div className='w-full h-full col-span-1 '>
            <img src="/pfp.png" alt="" className=" mt-20 ml-12 w-[80%] h-[80%]" />
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
