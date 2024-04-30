'use client';

import { type FieldValues, useForm } from 'react-hook-form';
import { SOCIAL_LINKS } from '@/lib/constants.';
import Link from 'next/link';

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <footer className='rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark'>
      <h3 className='mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4'>
        Interesting Stories | Updates | Guides
      </h3>
      <p className='mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base'>
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4'
      >
        <input
          type='text'
          placeholder='Enter your email'
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className='w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1 outline-none'
        />

        <input
          type='submit'
          className='bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1'
        />
      </form>

      <div className='flex items space-x-3 mt-8'>
        {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
          <a key={href} href={href} target='_blank' rel='noopener noreferrer'>
            <Icon className='w-6 h-6 hover:scale-125 transition-all ease duration-200 fill-light dark:fill-dark' />
          </a>
        ))}
      </div>

      <div className='w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between'>
        <span>
          &copy;{new Date().getFullYear()} CodeBlog. All rights reserved.
        </span>
        <Link href='/sitemap.xml' className='underline'>
          sitemap.xml
        </Link>
        <span>Made with &hearts;</span>
      </div>
    </footer>
  );
}
