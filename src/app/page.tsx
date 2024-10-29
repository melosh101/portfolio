import { HydrateClient } from "~/trpc/server";
import Image from "next/image";
import Navbar from "./_components/navbar";
import { ProjectCard, ProjectDescription, ProjectFooter, ProjectTitle } from "./projectCard";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="min-h-screen mt-28 md:mt-8 list-none">

        <section className="text-center items-center md:flex md:flex-row-reverse md:justify-center">
          <Image width={512} height={512} src={"/milasholsting.png"} alt={"profil billede"} className="w-[80%] aspect-square block mt-8 rounded-lg mx-auto md:w-[40%] lg:w-[30%] md:mx-4 shadow-lg dark:shadow-slate-900 shadow-slate-500" />
          <div className="md:my-auto">
            <h1 className="text-4xl mt-4 sm:mt-0 md:text-6xl">Milas Holsting</h1>
            <li className="text-xl font-mono md:text-4xl md:mt-4">&lt;Code is life/&gt;</li>
            <article className="block text-left mt-4 mx-4 px-4 py-2 rounded-lg dark:bg-slate-900 bg-gray-300 shadow-md shadow-slate-500 dark:shadow-slate-950">
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
                <Image width={32} height={32} alt={"react"} src={"/javascript.svg"} className="md:w-12 md:h-12"/>
              </picture>
              <picture>
                <Image width={32} height={32} alt={"react"} src={"/typescript.svg"} className="md:w-12 md:h-12"/>
              </picture>
              <picture>
                <Image width={32} height={32} alt={"react"} src={"/react_light.svg"} className="md:w-12 md:h-12"/>
              </picture>
              <picture className="">
                <source srcSet="/next/dark/icon.svg" media="(prefers-color-scheme:dark)" />
                <Image width={32} height={32} alt={"react"} src={"/next/light/icon.svg"} className="md:w-12 md:h-12" />
              </picture>
              <picture>
                <Image width={444} height={680} alt={"react"} src={"/elixir.png"}  className="bg-inherit dark:bg-slate-100 aspect-auto w-[21px] h-[32px] md:h-[48px] md:w-[31px]"/>
              </picture>
              <picture>
                <Image width={32} height={32} alt={"react"} src={"/csharp.svg"}  className="aspect-auto w-[21px] h-[32px] md:h-[48px] md:w-[48px]"/>
              </picture>
              <picture>
                <Image width={32} height={32} alt={"react"} src={"/tailwindcss.svg"}  className="aspect-auto w-[21px] h-[32px] md:h-[48px] md:w-[48px]"/>
              </picture>
            </div>
          </div>
        </section>
        <hr className="mx-auto my-12 w-[90%] border-slate-600 dark:border-slate-500 border-[2px] rounded-sm shadow-md shadow-slate-950" />
        <section className="text-center lg:w-[60%] gap-8 mx-auto">
          <h2 className="text-2xl ">Mine projekter.</h2>
          <div className="mt-6 text-left lg:grid lg:grid-cols-2">
            <ProjectCard>
              <ProjectTitle>Portfolie:</ProjectTitle>
              <ProjectDescription>
                Kort sagt er det den side du kikker på nu. Den er lavet med Typescript og Next.js. <br />
              </ProjectDescription>
              <ProjectFooter>
                <li>se kilde koden <a href="https://github.com/melosh101/portfolio/" target="_blank" className="text-blue-400 hover:text-purple-400">HER</a></li>
              </ProjectFooter>
            </ProjectCard>
            <ProjectCard>
              <ProjectTitle>Akov news 23-24:</ProjectTitle>
              <ProjectDescription>
                Askov news er en nyheds side, som blev lavet i vores Politiske uge på Akskov efterskole. <br />
              </ProjectDescription>
              <ProjectFooter>
                <li className="">Se siden her<a href="https://2023.askov.news/" target="_blank" className="text-blue-400 hover:text-purple-400">HER</a></li>
                <li className="">Se kilde koden <a href="https://github.com/melosh101/askovNews23-24/" target="_blank" className="text-blue-400 hover:text-purple-400">HER</a></li>
              </ProjectFooter>
            </ProjectCard>
            <ProjectCard>
              <ProjectTitle>Go hollywood:</ProjectTitle>
              <ProjectDescription>
                Go hollywood er et projekt, som jeg lavede i forbindelse med min uddannelse på RTS. <br />
                Go hollywood var et projekt hvor vi skulle lave en tailer og en hjemmeside for en fiktiv film produktion. <br />
                Jeg var med til at lave hjemmesiden, som er lavet med Next.js og TailwindCSS.
              </ProjectDescription>
              <ProjectFooter>
                <li className="">Se kilde koden <a href="https://github.com/melosh101/askovNews23-24/" target="_blank" className="text-blue-400 hover:text-purple-400">HER</a></li>
              </ProjectFooter>
            </ProjectCard>
            <ProjectCard>
              <ProjectTitle>Fact of the day:</ProjectTitle>
              <ProjectDescription>
                Fact of the day er en Discord bot, som jeg er co-maintainer af. <br />
                Den er lavet med Discord.js og javascript.
                Den bruger discord.js til at sende en tilfældig fakta om en person til en discord server.
              </ProjectDescription>
              <ProjectFooter>
                <li className="">Kilde koden er ikke offentligt tilgængelig.</li>
              </ProjectFooter>
            </ProjectCard>
          </div>
        </section>
      </main>
    </HydrateClient>
  );
}
