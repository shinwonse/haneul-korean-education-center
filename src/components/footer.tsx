import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils"

export function Footer() {
  return (
    <footer className={cn("flex flex-col gap-10 items-center justify-center py-12 bg-[#2A338E]")}>
      <div className={cn("flex flex-row gap-4")}>
        <Link href="https://www.instagram.com/binggrae_official/" className={cn("w-12 h-12 rounded-full bg-[#2A338E] border-2 border-[#1a1f5c] shadow-lg shadow-black/30 flex items-center justify-center")}>
          <Image src="instagram.svg" alt="instagram" width={24} height={24} />
        </Link>
      </div>
      <div>
        <p className="text-white text-xs">ⓒ Binggrae all rights reserved.</p>
      </div>
    </footer>
  );
}