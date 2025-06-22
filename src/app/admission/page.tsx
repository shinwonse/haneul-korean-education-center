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
      <div className="flex flex-col items-start w-full max-w-4xl mt-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-2 h-12 bg-[#2A338E]"></div>
          <h2 className="text-2xl font-bold text-[#2A338E]">수업</h2>
        </div>

        {/* 수업 표 */}
        <div className="w-full">
          {/* 헤더 */}
          <div className="grid grid-cols-4 bg-[#E7F3FF]">
            <div className="p-4 text-center font-bold text-[#2A338E] col-span-2">
              구분
            </div>
            <div className="p-4 text-center font-bold text-[#2A338E]">시간</div>
            <div className="p-4 text-center font-bold text-[#2A338E]">내용</div>
          </div>

          {/* 1교시 전체 - 테이블 구조 */}
          <div className="border-b border-gray-300">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300"></td>
                  <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300">
                    복습 테스트
                  </td>
                  <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300">
                    10분
                  </td>
                  <td className="p-4 text-center bg-white border-b border-gray-300">
                    지난 주차 배운 내용 확인
                  </td>
                </tr>
                <tr>
                  <td
                    rowSpan={2}
                    className="p-4 text-center font-semibold border-r border-gray-300 bg-white border-b border-gray-300 align-middle"
                  >
                    1교시
                  </td>
                  <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300">
                    비문학
                  </td>
                  <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300">
                    50분
                  </td>
                  <td className="p-4 text-center bg-white border-b border-gray-300">
                    교육과정평가원 출제 수능, 모의고사 지문을 함께 분석하고
                    논리적 글쓰기 진행
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-center border-r border-gray-300 bg-white">
                    개별 피드백
                  </td>
                  <td className="p-4 text-center border-r border-gray-300 bg-white">
                    10분
                  </td>
                  <td className="p-4 text-center bg-white">
                    학생 질문 답변 및 개별 취약점 보완
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 2교시 */}
          <div className="border-b border-gray-300">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="p-4 text-center font-semibold border-r border-gray-300 bg-white">
                    2교시
                  </td>
                  <td className="p-4 text-center border-r border-gray-300 bg-white">
                    문학
                  </td>
                  <td className="p-4 text-center border-r border-gray-300 bg-white">
                    50분
                  </td>
                  <td className="p-4 text-center bg-white">
                    문학 개념어를 이해하고 2022 개정 교육과정 필수 문학 작품을
                    함께 분석하고 자기 표현적 글쓰기 진행
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3교시 */}
          <div>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="p-4 text-center font-semibold border-r border-gray-300 bg-white">
                    3교시
                  </td>
                  <td className="p-4 text-center border-r border-gray-300 bg-white">
                    수행 독서
                  </td>
                  <td className="p-4 text-center border-r border-gray-300 bg-white">
                    10분
                  </td>
                  <td className="p-4 text-center bg-white">
                    최상위권 대학 선정 도서를 기반으로 독서 토론 및 비평문 작성
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 개별 맞춤형 관리 */}
      <div className="flex flex-col items-start w-full max-w-4xl mt-16">
        <div className="flex items-center gap-4 mb-8">
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
