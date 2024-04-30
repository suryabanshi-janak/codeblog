import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Tag({
  name,
  href,
  className,
}: {
  name: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-block py-2 sm:py-3 px-6 sm:px-10  bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base',
        className
      )}
    >
      {name}
    </Link>
  );
}
