import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Admission() {
  return (
    <div className={cn("flex flex-col items-center max-w-4xl mx-auto p-6")}>
      {/* 테스트 예약, 입학 테스트 진행, 반 편성 */}
      <div>
        <Badge
          className={cn(
            "font-gmarket-medium text-white rounded-full shadow-lg bg-[#2A338E]",
            "py-2 px-4 sm:px-6 md:px-8 lg:px-10",
            "text-sm sm:text-base md:text-lg",
            "mb-4 sm:mb-8 md:mb-10 lg:mb-12"
          )}
        >
          입학 안내
        </Badge>
      </div>

      {/* 입학 프로세스 섹션 */}
      <div className="flex flex-col items-start w-full max-w-4xl mt-16 gap-12">
        {/* 테스트 예약 */}
        <div className="flex gap-8">
          <div className="w-20 h-20 flex items-center justify-center">
            <Image src="/phone.png" alt="전화" width={64} height={64} />
          </div>
          <div className="flex flex-col gap-5">
            <Badge
              className={cn(
                "rounded-full shadow-lg bg-[#2A338E]",
                "py-1 px-4 text-white text-lg font-medium"
              )}
            >
              <span className="text-xl font-semibold">테스트 예약</span>
            </Badge>
            <div className="text-gray-700">
              <div className="text-lg">- 대상 학년 : 중1 ~ 중3</div>
              <div className="text-lg">- 신청 방법 : 네이버 플레이스 예약 (공식 홈페이지, 공식 인스타그램 참고)</div>
            </div>
          </div>
        </div>

        {/* 입학 테스트 진행 */}
        <div className="flex gap-8">
          <div className="w-20 h-20 flex items-center justify-center">
            <Image src="/test.png" alt="테스트" width={64} height={64} />
          </div>
          <div className="flex flex-col gap-5">
            <Badge
              className={cn(
                "rounded-full shadow-lg bg-[#2A338E]",
                "py-1 px-4 text-white text-lg font-medium"
              )}
            >
              <span className="text-xl font-semibold">입학 테스트 진행</span>
            </Badge>
            <div className="text-gray-700">
              <div className="text-lg">- 30문항 60분 진행</div>
              <div className="text-lg">
                - 테스트 후 1~2일 뒤 상세 성적표 기반 상담 진행
              </div>
            </div>
          </div>
        </div>

        {/* 반 편성 */}
        <div className="flex gap-8">
          <div className="w-20 h-20 flex items-center justify-center">
            <Image src="/people.png" alt="사람들" width={64} height={64} />
          </div>
          <div className="flex flex-col gap-5">
            <Badge
              className={cn(
                "rounded-full shadow-lg bg-[#2A338E]",
                "py-1 px-4 text-white text-lg font-medium"
              )}
            >
              <span className="text-xl font-semibold">반 편성</span>
            </Badge>
            <div className="text-gray-700">
              <div className="text-lg">
               -  프리미엄반 : 입학 테스트 결과 상위 3% (테도 접수 반영)
              </div>
              <div className="text-lg">- 정규반 : 상담 진행 후 개별 안내</div>
            </div>
          </div>
        </div>
      </div>

      {/* 수업 */}
      <div className="flex flex-col items-start w-full max-w-4xl mt-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-2 h-12 bg-[#2A338E]"></div>
          <h2 className="text-2xl font-bold text-[#2A338E]">수업</h2>
        </div>

        {/* 수업 표 */}
        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr className="bg-[#E7F3FF]">
                <th
                  className="p-4 text-center font-bold text-[#2A338E] whitespace-nowrap"
                  colSpan={2}
                >
                  구분
                </th>
                <th className="p-4 text-center font-bold text-[#2A338E] whitespace-nowrap">
                  시간
                </th>
                <th className="p-4 text-center font-bold text-[#2A338E]">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 복습 테스트 */}
              <tr>
                <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300 whitespace-nowrap"></td>
                <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300 whitespace-nowrap">
                  복습 테스트
                </td>
                <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300 whitespace-nowrap">
                  10분
                </td>
                <td className="p-4 text-center bg-white border-b border-gray-300">
                  지난 주차 배운 내용 확인
                </td>
              </tr>
              {/* 1교시 - 비문학 */}
              <tr>
                <td
                  rowSpan={2}
                  className="p-4 text-center font-semibold border-r border-gray-300 bg-white border-b border-gray-300 align-middle whitespace-nowrap"
                >
                  1교시
                </td>
                <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300 whitespace-nowrap">
                  비문학
                </td>
                <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300 whitespace-nowrap">
                  50분
                </td>
                <td className="p-4 text-center bg-white border-b border-gray-300">
                  교육과정평가원 출제 수능, 모의고사 지문을 함께 분석하고 논리적
                  글쓰기 진행
                </td>
              </tr>
              {/* 1교시 - 개별 피드백 */}
              <tr>
                <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300 whitespace-nowrap">
                  개별 피드백
                </td>
                <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300 whitespace-nowrap">
                  10분
                </td>
                <td className="p-4 text-center bg-white border-b border-gray-300">
                  학생 질문 답변 및 개별 취약점 보완
                </td>
              </tr>
              {/* 2교시 */}
              <tr>
                <td className="p-4 text-center font-semibold border-r border-gray-300 bg-white border-b border-gray-300 whitespace-nowrap">
                  2교시
                </td>
                <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300 whitespace-nowrap">
                  문학
                </td>
                <td className="p-4 text-center border-r border-gray-300 bg-white border-b border-gray-300 whitespace-nowrap">
                  50분
                </td>
                <td className="p-4 text-center bg-white border-b border-gray-300">
                  문학 개념어를 이해하고 2022 개정 교육과정 필수 문학 작품을
                  함께 분석하고 자기 표현적 글쓰기 진행
                </td>
              </tr>
              {/* 3교시 */}
              <tr>
                <td className="p-4 text-center font-semibold border-r border-gray-300 bg-white whitespace-nowrap">
                  3교시
                </td>
                <td className="p-4 text-center border-r border-gray-300 bg-white whitespace-nowrap">
                  수행 독서
                </td>
                <td className="p-4 text-center border-r border-gray-300 bg-white whitespace-nowrap">
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
