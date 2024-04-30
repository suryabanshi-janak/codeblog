import Link from 'next/link';
import { Icons } from './Icons';
import { SOCIAL_LINKS } from '@/lib/constants.';

export default function Navbar() {
  return (
    <header className='flex items-center justify-between h-24 px-5 sm:px-10 w-full'>
      <Link
        href='/'
        className='font-semibold text-lg md:text-xl tracking-tight'
      >
        CodeBlog
      </Link>

      <nav
        className='w-max py-3 px-8 gap-x-4 border border-dark rounded-full font-medium capitalize items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50'
      >
        <Link href=''>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <button>
          <Icons.sun />
        </button>
      </nav>

      <div className='flex items space-x-3'>
        {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
          <a key={href} href={href} target='_blank' rel='noopener noreferrer'>
            <Icon className='w-6 h-6 hover:scale-125 transition-all ease duration-200' />
          </a>
        ))}
      </div>
    </header>
  );
}
