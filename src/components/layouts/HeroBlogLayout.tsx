import Image from 'next/image';
import Link from 'next/link';
import { slug } from 'github-slugger';

import Tag from '../Tag';
import { Blog } from 'contentlayer/generated';

export default function HeroBlogLayout({ blog }: { blog: Blog }) {
  return (
    <div className='w-full inline-block'>
      <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
        <div className='absolute inset-0 z-0 rounded-3xl bg-gradient-to-b from-transparent to-dark/90' />
        <Image
          src={blog.image.filePath.replaceAll('../../public', '')}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className='w-full h-full object-center object-cover rounded-3xl -z-10'
          sizes='100vw'
          priority
        />

        <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
          <Tag href={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
          <Link href={blog.url} className='mt-6'>
            <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
              <span className='bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                {blog.title}
              </span>
            </h1>
            <p className='hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-inter'>
              {blog.description}
            </p>
          </Link>
        </div>
      </article>
    </div>
  );
}
