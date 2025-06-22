import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function About() {
  return (
    <div className={cn("flex flex-col items-center")}>
      {/* 타이틀 */}
      <section></section>

      {/* 가치와 비전 */}
      <section>
        <Badge
          className={cn(
            "py-2 px-10 text-white text-lg font-medium rounded-full shadow-lg bg-[#2A338E]"
          )}
        >
          가치와 비전
        </Badge>
        <div className={cn("flex flex-col gap-10")}>
          <div className={cn("flex flex-row justify-center gap-10")}>
            <Image src="/schema.jpg" alt="schema" width={510} height={100} />
            <div>
              <p>스키마 형성</p>
              <p>
                더 이상 문과라고 과학을 공부하지 않아도 되고, 이과라고 사회를
                공부하지 않아도 되는 시대가 아닙니다. 시대가 요구하는 인재는
                ‘인문학적 소양을 갖춘 공학도’, ‘코딩을 제대로 다룰 수 있는
                인문학 전공자’입니다. 하늘 국어영재교육원은 학생들이 수능 지문을
                통해 인문학, 철학, 논리학, 사회학, 법학, 경제학, 자연 과학,
                공학, 미학까지 전 영역의 ‘스키마’(배경지식)를 쌓을 수 있도록
                교육합니다.
              </p>
            </div>
          </div>
          <div className={cn("flex flex-row justify-center gap-10")}>
            <Image src="/schema.jpg" alt="schema" width={510} height={100} />
            <div>
              <p>스키마 형성</p>
              <p>
                더 이상 문과라고 과학을 공부하지 않아도 되고, 이과라고 사회를
                공부하지 않아도 되는 시대가 아닙니다. 시대가 요구하는 인재는
                ‘인문학적 소양을 갖춘 공학도’, ‘코딩을 제대로 다룰 수 있는
                인문학 전공자’입니다. 하늘 국어영재교육원은 학생들이 수능 지문을
                통해 인문학, 철학, 논리학, 사회학, 법학, 경제학, 자연 과학,
                공학, 미학까지 전 영역의 ‘스키마’(배경지식)를 쌓을 수 있도록
                교육합니다.
              </p>
            </div>
          </div>
          <div className={cn("flex flex-row justify-center gap-10")}>
            <Image src="/schema.jpg" alt="schema" width={510} height={100} />
            <div>
              <p>스키마 형성</p>
              <p>
                더 이상 문과라고 과학을 공부하지 않아도 되고, 이과라고 사회를
                공부하지 않아도 되는 시대가 아닙니다. 시대가 요구하는 인재는
                ‘인문학적 소양을 갖춘 공학도’, ‘코딩을 제대로 다룰 수 있는
                인문학 전공자’입니다. 하늘 국어영재교육원은 학생들이 수능 지문을
                통해 인문학, 철학, 논리학, 사회학, 법학, 경제학, 자연 과학,
                공학, 미학까지 전 영역의 ‘스키마’(배경지식)를 쌓을 수 있도록
                교육합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 학습목표 */}
      <section>
        <Badge
          className={cn(
            "py-2 px-10 text-white text-lg font-medium rounded-full shadow-lg bg-[#2A338E]"
          )}
        >
          학습목표
        </Badge>
      </section>
    </div>
  );
}
