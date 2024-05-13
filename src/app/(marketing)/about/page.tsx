import Image from 'next/image';

import ProfleCharacter from '../../../public/character.png';
import Link from 'next/link';

const SKILLS = [
  'next.js',
  'tailwind css',
  'figma',
  'javaScript',
  'web design',
  'Gatsby.js',
  'strapi',
  'firebase',
  'generative AI',
  'wireframing',
  'SEO',
  'framer motion',
  'sanity',
];

export const metadata = {
  title: 'About Me',
  description: `Here are some details about my self.`,
};

export default function AboutPage() {
  return (
    <div>
      <section className='w-full md:h-[75vh] border-b-2 border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-dark dark:border-light flex justify-center'>
          <Image
            src={ProfleCharacter}
            alt='character'
            className='w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes='(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw'
          />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
          <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Dream Big, Work Hard, Achieve More!
          </h2>
          <p className='font-medium capitalize mt-4 text-base'>
            This Mantra Drives My Work As A Passionate Freelancer. I Blend
            Innovative Technology With Timeless Design For Captivating Digital
            Experiences. Inspired By Nature And Literature, I&apos;m A Perpetual
            Learner Embracing Challenges. With Each Project, I Aim To Leave A
            Lasting Impact—One Pixel At A Time.
          </p>
        </div>
      </section>

      <section
        className='w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light
     text-dark dark:text-light'
      >
        <span className='font-semibold text-lg sm:text-3xl md:text-4xl text-accent dark:text-accentDark'>
          I&apos;m comfortable in...
        </span>
        <ul className='flex flex-wrap mt-8 justify-center  xs:justify-start'>
          {SKILLS.map((item, index) => {
            return (
              <li
                key={index}
                className='font-semibold inline-block capitalize text-base xs:text-lg sm:text-xl  md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-dark dark:border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4  md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal'
              >
                {item}
              </li>
            );
          })}
        </ul>
      </section>

      <h2 className='mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal'>
        Have a project in mind? Reach out to me 📞 from{' '}
        <Link href='/contact' className='!underline underline-offset-2'>
          here
        </Link>{' '}
        and let&apos;s make it happen.
      </h2>
    </div>
  );
}
