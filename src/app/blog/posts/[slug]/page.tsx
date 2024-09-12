import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from '~/app/_components/navbar'
import { getBlogPost } from '~/lib/ghost'

type props = {
  params: {
    slug: string
  }
}
export async function generateMetadata(
  { params }: props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  return {
    title: post.title
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  if (!post.html) return <></>
  return (
    <>
      <header className='fixed top-0 w-full md:relative'><Navbar /></header>
      <main className='min-h-screen dark:text-white  mt-28 md:mt-8 list-none'>
        {post.feature_image? <Image src={post.feature_image} alt='FEATURE IMAGE' width={1000} height={1000} priority={true} className='w-[80%] block mx-auto mb-8 md:w-[50%]'/> : <></>}
        <h1 className='text-center text-4xl font-bold md:text-6xl'>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} className='mt-6 w-[80%] mx-auto prose dark:prose-p:text-white dark:prose-a:text-slate-400'></div>
      </main>
    </>
  )
}