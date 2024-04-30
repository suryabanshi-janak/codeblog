import { type ClassValue, clsx } from 'clsx';
import { compareDesc, parseISO } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { Blog } from 'contentlayer/generated';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sortBlogs = (blogs: Blog[]) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
