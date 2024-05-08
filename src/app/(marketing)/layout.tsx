import { PropsWithChildren } from 'react';

const INSIGHTS = [
  '20+ Projects Completed',
  '3+ Years of Freelancing',
  '99% Client Satisfaction',
  '20K+ Subscribers',
  'Authored In-Depth Course on Educative',
  'Contributed as a Technical Course Reviewer 📝',
  'Recipient of the Hackernoon Noonies Award 🏆',
];

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <main className='w-full flex flex-col items-center justify-between'>
      <div className='w-full bg-accent dark:bg-accentDark text-light dark:text-dark whitespace-nowrap overflow-hidden'>
        <div className='animate-roll  w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base'>
          {INSIGHTS.map((text) => (
            <div key={text}>
              {text} <span className='px-4'>|</span>{' '}
            </div>
          ))}
        </div>
      </div>

      {children}
    </main>
  );
}
