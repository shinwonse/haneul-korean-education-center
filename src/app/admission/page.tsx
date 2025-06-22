import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Admission() {
  return (
    <div className={cn("flex flex-col items-center")}>
      {/* 테스트 예약, 입학 테스트 진행, 반 편성 */}
      <div>
        <Badge
          className={cn(
            "rounded-full shadow-lg bg-[#2A338E]",
            "py-3 px-8 text-white text-lg font-medium"
          )}
        >
          입학 안내
        </Badge>
      </div>

      {/* 수업 */}
      <div className="flex gap-4 mt-16">
        <div className="w-2 h-12 bg-[#2A338E]"></div>
        <h2 className="text-2xl font-bold text-[#2A338E]">수업</h2>
      </div>

      {/* 개별 맞춤형 관리 */}
      <div className="flex flex-col items-center w-full max-w-4xl mt-16">
        <div className="flex gap-4 mb-8">
          <div className="w-2 h-12 bg-[#2A338E]"></div>
          <h2 className="text-2xl font-bold text-[#2A338E]">
            개별 맞춤형 관리
          </h2>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {/* 항목 1 */}
          <div className="flex items-center gap-6 bg-[#E7F3FF] p-6">
            <div className="text-6xl font-bold text-[#2A338E] min-w-[80px]">
              1
            </div>
            <div className="text-lg text-gray-800 leading-relaxed">
              <div>매주 세 편의 글 작성,</div>
              <div>한 달 기준 총 12편의 글을 포트폴리오로 개별 제작</div>
            </div>
          </div>

          {/* 항목 2 */}
          <div className="flex items-center gap-6 bg-white p-6">
            <div className="text-6xl font-bold text-[#2A338E] min-w-[80px]">
              2
            </div>
            <div className="text-lg text-gray-800 leading-relaxed">
              <div>매주 복습 테스트 결과, 4주차 정기고사 결과를 기반으로</div>
              <div>취약점, 강점 분석 후 학습 상담 진행</div>
            </div>
          </div>

          {/* 항목 3 */}
          <div className="flex items-center gap-6 bg-[#E7F3FF] p-6">
            <div className="text-6xl font-bold text-[#2A338E] min-w-[80px]">
              3
            </div>
            <div className="text-lg text-gray-800 leading-relaxed">
              테스트 결과가 미흡할 경우 담임 강사의 자세 클리닉 진행
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
