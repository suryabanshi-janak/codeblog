'use client';

import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { Blog } from 'contentlayer/generated';

const mdxComponents = {
  Image,
};

export default function RenderMDX({ blog }: { blog: Blog }) {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div className='col-span-12 lg:col-span-8 font-inter prose sm:prose-base md:prose-lg max-w-max'>
      <MDXContent components={mdxComponents} />
    </div>
  );
}
