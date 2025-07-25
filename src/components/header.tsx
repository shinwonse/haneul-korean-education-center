'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NAVIGATION_LINKS = [
  {
    label: '학원 소개',
    href: '/about',
    submenus: [
      { label: '인사말', href: '/about#greeting' },
      { label: '가치와 비전', href: '/about#value' },
      { label: '학원 위치 안내', href: '/about#location' },
      { label: '학원 규정', href: '/about#rules' },
    ],
  },
  {
    label: '교육 과정',
    href: '/curriculum',
    submenus: [
      { label: '월별 스케줄', href: '/curriculum#schedule' },
      { label: '수업 구성', href: '/curriculum#structure' },
    ],
  },
  {
    label: '입학 안내',
    href: '/admission',
    submenus: [],
  },
] as const;

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (href: string) => {
    setActiveSubmenu(href);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <header
      className={cn(
        'px-4 sm:px-5 py-3 h-[70px] sticky top-0 z-50 w-full bg-white',
      )}
    >
      <div className={cn('mx-auto')}>
        {/* Desktop Layout */}
        <div className={cn('hidden md:grid grid-cols-3 items-center h-full')}>
          {/* Logo and title */}
          <Link href="/" className={cn('flex items-center gap-4')}>
            <Image
              src="logo_blue.svg"
              alt="하늘국어영재원 로고"
              width={45}
              height={45}
            />
            <div className={cn('flex flex-col')}>
              <h1
                className={cn('text-lg font-bold text-[#2A338E] leading-tight')}
              >
                하늘국어영재원
              </h1>
            </div>
          </Link>

          {/* Navigation - Center */}
          <nav
            className={cn(
              'flex items-center justify-center gap-8 lg:gap-16 xl:gap-20',
            )}
          >
            {NAVIGATION_LINKS.map((link) => (
              <div
                key={link.href}
                className={cn('relative group')}
                onMouseEnter={() =>
                  link.submenus.length > 0
                    ? handleMouseEnter(link.href)
                    : undefined
                }
                onMouseLeave={
                  link.submenus.length > 0 ? handleMouseLeave : undefined
                }
              >
                <Link
                  href={link.href}
                  className={cn(
                    'font-medium font-gmarket-medium text-center text-base transition-all duration-200 whitespace-nowrap hover:text-[#2A338E] hover:text-lg',
                  )}
                >
                  {link.label}
                </Link>

                {/* Desktop Submenu */}
                {activeSubmenu === link.href && link.submenus.length > 0 && (
                  <div
                    className={cn(
                      'absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-48 bg-white border rounded-lg shadow-lg py-2 z-50',
                    )}
                    onMouseEnter={() => handleMouseEnter(link.href)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.submenus.map((submenu) => (
                      <Link
                        key={submenu.href}
                        href={submenu.href}
                        className={cn(
                          'block px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors',
                        )}
                      >
                        {submenu.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Empty space for balance */}
          <div></div>
        </div>

        {/* Mobile Layout */}
        <div
          className={cn('md:hidden flex items-center justify-between h-full')}
        >
          {/* Logo and title */}
          <Link href="/" className={cn('flex items-center gap-2')}>
            <Image
              src="logo_blue.svg"
              alt="하늘국어영재원 로고"
              width={35}
              height={35}
            />
            <div className={cn('flex flex-col')}>
              <h1
                className={cn('text-base text-[#2A338E] font-bold leading-tight')}
              >
                하늘국어영재원
              </h1>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={cn('p-3 min-w-[44px] min-h-[44px]')}
            onClick={toggleMobileMenu}
            aria-label="메뉴 열기"
          >
            <div
              className={cn(
                'w-6 h-6 flex flex-col justify-center items-center relative',
              )}
            >
              <span
                className={cn(
                  'block w-5 h-0.5 bg-current transition-all duration-300 absolute',
                  isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5',
                )}
              />
              <span
                className={cn(
                  'block w-5 h-0.5 bg-current transition-all duration-300',
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100',
                )}
              />
              <span
                className={cn(
                  'block w-5 h-0.5 bg-current transition-all duration-300 absolute',
                  isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5',
                )}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div
            className={cn(
              'md:hidden absolute left-0 right-0 top-[70px] bg-white border-b shadow-lg',
            )}
          >
            <nav className={cn('py-4 px-4')}>
              {NAVIGATION_LINKS.map((link) => (
                <div key={link.href} className={cn('mb-2 last:mb-0')}>
                  {/* 상위 카테고리 */}
                  <div className={cn('flex items-center justify-between')}>
                    <Link
                      href={link.href}
                      className={cn(
                        'flex-1 py-3 px-2 font-medium text-base rounded transition-all duration-200 hover:text-[#2A338E] hover:text-lg hover:bg-gray-50',
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </div>

                  {/* ✅ 서브메뉴 (모바일용 하위 메뉴) */}
                  {link.submenus.length > 0 && (
                    <div className="ml-4 mt-2">
                      {link.submenus.map((submenu) => (
                        <Link
                          key={submenu.href}
                          href={submenu.href}
                          className={cn(
                            'block py-2 pl-4 text-sm rounded hover:text-[#2A338E] hover:bg-gray-50',
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          - {submenu.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
