import Link from "next/link";

import { HydrateClient } from "~/trpc/server";
import Image from "next/image";
import Navbar from "./_components/navbar";

export default async function Home() {
  return (
    <HydrateClient>
      <header className="fixed top-0 w-full">
        <Navbar />
      </header>
      <main className="min-h-screen dark:text-white mt-28">

        <section className="text-center items-center">
          <Image width={1000} height={1000} src={"/milasholsting.png"} alt={"profil billede"} className="w-[80%] aspect-square block mt-8 rounded-lg ml-auto mr-auto" />
          <h1 className="text-4xl mt-4">Milas Holsting</h1>
          <h2 className="text-2xl ">&lt;Code is life /&gt;</h2>
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
