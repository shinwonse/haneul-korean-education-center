import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Admission() {
  return (
    <div className={cn('flex flex-col items-center max-w-4xl mx-auto p-6')}>
      {/* 테스트 예약, 입학 테스트 진행, 반 편성 */}
      <div>
        <Badge
          className={cn(
            'font-gmarket-medium text-white rounded-full shadow-lg bg-[#2A338E]',
            'py-2 px-4 sm:px-6 md:px-8 lg:px-10',
            'text-sm sm:text-base md:text-lg',
          )}
        >
          입학 안내
        </Badge>
      </div>

      {/* 입학 프로세스 섹션 */}
      <div
        className={cn(
          'flex flex-col items-start w-full max-w-4xl mt-16 gap-12',
        )}
      >
        {/* 테스트 예약 */}
        <div className={cn('flex gap-6 md:gap-8 w-full')}>
          <div
            className={cn(
              'w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0',
            )}
          >
            <Image src="/net.png" alt="전화" width={64} height={64} />
          </div>
          <div className={cn('flex flex-col gap-3 md:gap-5 flex-1')}>
            <Badge
              className={cn(
                'rounded-full shadow-lg bg-[#2A338E] self-start',
                'py-1 px-3 md:px-4 text-white font-medium',
                'text-sm md:text-lg min-w-[120px] md:min-w-[160px] text-center',
              )}
            >
              <span className="text-sm md:text-xl font-semibold">
                테스트 예약
              </span>
            </Badge>
            <div className={cn('text-gray-700 space-y-1')}>
              <div className={cn('text-base md:text-lg')}>
                - 대상 학년 : 중1 ~ 중3
              </div>
              <div className={cn('text-base md:text-lg')}>
                - 신청 방법 : 네이버 플레이스 예약 (공식 홈페이지, 공식
                인스타그램 참고)
              </div>
            </div>
          </div>
        </div>

        {/* 입학 테스트 진행 */}
        <div className={cn('flex gap-6 md:gap-8 w-full')}>
          <div
            className={cn(
              'w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0',
            )}
          >
            <Image src="/test.png" alt="테스트" width={58} height={58} />
          </div>
          <div className={cn('flex flex-col gap-3 md:gap-5 flex-1')}>
            <Badge
              className={cn(
                'rounded-full shadow-lg bg-[#2A338E] self-start',
                'py-1 px-3 md:px-4 text-white font-medium',
                'text-sm md:text-lg min-w-[120px] md:min-w-[200px] text-center',
              )}
            >
              <span className="text-sm md:text-xl font-semibold">
                입학 테스트 진행
              </span>
            </Badge>
            <div className={cn('text-gray-700 space-y-1')}>
              <div className={cn('text-base md:text-lg')}>
                - 30문항 60분 진행
              </div>
              <div className={cn('text-base md:text-lg')}>
                - 테스트 후 1~2일 뒤 상세 성적표 기반 상담 진행
              </div>
            </div>
          </div>
        </div>

        {/* 반 편성 */}
        <div className={cn('flex gap-6 md:gap-8 w-full')}>
          <div
            className={cn(
              'w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0',
            )}
          >
            <Image src="/people.png" alt="사람들" width={64} height={64} />
          </div>
          <div className={cn('flex flex-col gap-3 md:gap-5 flex-1')}>
            <Badge
              className={cn(
                'rounded-full shadow-lg bg-[#2A338E] self-start',
                'py-1 px-3 md:px-4 text-white font-medium',
                'text-sm md:text-lg min-w-[120px] md:min-w-[140px] text-center',
              )}
            >
              <span className="text-sm md:text-xl font-semibold">반 편성</span>
            </Badge>
            <div className={cn('text-gray-700 space-y-1')}>
              <div className={cn('text-base md:text-lg')}>
                - 프리미엄반 : 입학 테스트 결과 상위 3% (태도 점수 반영)
              </div>
              <div className={cn('text-base md:text-lg')}>
                - 정규반 : 상담 진행 후 개별 안내
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 수업 */}
      <div className={cn('flex flex-col items-start w-full max-w-4xl mt-16')}>
        <div className={cn('flex items-center gap-4 mb-8')}>
          <div className={cn('w-3 h-8 bg-[#2A338E]')}></div>
          <h2 className={cn('text-2xl font-gmarket-bold text-[#2A338E]')}>
            수업
          </h2>
        </div>

        {/* 수업 표 */}
        <div className={cn('w-full')}>
          <table className={cn('w-full')}>
            <thead>
              <tr className={cn('bg-[#E7F3FF]')}>
                <th
                  className={cn(
                    'p-4 text-center font-bold text-[#2A338E] whitespace-nowrap',
                  )}
                  colSpan={2}
                >
                  구분
                </th>
                <th
                  className={cn(
                    'p-4 text-center font-bold text-[#2A338E] whitespace-nowrap',
                  )}
                >
                  시간
                </th>
                <th className={cn('p-4 text-center font-bold text-[#2A338E]')}>
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
  {/* 1교시 - 비문학 */}
  <tr>
    <td
      className={cn(
        'p-4 text-center font-semibold border-r bg-white border-b border-gray-300 align-middle whitespace-nowrap',
      )}
    >
      1교시
    </td>
    <td
      className={cn(
        'p-4 text-center border-r bg-white border-b border-gray-300 whitespace-nowrap',
      )}
    >
      비문학
    </td>
    <td
      className={cn(
        'p-4 text-center border-r bg-white border-b border-gray-300 whitespace-nowrap',
      )}
    >
      60분
    </td>
    <td
      className={cn(
        'p-4 text-center bg-white border-b border-gray-300',
      )}
    >
      교육과정평가원 출제 수능, 모의고사 지문을 함께 분석하고 논리적 글쓰기 진행
    </td>
  </tr>

  {/* 2교시 */}
  <tr>
    <td
      className={cn(
        'p-4 text-center font-semibold border-r bg-white border-b border-gray-300 whitespace-nowrap',
      )}
    >
      2교시
    </td>
    <td
      className={cn(
        'p-4 text-center border-r bg-white border-b border-gray-300 whitespace-nowrap',
      )}
    >
      문학
    </td>
    <td
      className={cn(
        'p-4 text-center border-r bg-white border-b border-gray-300 whitespace-nowrap',
      )}
    >
      60분
    </td>
    <td
      className={cn(
        'p-4 text-center bg-white border-b border-gray-300',
      )}
    >
      문학 개념어를 이해하고 2022 개정 교육과정 필수 문학 작품을 함께 분석하며 자기 표현적 글쓰기 진행
    </td>
  </tr>

  {/* 3교시 */}
  <tr>
    <td
      className={cn(
        'p-4 text-center font-semibold border-r border-gray-300 bg-white whitespace-nowrap',
      )}
    >
      3교시
    </td>
    <td
      className={cn(
        'p-4 text-center border-r border-gray-300 bg-white whitespace-nowrap',
      )}
    >
      수행 독서
    </td>
    <td
      className={cn(
        'p-4 text-center border-r border-gray-300 bg-white whitespace-nowrap',
      )}
    >
      60분
    </td>
    <td className={cn('p-4 text-center bg-white')}>
      최상위권 대학 선정 도서를 기반으로 독서 토론 및 비평문 작성
    </td>
  </tr>
</tbody>
          </table>
        </div>
      </div>

      {/* 개별 맞춤형 관리 */}
      <div className={cn('flex flex-col items-start w-full max-w-4xl mt-16')}>
        <div className={cn('flex items-center gap-4 mb-8')}>
          <div className={cn('w-3 h-8 bg-[#2A338E]')}></div>
          <h2 className={cn('text-2xl font-gmarket-bold text-[#2A338E]')}>
            개별 맞춤형 관리
          </h2>
        </div>

        <div className={cn('flex flex-col gap-4 w-full')}>
          {/* 항목 1 */}
          <div className={cn('flex items-center gap-6 bg-[#E7F3FF] p-6')}>
            <div
              className={cn('text-6xl font-bold text-[#2A338E] min-w-[80px]')}
            >
              1
            </div>
            <div className={cn('text-lg text-gray-800 leading-relaxed')}>
              <div>매주 세 편의 글 작성,</div>
              <div>한 달 기준 총 12편의 글을 포트폴리오로 개별 제작</div>
            </div>
          </div>

          {/* 항목 2 */}
          <div className={cn('flex items-center gap-6 bg-white p-6')}>
            <div
              className={cn('text-6xl font-bold text-[#2A338E] min-w-[80px]')}
            >
              2
            </div>
            <div className={cn('text-lg text-gray-800 leading-relaxed')}>
              <div>4주차 정기고사 결과를 기반으로</div>
              <div>취약점, 강점 분석 후 학습 상담 진행</div>
            </div>
          </div>

          {/* 항목 3 */}
          <div className={cn('flex items-center gap-6 bg-[#E7F3FF] p-6')}>
            <div
              className={cn('text-6xl font-bold text-[#2A338E] min-w-[80px]')}
            >
              3
            </div>
            <div className={cn('text-lg text-gray-800 leading-relaxed')}>
              테스트 결과가 미흡할 경우 담임 강사의 자체 클리닉 진행
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
