import { HydrateClient } from "~/trpc/server";
import Image from "next/image";
import Navbar from "./_components/navbar";
import milasholsting from "$/milasholsting.png";
import javascript from "$/javascript.svg"
import typescript from "$/typescript.svg"
import react from "$/react_light.svg"
import next_dark from "$/next/dark/icon.svg"
import next_light from "$/next/light/icon.svg"
import elixir from "$/elixir.png"
import csharp from "$/csharp.svg"
import tailwind from "$/tailwindcss.svg"

export default async function Home() {
  return (
    <HydrateClient>
      <header className="fixed top-0 w-full md:relative">
        <Navbar />
      </header>
      <main className="min-h-screen mt-28 md:mt-8 list-none">

        <section className="text-center items-center md:flex md:flex-row-reverse md:justify-center">
          <Image width={1000} height={1000} src={milasholsting} alt={"profil billede"} className="w-[80%] aspect-square block mt-8 rounded-lg mx-auto md:w-[40%] lg:w-[30%] md:mx-4 " />
          <div className="md:my-auto">
            <h1 className="text-4xl mt-4 sm:mt-0 md:text-6xl">Milas Holsting</h1>
            <li className="text-xl font-mono md:text-4xl md:mt-4">&lt;Code is life/&gt;</li>
            <article className="block text-left mt-4 mx-4 px-4 py-2 rounded-lg dark:bg-slate-900 ">
              <h3 className="font-semibold">Hvem er jeg?</h3>
              <p className="font-sans max-w-96">
                jeg er en 18 årig ung dreng, som elsker et god udfordring. <br />
                Jeg arbejder primært med React og Next.js men har også erferring med andre teknologier såsom
                Elixir/Pheonix, asp.net og unity.
              </p>
            </article>
            <li className="my-auto mr-3 mt-8 text-lg font-bold font-mono">Teknologier:</li>  
            {/* technology list */}
            <div className="flex justify-center flex-row gap-2">
              <picture>
                <Image width={32} height={32} alt={"react"} src={javascript} className="md:w-12 md:h-12"/>
              </picture>
              <picture>
                <Image width={32} height={32} alt={"react"} src={typescript} className="md:w-12 md:h-12"/>
              </picture>
              <picture>
                <Image width={32} height={32} alt={"react"} src={react} className="md:w-12 md:h-12"/>
              </picture>
              <picture className="">
                <source srcSet={next_dark} media="(prefers-color-scheme:dark)" />
                <Image width={32} height={32} alt={"react"} src={next_light} className="md:w-12 md:h-12" />
              </picture>
              <picture>
                <Image width={32} height={32} alt={"react"} src={tailwind}  className="aspect-auto w-[21px] h-[32px] md:h-[48px] md:w-[48px]"/>
              </picture>
              <picture>
                <Image width={444} height={680} alt={"react"} src={elixir}  className="bg-white aspect-auto w-[21px] h-[32px] md:h-[48px] md:w-[31px]"/>
              </picture>
              <picture>
                <Image width={32} height={32} alt={"react"} src={csharp}  className="aspect-auto w-[21px] h-[32px] md:h-[48px] md:w-[48px]"/>
              </picture>
            </div>
          </div>
        </section>
        <hr className="mx-auto my-12 w-[90%]" />
        <section className="text-center lg:w-[60%] gap-8 mx-auto">
          <h2 className="text-2xl ">Mine projekter.</h2>
          <div className="mt-6 text-left lg:grid lg:grid-cols-2">
            <article className="bg-slate-900 p-4 rounded-lg m-4">
              <h1 className="font-bold">Portfolie:</h1>
              <p>
                Kort sagt er det den side du kikker på nu. Den er lavet med Typescript og Next.js. <br />
                Alt inhold på min blog er skrevet på en self-hosted instans af <a className="text-blue-400 hover:text-purple-400" href="https://ghost.org">Ghost</a>
              </p>
              <li className="list-none mt-2">se kilde koden <a href="https://github.com/melosh101/portfolio/" target="_blank" className="text-blue-400 hover:text-purple-400">HER</a></li>
            </article>
            <article className="bg-slate-900 p-4 rounded-lg m-4">
              <h1 className="font-bold">Portfolio:</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sit quaerat quidem saepe placeat sunt ducimus nisi odio eveniet natus error facilis illum ad nihil assumenda,
                omnis, in neque, consequuntur totam.
              </p>
            </article>
            <article className="bg-slate-900 p-4 rounded-lg m-4">
              <h1 className="font-bold">Portfolio:</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sit quaerat quidem saepe placeat sunt ducimus nisi odio eveniet natus error facilis illum ad nihil assumenda,
                omnis, in neque, consequuntur totam.
              </p>
            </article>
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
