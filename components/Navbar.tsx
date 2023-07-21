import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/outline';
import config from '../config';

const Navbar = () => {
  const [expanded, expand] = useState(false);

  return (
    <nav>
      <div className="flex justify-between items-center mx-8 lg:mx-16 my-8">
        <div className="flex items-center space-x-2">
          <img
            width="47"
            height="47"
            src={config.assets.logo_color}
            alt="hack4impact logo, with color"
          />
          <Link href="/" passHref legacyBehavior>
            <span
              className="block cursor-pointer font-bold sm:text-lg text-blue"
              onClick={() => expand(false)}
              onKeyPress={() => expand(false)}
              role="link"
              tabIndex={0}
            >
              Hack4Impact Cal Poly
            </span>
          </Link>
        </div>

        <div>
          <div className="md:hidden">
            <div
              className="cursor-pointer text-blue w-8 h-8"
              onClick={() => expand(!expanded)}
              onKeyPress={() => expand(!expanded)}
              role="button"
              tabIndex={0}
            >
              <MenuIcon />
            </div>
          </div>
          <div className="hidden md:block md:space-x-4 lg:space-x-12 text-blue font-strong">
            <Link href="/about">
              About
            </Link>
            <Link href="/projects">
              Projects
            </Link>
            <Link href="/students">
              Students
            </Link>
            <Link href="/nonprofits">
              Nonprofits
            </Link>
            <Link href="/donate">
              Donate
            </Link>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="md:hidden absolute w-full bg-gray-50 shadow-md z-10">
          <Link href="/" passHref legacyBehavior>
            <span
              className="block cursor-pointer font-bold sm:text-lg text-blue px-6 py-3 border-blue border-b-2"
              onClick={() => expand(!expanded)}
              onKeyPress={() => expand(!expanded)}
              role="link"
              tabIndex={0}
            >
              Home
            </span>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <span
              className="block cursor-pointer font-bold sm:text-lg text-blue px-6 py-3 border-blue border-b-2"
              onClick={() => expand(!expanded)}
              onKeyPress={() => expand(!expanded)}
              role="link"
              tabIndex={0}
            >
              About us
            </span>
          </Link>
          <Link href="/projects" passHref legacyBehavior>
            <span
              className="block cursor-pointer font-bold sm:text-lg text-blue px-6 py-3 border-blue border-b-2"
              onClick={() => expand(!expanded)}
              onKeyPress={() => expand(!expanded)}
              role="link"
              tabIndex={0}
            >
              Projects
            </span>
          </Link>
          <Link href="/students" passHref legacyBehavior>
            <span
              className="block cursor-pointer font-bold sm:text-lg text-blue px-6 py-3 border-blue border-b-2"
              onClick={() => expand(!expanded)}
              onKeyPress={() => expand(!expanded)}
              role="link"
              tabIndex={0}
            >
              Students
            </span>
          </Link>
          <Link href="/nonprofits" passHref legacyBehavior>
            <span
              className="block cursor-pointer font-bold sm:text-lg text-blue px-6 py-3 border-blue border-b-2"
              onClick={() => expand(!expanded)}
              onKeyPress={() => expand(!expanded)}
              role="link"
              tabIndex={0}
            >
              Nonprofits
            </span>
          </Link>
          <Link href="/donate" passHref legacyBehavior>
            <span
              className="block cursor-pointer font-bold sm:text-lg text-blue px-6 py-3 border-blue border-b-2"
              onClick={() => expand(!expanded)}
              onKeyPress={() => expand(!expanded)}
              role="link"
              tabIndex={0}
            >
              Donate
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
