import Link from "next/link";

import { HydrateClient } from "~/trpc/server";
import Image from "next/image";
import Navbar from "./_components/navbar";

export default async function Home() {
  return (
    <HydrateClient>
      <header className="fixed top-0 w-full md:relative">
        <Navbar />
      </header>
      <main className="min-h-screen dark:text-white  mt-28 md:mt-8">

        <section className="text-center items-center md:flex md:flex-row-reverse">
          <Image width={1000} height={1000} src={"/milasholsting.png"} alt={"profil billede"} className="w-[80%] aspect-square block mt-8 rounded-lg ml-auto mr-auto md:w-[40%] lg:w-[10%]" />
          <div className="md:ml-24">
            <h1 className="text-4xl mt-4 sm:mt-0">Milas Holsting</h1>
            <h2 className="text-2xl ">&lt;Code is life /&gt;</h2>
              <li className="my-auto mr-3">teknologier:</li>
            <div className="flex justify-center flex-row gap-2">
              <picture>
                <Image width={32} height={32} alt={"react"} src={"/react_light.svg"} />
              </picture>
              <picture>
                <source srcSet="/next/light/icon.svg" media="(prefers-color-scheme:dark)" />
                <Image width={32} height={32} alt={"react"} src={"/next/light/icon.svg"} />
              </picture>
            </div>
          </div>
        </section>
        <hr className="mx-auto my-12 w-[90%]" />
        <section className="text-center">
          <h2 className="text-2xl ">Mine projekter</h2>
          <div className="grid mt-6 text-left">
            <article className="bg-slate-900 p-4 rounded-lg m-4">
              <h1 className="font-bold">Portfolio:</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sit quaerat quidem saepe placeat sunt ducimus nisi odio eveniet natus error facilis illum ad nihil assumenda,
                omnis, in neque, consequuntur totam.
              </p>
            </article>
          </div>
        </section>
      </main>
    </HydrateClient>
  );
}
