import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: '/about', label: 'About Us' },
    { href: '/members', label: 'Members' },
    { href: '/projects', label: 'Projects' },
    { href: '/students', label: 'Students' },
    { href: '/nonprofits', label: 'Nonprofits' },
    { href: '/donate', label: 'Donate' },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 md:px-8">
      <Link href="/" className="flex items-center gap-3">
        <img
          className="h-8 w-auto sm:h-9 md:h-10"
          src="/assets/logo-white.png"
          alt="Hack4Impact logo"
        />
        <span
          className="text-sm font-medium tracking-wide text-white/90 sm:text-base"
          style={{ letterSpacing: '0.04em' }}
        >
          Cal Poly SLO
        </span>
      </Link>

      {/* Desktop links */}
      <div className="hidden items-center gap-6 sm:gap-8 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors hover:text-white sm:text-base ${
              router.pathname === link.href ? 'text-white' : 'text-white/50'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center text-white/70 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full z-50 border-t border-white/10 bg-[#0e1235]/95 backdrop-blur-md md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5 ${
                router.pathname === link.href ? 'text-white' : 'text-white/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
