import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer
      className={cn(
        'flex flex-col gap-10 items-center justify-center py-12 bg-[#2A338E]',
      )}
    >
      <div className={cn('flex flex-row gap-4')}>
        <Link
          href="https://www.instagram.com/haneul.edu_?igsh=MXFhM2M5Y21laG9xbg=="
          target="_blank"
          className={cn(
            'w-20 h-20 rounded-full bg-[#2A338E] shadow-[2px_3px_10px_rgba(0,0,0,0.51)] flex items-center justify-center',
          )}
        >
          <Image src="/instagram.svg" alt="instagram" width={40} height={40} />
        </Link>

        <Link
          href="https://m.blog.naver.com/PostList.naver?blogId=reong202"
          target="_blank"
          className={cn(
            'w-20 h-20 rounded-full bg-[#2A338E] shadow-[2px_3px_10px_rgba(0,0,0,0.51)] flex items-center justify-center',
          )}
        >
          <Image src="/blog.png" alt="blog" width={40} height={40} />
        </Link>

        <Link
          href="https://band.us/n/a9adbfdah9U4D"
          target="_blank"
          className={cn(
            'w-20 h-20 rounded-full bg-[#2A338E] shadow-[2px_3px_10px_rgba(0,0,0,0.51)] flex items-center justify-center',
          )}
        >
          <Image src="/band.png" alt="band" width={60} height={40} />
        </Link>
      </div>
      <div>
        <p className={cn('text-white text-xs')}>
          ⓒ haneuledu all rights reserved.
        </p>
      </div>
    </footer>
  );
}
