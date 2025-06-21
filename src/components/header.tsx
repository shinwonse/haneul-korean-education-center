import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NAVIGATION_LINKS = [
  { label: "학원 소개", href: "/about" },
  { label: "교육 과정", href: "/curriculum" },
  { label: "입학 안내", href: "/admission" },
] as const;

export function Header() {
  return (
    <header className="px-5 py-3 sticky top-0 z-50 w-full">
      <div className="">
        <div className="mx-auto grid grid-cols-3 items-center">
          {/* Logo and title */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="logo_black.svg"
              alt="하늘국어영재원 로고"
              width={45}
              height={45}
            />
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-primary leading-tight">
                하늘국어영재원
              </h1>
            </div>
          </Link>

          {/* Navigation - Center */}
          <nav className={cn("hidden md:flex items-center justify-center gap-20")}>
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn("font-medium text-center text-base hover:text-primary")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Empty space for balance */}
          <div></div>
        </div>
      </div>
    </header>
  );
}