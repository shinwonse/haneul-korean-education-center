import { cn } from "@/lib/utils"
import Image from "next/image";

export function Footer() {
  return (
    <footer className={cn("flex flex-col items-center justify-center py-12 bottom-0 bg-[#2A338E]")}>
      <div className={cn("flex flex-row gap-4")}>
        <div className={cn("w-12 h-12 rounded-full bg-[#2A338E] border-2 border-[#1a1f5c] shadow-lg shadow-black/30 flex items-center justify-center")}>
          <Image src="instagram.svg" alt="instagram" width={24} height={24} />
        </div>
      </div>
      <div>
        <p className="text-white text-xs">ⓒ Binggrae all rights reserved.</p>
      </div>
    </footer>
  );
}