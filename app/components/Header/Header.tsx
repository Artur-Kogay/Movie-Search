'use client';

import Link from 'next/link';
import Container from '../Container/Container';
import { links } from '@/app/lib/constants/links.const';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import MovieSearch from '../MovieSearch/MovieSearch';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="!mt-[12px] !min-h-[50px]">
      <Container>
        <div className="flex justify-center gap-[16.6px] !mb-[19.23px]">
          {links.map(({ path, href }) => (
            <Link
              key={path}
              href={href}
              className={clsx(
                'border-b-2 !pb-[10px]',
                pathname === href
                  ? 'text-[#1890FF] border-[#1890FF]'
                  : 'text-[#000000A6] border-gray-300',
              )}
            >
              {path}
            </Link>
          ))}
        </div>

        {pathname === '/search' && <MovieSearch />}
      </Container>
    </header>
  );
};

export default Header;
