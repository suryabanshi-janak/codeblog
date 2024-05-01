import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { slug } from 'github-slugger';

import Tag from '@/components/Tag';
import { allBlogs } from 'contentlayer/generated';
import RenderMDX from '@/components/RenderMDX';

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) return;

  return (
    <>
      <div className='bg-dark h-[70vh] w-full relative text-center mb-8'>
        <div className='w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Tag
            name={blog.tags[0]}
            href={`/categories/${slug(blog.tags[0])}`}
            className='px-6 text-sm py-2'
          />
          <h1 className='inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6'>
            {blog.title}
          </h1>
        </div>

        <div className='absolute inset-0 h-full bg-dark/60 dark:bg-dark/40' />
        <Image
          src={blog.image.filePath.replace('../../public', '')}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className='aspect-square w-full h-full object-cover object-center'
          priority
          sizes='100vw'
        />
      </div>

      <div className='px-2  md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg'>
        <time className='m-3'>
          {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
        </time>
        <span className='m-3'>20 views</span>
        <div className='m-3'>{blog.readingTime.text}</div>
        <Link href={`/categories/${slug(blog.tags[0])}`} className='m-3'>
          #{blog.tags[0]}
        </Link>
      </div>

      <div className='grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10'>
        <div className='col-span-12  lg:col-span-4'>TOC</div>
        <RenderMDX blog={blog} />
      </div>
    </>
  );
}
