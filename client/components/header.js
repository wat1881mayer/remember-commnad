import React from 'react';
import Link from 'next/link';

const Header = ({ currentUser }) => {
  const links = [
    currentUser && {
      label: 'Create Test',
      href: '/tests/createtest',
      style:
        'mx-8 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500',
    },
    currentUser && {
      label: 'My Page',
      href: '/mypage',
      style:
        'mx-8 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500',
    },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href, style, id }) => {
      return (
        <div key={href}>
          <Link href={href} key={id}>
            <a className={style}>{label}</a>
          </Link>
        </div>
      );
    });

  const authLinks = [
    !currentUser && {
      label: 'Sign In',
      href: '/auth/signin',
      style:
        'block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto',
    },

    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href, style, id }) => {
      return (
        <li key={href}>
          <Link href={href} key={id}>
            <a className={style}>{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-6 shadow lg:flex lg:w-full lg:justify-between lg:items-center">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <a
              className="text-lg font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href=""
            >
              Remember Commnad
            </a>
          </Link>
        </div>

        {/* <!-- Mobile menu button --> */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
      <div className="flex flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
        <Link href="/testlist">
          <a className="mx-8 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500">
            Tests
          </a>
        </Link>
        <Link href="/cheatsheet">
          <a
            className="mx-8 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
            href="#"
          >
            Cheat Sheet
          </a>
        </Link>

        <Link href="/">
          <a
            className="mx-8 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
            href="#"
          >
            Contact
          </a>
        </Link>
        {links}
      </div>
      <ul>{authLinks}</ul>
    </nav>
  );
};

export default Header;
