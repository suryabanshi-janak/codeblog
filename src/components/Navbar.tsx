import Link from 'next/link';
import { Icons } from './Icons';

const SOCIAL_LINKS = [
  { href: 'https://linkedin.com', icon: Icons.linkedin },
  { href: 'https://twitter.com', icon: Icons.twitter },
  { href: 'https://github.com', icon: Icons.github },
  { href: 'https://dribbble.com', icon: Icons.dribble },
];

export default function Navbar() {
  return (
    <header className='flex items-center justify-between h-20 px-5 sm:px-10 w-full'>
      <Link
        href='/'
        className='font-semibold text-lg md:text-xl tracking-tight'
      >
        CodeBlog
      </Link>

      <nav className='flex items-center space-x-4 border border-dark rounded-full capitalize font-medium w-max px-8 py-3 fixed right-1/2 translate-x-1/2 top-6'>
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
            <Icon className='w-6 h-6 hover:scale-105 transition-all ease duration-200' />
          </a>
        ))}
      </div>
    </header>
  );
}
