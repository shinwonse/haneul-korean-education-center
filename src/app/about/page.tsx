import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function About() {
  return (
    <div className={cn("flex flex-col items-center")}>
      {/* 타이틀 */}
      <section></section>

      {/* 가치와 비전 */}
      <section className={cn("flex flex-col items-center py-16 px-8")}>
        <Badge
          className={cn(
            "py-2 px-10 text-white text-lg font-medium rounded-full shadow-lg bg-[#2A338E] mb-12"
          )}
        >
          가치와 비전
        </Badge>
        <div className={cn("flex flex-col gap-16 max-w-6xl")}>
          {/* 스키마 형성 */}
          <div className={cn("flex flex-row items-center gap-12")}>
            <Image
              src="/schema.jpg"
              alt="스키마 형성"
              width={400}
              height={300}
              className={cn("rounded-lg object-cover")}
            />
            <div className={cn("flex-1")}>
              <h3 className={cn("text-2xl font-bold mb-4 text-gray-800")}>
                스키마 형성
              </h3>
              <p className={cn("text-gray-600 leading-relaxed text-base")}>
                더 이상 문과라고 과학을 공부하지 않아도 되고, 이과라고 사회를
                공부하지 않아도 되는 시대가 아닙니다. 시대가 요구하는 인재는
                &lsquo;인문학적 소양을 갖춘 공학도&rsquo;, &lsquo;코딩을 제대로
                다룰 수 있는 인문학 전공자&rsquo;입니다. 하늘 국어영재교육원은
                학생들이 수능 지문을 통해 인문학, 철학, 논리학, 사회학, 법학,
                경제학, 자연 과학, 공학, 미학까지 전 영역의
                &lsquo;스키마&rsquo;(배경지식)를 쌓을 수 있도록 교육합니다.
              </p>
            </div>
          </div>

          {/* 수행 독서 */}
          <div className={cn("flex flex-row items-center gap-12")}>
            <Image
              src="/reading.jpg"
              alt="수행 독서"
              width={400}
              height={300}
              className={cn("rounded-lg object-cover")}
            />
            <div className={cn("flex-1")}>
              <h3 className={cn("text-2xl font-bold mb-4 text-gray-800")}>
                수행 독서
              </h3>
              <p className={cn("text-gray-600 leading-relaxed text-base")}>
                학생부가 축소되고 있는 현재 가장 중요한 평가 교과별 세부능력
                특기사항(세특)입니다. 그리고 세특에서 가장 중요한 것이
                &lsquo;수행 독서&rsquo;입니다. 단순히 책을 읽기만 하는 것이
                아니라, 책의 내용과 &lsquo;선교(전공)&rsquo;를 연결하는 것이
                중요한데, 하늘 국어영재교육원에서 시중에 메디컬 대학의 관찰
                도서를 중심으로 읽고 소고 발품 수행 독서 수업이 이루어집니다.
              </p>
            </div>
          </div>

          {/* 국어 영재 양성 */}
          <div className={cn("flex flex-row items-center gap-12")}>
            <Image
              src="/education.jpg"
              alt="국어 영재 양성"
              width={400}
              height={300}
              className={cn("rounded-lg object-cover")}
            />
            <div className={cn("flex-1")}>
              <h3 className={cn("text-2xl font-bold mb-4 text-gray-800")}>
                국어 영재 양성
              </h3>
              <p className={cn("text-gray-600 leading-relaxed text-base")}>
                서울대 국어교육 석사 이상의 연구진들로 구성된 컨
                국어영재교육원에서 제작한 &lsquo;프리미엄 교재&rsquo;와 철저하게
                준비한 수업 시스템으로 &lsquo;진짜&rsquo; 국어 영재를 키우고
                있습니다. 전교 3% 이내 극상위권 학생들을 위해서 완전 직접의
                차별화된 프리미엄 수업이 진행됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 학습목표 */}
      <section
        className={cn(
          "flex flex-col items-center py-16 px-8 bg-[#E7F3FF] w-full"
        )}
      >
        <Badge
          className={cn(
            "py-2 px-10 text-white text-lg font-medium rounded-full shadow-lg bg-[#2A338E] mb-12"
          )}
        >
          학습목표
        </Badge>
        <div className={cn("flex flex-col gap-8 max-w-4xl w-full")}>
          {/* 목표 1 */}
          <div className={cn("relative bg-white rounded-lg p-8 shadow-sm")}>
            <div
              className={cn(
                "absolute top-4 left-4 text-8xl font-bold text-gray-200 select-none"
              )}
            >
              01
            </div>
            <div className={cn("relative z-10 pl-24")}>
              <p className={cn("text-gray-800 leading-relaxed text-base")}>
                비문학 지문을 문장 단위로 읽으며 도출할 수 있는 정보를 생각하고
                자료를 활용하여 질문에 맞게 논리적인 글쓰기를 할 수 있다.
              </p>
            </div>
          </div>

          {/* 목표 2 */}
          <div className={cn("relative bg-white rounded-lg p-8 shadow-sm")}>
            <div
              className={cn(
                "absolute top-4 left-4 text-8xl font-bold text-gray-200 select-none"
              )}
            >
              02
            </div>
            <div className={cn("relative z-10 pl-24")}>
              <p className={cn("text-gray-800 leading-relaxed text-base")}>
                교육과정 내의 모든 교과서 작품에 수록된 문학 작품을 읽어 문학이
                우리 삶과 맞닿아 있음을 이해하고, 삶에 적용해보는 자기표현적
                글쓰기를 할 수 있다.
              </p>
            </div>
          </div>

          {/* 목표 3 */}
          <div className={cn("relative bg-white rounded-lg p-8 shadow-sm")}>
            <div
              className={cn(
                "absolute top-4 left-4 text-8xl font-bold text-gray-200 select-none"
              )}
            >
              03
            </div>
            <div className={cn("relative z-10 pl-24")}>
              <p className={cn("text-gray-800 leading-relaxed text-base")}>
                우리 삶에서 실제로 일어나는 시사 문제에 대해 생각해보는
                사회참여적 글쓰기와 수행 독서를 통해 개념은 지식과 진로를
                연관지어 보는 진로 연계글쓰기를 할 수 있다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
