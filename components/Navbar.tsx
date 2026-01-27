import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import config from '../config';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  const activeStyles = 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-light';

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative transition-colors duration-200 hover:text-blue-light ${isActive ? activeStyles : ''}`}
    >
      {children}
    </Link>
  );
};

NavLink.defaultProps = {
  onClick: undefined,
};

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink = ({ href, children, onClick }: MobileNavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} passHref legacyBehavior>
      <span
        className={`block cursor-pointer font-bold sm:text-lg text-blue px-6 py-3 border-blue border-b-2 transition-colors duration-200 hover:bg-blue-lightest ${
          isActive ? 'bg-blue-lightest' : ''
        }`}
        onClick={onClick}
        onKeyPress={onClick}
        role="link"
        tabIndex={0}
      >
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [expanded, expand] = useState(false);

  const toggleMenu = () => expand(!expanded);
  const closeMenu = () => expand(false);

  return (
    <nav className="sticky top-0 z-20 backdrop-blur-fallback">
      <div className="flex justify-between items-center mx-8 lg:mx-16 py-6">
        <div className="flex items-center space-x-2">
          <img
            width="47"
            height="47"
            src={config.assets.logo_color}
            alt="hack4impact logo, with color"
          />
          <Link href="/" passHref legacyBehavior>
            <span
              className="block cursor-pointer font-bold sm:text-lg text-blue transition-colors duration-200 hover:text-blue-light"
              onClick={closeMenu}
              onKeyPress={closeMenu}
              role="link"
              tabIndex={0}
            >
              Hack4Impact Cal Poly
            </span>
          </Link>
        </div>

        <div>
          <div className="md:hidden">
            <button
              type="button"
              className="cursor-pointer text-blue w-8 h-8 transition-transform duration-200 hover:scale-110"
              onClick={toggleMenu}
              aria-label={expanded ? 'Close menu' : 'Open menu'}
              aria-expanded={expanded}
            >
              {expanded ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
          <div className="hidden md:block md:space-x-4 lg:space-x-12 text-blue font-strong">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/students">Students</NavLink>
            <NavLink href="/nonprofits">Nonprofits</NavLink>
            <NavLink href="/donate">Donate</NavLink>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-gray-50 shadow-md z-10 transition-all duration-300 ease-in-out overflow-hidden ${
          expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <MobileNavLink href="/" onClick={closeMenu}>Home</MobileNavLink>
        <MobileNavLink href="/about" onClick={closeMenu}>About us</MobileNavLink>
        <MobileNavLink href="/projects" onClick={closeMenu}>Projects</MobileNavLink>
        <MobileNavLink href="/students" onClick={closeMenu}>Students</MobileNavLink>
        <MobileNavLink href="/nonprofits" onClick={closeMenu}>Nonprofits</MobileNavLink>
        <MobileNavLink href="/donate" onClick={closeMenu}>Donate</MobileNavLink>
      </div>
    </nav>
  );
};

export default Navbar;
