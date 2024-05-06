import VerticalBlogLayout from '@/components/layouts/VerticalBlogLayout';
import { cn } from '@/lib/utils';
import { allBlogs } from 'contentlayer/generated';
import { slug } from 'github-slugger';
import Link from 'next/link';

export default function Categories({ params }: { params: { slug: string } }) {
  const categories = ['all'];
  allBlogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      const slugified = slug(tag);
      if (!categories.includes(slugified)) {
        categories.push(slugified);
      }
    });
  });

  const blogs = allBlogs.filter((blog) => {
    if (params.slug === 'all') return true;
    return blog.tags.some((tag) => params.slug === slug(tag));
  });

  return (
    <article className='mt-12 flex flex-col text-dark dark:text-light'>
      <div className='px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col'>
        <h1 className='mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl'>
          #{params.slug}
        </h1>
        <span className='mt-2 inline-block'>
          Discover more categories and expand your knowledge!
        </span>
      </div>

      <div className=' px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10'>
        {categories.sort().map((category) => (
          <Link
            key={category}
            href={`/categories/${slug(category)}`}
            className={cn(
              'inline-block py-1.5  md:py-2 px-6  md:px-10 rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2',
              category === slug(params.slug)
                ? 'bg-dark text-light dark:bg-light dark:text-dark'
                : 'bg-light text-dark dark:bg-dark dark:text-light'
            )}
          >
            #{category}
          </Link>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32'>
        {blogs.map((blog) => (
          <VerticalBlogLayout blog={blog} key={blog._id} />
        ))}
      </div>
    </article>
  );
}
