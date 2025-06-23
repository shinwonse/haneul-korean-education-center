import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CurriculumItem {
  month: string;
  content: string;
}

const curriculumData: CurriculumItem[] = [
  {
    month: "1월",
    content: "인문학, 철학 / 현대시 읽기 / 사설 테마 : 정치",
  },
  {
    month: "2월",
    content: "지구과학 / 현대시와 수필 읽기 / 사설 테마 : 우주, 항공",
  },
  {
    month: "3월",
    content: "경제학 / 현대소설 읽기 / 사설 테마 : 경제",
  },
  {
    month: "4월",
    content: "1학기 중간고사 내신 기간",
  },
  {
    month: "5월",
    content: "생명과학 / 현대소설과 극 읽기 / 사설 테마 : 의료",
  },
  {
    month: "6월",
    content: "1학기 기말고사 내신 기간",
  },
  {
    month: "7월",
    content: "논리학 / 고전시가 읽기 / 사설 테마 : 문화",
  },
  {
    month: "8월",
    content: "공학 / 고전시가 읽기 / 사설 테마 : 인공 지능",
  },
  {
    month: "9월",
    content: "2학기 중간고사 내신 기간",
  },
  {
    month: "10월",
    content: "법학 / 고전산문 읽기 / 사설 테마 : 윤리, 법",
  },
  {
    month: "11월",
    content: "2학기 기말고사 내신 기간",
  },
  {
    month: "12월",
    content: "역사학 / 고전산문 읽기 / 사설 테마 : 역사",
  },
];

export default function Curriculum() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Monthly Schedule Section */}
      <section id="schedule">
        {/* Title Badge */}
        <div className="flex justify-center mb-8">
          <Badge
            className={cn(
              "py-3 px-8 text-white text-lg font-medium",
              "rounded-full shadow-lg"
            )}
            style={{ backgroundColor: "#2A338E" }}
          >
            월별 스케줄
          </Badge>
        </div>

        {/* Timeline Container */}
        <Card className="p-8 bg-white shadow-lg border border-gray-100">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: "#E7F3FF" }}
            ></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {curriculumData.map((item) => (
                <div key={item.month} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div
                    className={cn(
                      "relative z-10 flex items-center justify-center",
                      "w-12 h-12 rounded-full border-4 border-white shadow-md",
                      "flex-shrink-0"
                    )}
                    style={{ backgroundColor: "#2A338E" }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <Badge
                        variant="outline"
                        className={cn("font-semibold px-3 py-1")}
                        style={{
                          color: "#2A338E",
                          borderColor: "#E7F3FF",
                          backgroundColor: "#E7F3FF",
                        }}
                      >
                        {item.month}
                      </Badge>
                    </div>

                    <div
                      className={cn(
                        "bg-gray-50 rounded-lg p-4",
                        "border border-gray-100",
                        "text-gray-700 leading-relaxed",
                        "hover:bg-gray-100 transition-colors duration-200"
                      )}
                    >
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* Class Structure Section */}
      <section id="structure" className="mt-12">
        <div className="flex justify-center mb-8">
          <Badge
            className={cn(
              "py-3 px-8 text-white text-lg font-medium",
              "rounded-full shadow-lg"
            )}
            style={{ backgroundColor: "#2A338E" }}
          >
            수업 구성
          </Badge>
        </div>

        <div className="space-y-6">
          {/* 1교시 */}
          <Card
            className="p-6 bg-white shadow-lg border border-gray-100"
            id="period1"
          >
            <div
              className="p-4 rounded-lg mb-4 flex justify-between items-center"
              style={{ backgroundColor: "#E7F3FF" }}
            >
              <h3 className="text-lg font-semibold text-gray-800">1교시</h3>
              <span className="font-medium" style={{ color: "#2A338E" }}>
                비문학 세부 구성
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-48 font-medium text-gray-700">
                  STEP1 ~ STEP3 :
                </div>
                <div className="text-gray-600">지문 읽기 훈련</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-48 font-medium text-gray-700">STEP4 :</div>
                <div className="text-gray-600">생각의 확장 (논리적 글쓰기)</div>
              </div>
              <div className="flex">
                <div className="w-48 font-medium text-gray-700">스키마 :</div>
                <div className="text-gray-600">지문 관련 심화 배경지식</div>
              </div>
            </div>
          </Card>

          {/* 2교시 */}
          <Card
            className="p-6 bg-white shadow-lg border border-gray-100"
            id="period2"
          >
            <div
              className="p-4 rounded-lg mb-4 flex justify-between items-center"
              style={{ backgroundColor: "#E7F3FF" }}
            >
              <h3 className="text-lg font-semibold text-gray-800">2교시</h3>
              <span className="font-medium" style={{ color: "#2A338E" }}>
                문학 세부 구성
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-48 font-medium text-gray-700">
                  STEP1 ~ STEP3 :
                </div>
                <div className="text-gray-600">
                  작품 감상 훈련 + 문학 개념어 적용
                </div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-48 font-medium text-gray-700">STEP4 :</div>
                <div className="text-gray-600">
                  생각의 확장 (자기 표현적 글쓰기)
                </div>
              </div>
              <div className="flex">
                <div className="w-48 font-medium text-gray-700">스키마 :</div>
                <div className="text-gray-600">
                  문학사적 지식, 작가의 작품 세계 탐구
                </div>
              </div>
            </div>
          </Card>

          {/* 3교시 */}
          <Card
            className="p-6 bg-white shadow-lg border border-gray-100"
            id="period3"
          >
            <div
              className="p-4 rounded-lg mb-4 flex justify-between items-center"
              style={{ backgroundColor: "#E7F3FF" }}
            >
              <h3 className="text-lg font-semibold text-gray-800">3교시</h3>
              <span className="font-medium" style={{ color: "#2A338E" }}>
                주차별 구성
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-24 font-medium text-gray-700">1주차</div>
                <div className="text-gray-600">NIE 시사 탐구 논술</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-24 font-medium text-gray-700">2주차</div>
                <div className="text-gray-600">
                  주제별 독서 토론 (수행 독서)
                </div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-24 font-medium text-gray-700">3주차</div>
                <div className="text-gray-600">주제별 독서 비평문 작성</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-24 font-medium text-gray-700">4주차</div>
                <div className="text-gray-600">정기고사 / 다음 선정 도서 안내</div>
              </div>
              <div className="flex">
                <div className="w-24 font-medium text-gray-700">5주차</div>
                <div className="text-gray-600">
                  국어 영재 프로그램
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
