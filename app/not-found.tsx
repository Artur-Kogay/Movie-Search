'use client';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[calc(100vh-140px)]">
      <h1>404 | Page not found</h1>
      <Link
        className="!block text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm !px-5 !py-2.5 text-center !me-2 !mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        href={'/search'}
      >
        Go home
      </Link>
    </section>
  );
};

export default NotFound;
