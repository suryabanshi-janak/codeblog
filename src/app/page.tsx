import Link from 'next/link';

import HorizontalBlogLayout from '@/components/layouts/HorizontalBlogLayout';
import CoverBlogLayout from '@/components/layouts/CoverBlogLayout';
import HeroBlogLayout from '@/components/layouts/HeroBlogLayout';
import VerticalBlogLayout from '@/components/layouts/VerticalBlogLayout';
import { allBlogs } from 'contentlayer/generated';
import { sortBlogs } from '@/lib/utils';

export default function Home() {
  const sortedBlogs = sortBlogs(allBlogs);

  return (
    <main className='flex flex-col items-center justify-center'>
      <HeroBlogLayout blog={sortedBlogs[0]} />

      <section className='w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center'>
        <h2 className='w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light'>
          Featured Posts
        </h2>
        <div className='grid grid-cols-2 row-span-2 gap-6 mt-10 sm:mt-16'>
          <article className='col-span-2 sxl:col-span-1 row-span-2 relative'>
            <CoverBlogLayout blog={sortedBlogs[1]} />
          </article>
          <article className='col-span-2 sm:col-span-1 row-span-1 relative'>
            <HorizontalBlogLayout blog={sortedBlogs[2]} />
          </article>
          <article className=' col-span-2 sm:col-span-1 row-span-1 relative'>
            <HorizontalBlogLayout blog={sortedBlogs[3]} />
          </article>
        </div>
      </section>

      <section className='w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center'>
        <div className='w-full flex justify-between'>
          <h2 className='w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light'>
            Recent Posts
          </h2>
          <Link
            href='/categories/all'
            className='inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg'
          >
            View all
          </Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16'>
          {sortedBlogs.slice(4, 10).map((blog) => (
            <article key={blog._id} className='col-span-1 row-span-1 relative'>
              <VerticalBlogLayout blog={blog} />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
