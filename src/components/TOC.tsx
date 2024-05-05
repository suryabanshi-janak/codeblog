interface TOCProps {
  toc: {
    level: string;
    text: string;
    slug: string;
  }[];
}

export default function TOC({ toc }: TOCProps) {
  return (
    <div className='col-span-12  lg:col-span-4'>
      <details
        className='border border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto'
        open
      >
        <summary className='text-lg font-semibold capitalize cursor-pointer'>
          Table of Contents
        </summary>

        <ul className='font-inter text-base mt-4'>
          {toc?.map((heading) => {
            return (
              <li key={`#${heading.slug}`} className='py-1'>
                <a
                  href={`#${heading.slug}`}
                  data-level={heading.level}
                  className='data-[level=two]:pl-0  data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start'
                >
                  {heading.level === 'three' ? (
                    <span className='flex w-1 h-1 rounded-full bg-dark mr-2'>
                      &nbsp;
                    </span>
                  ) : null}

                  <span className='hover:underline'>{heading.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </details>
    </div>
  );
}
