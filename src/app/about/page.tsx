import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      {/* 타이틀 */}
      <section
        id="intro"
        className={cn(
          'flex flex-col w-full relative overflow-hidden',
          'px-4 sm:px-6 md:px-8',
          'h-[calc(100dvh-70px)] md:h-[calc(100vh-70px)]',
        )}
        style={{
          background: 'linear-gradient(180deg, #E6F2FF 0%, #FFFFFF 100%)',
        }}
      >
        <Image
          src="/logo_white.svg"
          alt="하늘 국어 로고"
          width={600}
          height={300}
          className={cn(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0',
            'w-[280px] sm:w-[320px] md:w-full max-w-lg lg:max-w-2xl',
          )}
        />
        <div
          className={cn(
            'flex flex-col items-center relative z-10 text-center my-auto',
          )}
        >
          <p
            className={cn(
              'text-base sm:text-lg md:text-2xl font-gmarket-medium',
            )}
          >
            하늘 국어영재원
          </p>
          <p
            className={cn(
              'font-gmarket-medium text-[#2A338E] mt-2',
              'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl',
            )}
          >
            상위 1%의 길을 열다
          </p>
        </div>
      </section>

      {/* 가치와 비전 */}
      <section
        id="value"
        className={cn(
          'flex flex-col items-center justify-center',
          'min-h-[100dvh] md:min-h-screen',
          'py-12 sm:py-16 md:py-20 lg:py-24',
          'px-4 sm:px-6 md:px-8 lg:px-12',
        )}
      >
        <Badge
          className={cn(
            'text-white font-medium rounded-full shadow-lg bg-[#2A338E]',
            'py-2 px-4 sm:px-6 md:px-8 lg:px-10',
            'text-sm sm:text-base md:text-lg',
            'mb-6 sm:mb-8 md:mb-10 lg:mb-12',
          )}
        >
          가치와 비전
        </Badge>
        <div
          className={cn(
            'flex flex-col max-w-6xl w-full',
            'gap-8 sm:gap-10 md:gap-12',
          )}
        >
          {/* 스키마 형성 */}
          <div
            className={cn(
              'flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center',
              'md:flex-row',
            )}
          >
            <div className={cn('w-full flex-shrink-0', 'md:w-80 lg:w-96')}>
              <Image
                src="/schema.jpg"
                alt="스키마 형성"
                width={400}
                height={300}
                className={cn(
                  'object-cover w-full rounded-lg',
                  'h-40 sm:h-48 md:h-56 lg:h-60',
                )}
              />
            </div>
            <div className={cn('flex-1')}>
              <h3
                className={cn(
                  'font-gmarket-medium text-gray-800',
                  'text-lg sm:text-xl md:text-2xl',
                  'mb-2 sm:mb-3 md:mb-4',
                )}
              >
                스키마 형성
              </h3>
              <p
                className={cn(
                  'text-gray-600 leading-relaxed',
                  'text-sm sm:text-base md:text-base',
                )}
              >
                더 이상 문과라고 과학을 공부하지 않아도 되고, 이과라고 사회를
                공부하지 않아도 되는 시대가 아닙니다. 시대가 요구하는 인재는
                &lsquo;인문학적 소양을 갖춘 공학도&rsquo;, &lsquo;코딩을 제대로
                다룰 수 있는 인문학 전공자&rsquo;입니다. 하늘 국어영재원은
                학생들이 수능 지문을 통해 인문학, 철학, 논리학, 사회학, 법학,
                경제학, 자연 과학, 공학, 미학까지 전 영역의
                &lsquo;스키마&rsquo;(배경지식)를 쌓을 수 있도록 교육합니다.
              </p>
            </div>
          </div>

          {/* 수행 독서 */}
          <div
            className={cn(
              'flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center',
              'md:flex-row',
            )}
          >
            <div className={cn('w-full flex-shrink-0', 'md:w-80 lg:w-96')}>
              <Image
                src="/reading.jpg"
                alt="수행 독서"
                width={400}
                height={300}
                className={cn(
                  'object-cover w-full rounded-lg',
                  'h-40 sm:h-48 md:h-56 lg:h-60',
                )}
              />
            </div>
            <div className={cn('flex-1')}>
              <h3
                className={cn(
                  'font-gmarket-medium text-gray-800',
                  'text-lg sm:text-xl md:text-2xl',
                  'mb-2 sm:mb-3 md:mb-4',
                )}
              >
                수행 독서
              </h3>
              <p
                className={cn(
                  'text-gray-600 leading-relaxed',
                  'text-sm sm:text-base md:text-base',
                )}
              >
                학생부 종합 전형에서 현재 가장 중요한 평가 항목은 교과별
                세부능력 특기사항(세특)입니다. 그리고 세특에서 가장 중요한 것이
                &lsquo;수행 독서&rsquo;입니다. 단순히 책을 읽기만 하는 것이
                아니라, 책의 내용과 &lsquo;진로(전공)&rsquo;를 연결하는 것이
                중요한데, 하늘 국어영재원에선 서울대, 최상위 메디컬 대학의 권장
                도서를 중심으로 읽고 쓰고 말하는 수업이 이루어집니다.
              </p>
            </div>
          </div>

          {/* 국어 영재 양성 */}
          <div
            className={cn(
              'flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center',
              'md:flex-row',
            )}
          >
            <div className={cn('w-full flex-shrink-0', 'md:w-80 lg:w-96')}>
              <Image
                src="/education.jpg"
                alt="국어 영재 양성"
                width={400}
                height={300}
                className={cn(
                  'object-cover w-full rounded-lg',
                  'h-40 sm:h-48 md:h-56 lg:h-60',
                )}
              />
            </div>
            <div className={cn('flex-1')}>
              <h3
                className={cn(
                  'font-gmarket-medium text-gray-800',
                  'text-lg sm:text-xl md:text-2xl',
                  'mb-2 sm:mb-3 md:mb-4',
                )}
              >
                국어 영재 양성
              </h3>
              <p
                className={cn(
                  'text-gray-600 leading-relaxed',
                  'text-sm sm:text-base md:text-base',
                )}
              >
                기존 국어 학원들의 암기 중심, 구조 중심 교육에서 벗어나 사고력과
                논리력을 제대로 갖춘 국어 영재를 키우는 것이 하늘 국어영재원이
                추구하는 교육 목표입니다. 서울대 국어영재교육 석사 이상의
                연구진들로 구성된 현 국어영재연구원에서 제작한 &lsquo;프리미엄
                교재&rsquo;와 철저하게 준비한 수업 시스템으로 &lsquo;진짜&rsquo;
                국어 영재를 키우고자 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 학습목표 */}
      <section
        id="goals"
        className={cn(
          'flex flex-col items-center justify-center bg-[#E7F3FF] w-full',
          'min-h-[100dvh] md:min-h-screen',
          'py-12 sm:py-16 md:py-20 lg:py-24',
          'px-4 sm:px-6 md:px-8 lg:px-12',
        )}
      >
        <Badge
          className={cn(
            'text-white font-medium rounded-full shadow-lg bg-[#2A338E]',
            'py-2 px-4 sm:px-6 md:px-8 lg:px-10',
            'text-sm sm:text-base md:text-lg',
            'mb-6 sm:mb-8 md:mb-10 lg:mb-12',
          )}
        >
          학습목표
        </Badge>
        <div
          className={cn(
            'flex flex-col max-w-4xl w-full',
            'gap-4 sm:gap-6 md:gap-8',
          )}
        >
          {/* 목표 1 */}
          <div
            className={cn(
              'flex flex-col items-center justify-center relative bg-white rounded-lg text-center overflow-hidden',
              'min-h-[180px] sm:min-h-[200px] md:min-h-[280px] lg:min-h-[346px]',
              'p-4 sm:p-6 md:p-8',
            )}
          >
            <div
              className={cn(
                'absolute font-bold text-[#E7F3FF] select-none',
                'text-[100px] sm:text-[120px] md:text-[200px] lg:text-[300px] xl:text-[400px]',
                '-bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-28 xl:-bottom-40',
                '-left-0',
              )}
            >
              1
            </div>
            <div className={cn('relative z-10')}>
              <p
                className={cn(
                  'text-gray-800 leading-relaxed font-medium',
                  'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl',
                )}
              >
                비문학 지문을 문장 단위로 읽으며 도출할 수 있는 정보를 생각하고
                <br className="hidden sm:block" />
                자료를 활용하여 질문에 맞게 논리적인 글쓰기를 할 수 있다.
              </p>
            </div>
          </div>

          {/* 목표 2 */}
          <div
            className={cn(
              'flex flex-col items-center justify-center relative bg-white rounded-lg text-center overflow-hidden',
              'min-h-[180px] sm:min-h-[200px] md:min-h-[280px] lg:min-h-[346px]',
              'p-4 sm:p-6 md:p-8',
            )}
          >
            <div
              className={cn(
                'absolute font-bold text-[#E7F3FF] select-none',
                'text-[100px] sm:text-[120px] md:text-[200px] lg:text-[300px] xl:text-[400px]',
                '-bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-28 xl:-bottom-40',
                '-right-0',
              )}
            >
              2
            </div>
            <div className={cn('relative z-10')}>
              <p
                className={cn(
                  'text-gray-800 leading-relaxed font-medium',
                  'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl',
                )}
              >
                2022 개정 교육과정 교과서에 수록된 문학 작품을 감상하여
                <br className="hidden sm:block" />
                문학이 우리 삶과 맞닿아 있음을 이해하고, 삶에 적용해보는
                <br className="hidden sm:block" />
                자기표현적 글쓰기를 할 수 있다.
              </p>
            </div>
          </div>

          {/* 목표 3 */}
          <div
            className={cn(
              'flex flex-col items-center justify-center relative bg-white rounded-lg text-center overflow-hidden',
              'min-h-[180px] sm:min-h-[200px] md:min-h-[280px] lg:min-h-[346px]',
              'p-4 sm:p-6 md:p-8',
            )}
          >
            <div
              className={cn(
                'absolute font-bold text-[#E7F3FF] select-none',
                'text-[100px] sm:text-[120px] md:text-[200px] lg:text-[300px] xl:text-[400px]',
                '-bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-28 xl:-bottom-40',
                '-left-0',
              )}
            >
              3
            </div>
            <div className={cn('relative z-10')}>
              <p
                className={cn(
                  'text-gray-800 leading-relaxed font-medium',
                  'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl',
                )}
              >
                우리 삶에서 실제로 일어나는 시사 문제에 대해 생각해보는
                <br className="hidden sm:block" />
                사회참여적 글쓰기와 수행 독서를 통해 개념은 지식과 진로를
                <br className="hidden sm:block" />
                연관지어 보는 진로 연계글쓰기를 할 수 있다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 인사말 */}
        <section
          id="greeting"
          className={cn('bg-white py-20 px-6 md:px-12')}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2A338E] mb-8">원장 인사말</h2>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed whitespace-pre-line">
              안녕하세요,
              하늘 국어영재원을 찾아주셔서 진심으로 감사드립니다.

              세상이 빠르게 변화하고 있는 지금, 교육의 방향 또한 새롭게 정의되고 있습니다. 단순한 지식 전달을 넘어, 융합적 사고력과 깊이 있는 인문학적 소양을 갖춘 인재의 필요성이 그 어느 때보다 강조되고 있습니다.

              하늘 국어영재원은 이러한 시대적 요구에 발맞추어, 극상위권 학생들을 위한 차별화된 국어 교육 시스템을 구축하였습니다.
              수능 지문을 기반으로 전 영역의 배경지식, 즉 '스키마'를 형성할 수 있도록 설계된 커리큘럼, 서울대 및 메디컬 대학 권장 도서를 활용한 수행 독서, 그리고 진로 연계 글쓰기를 통해 학생 스스로 사고하고 표현하는 힘을 길러줍니다.

              또한, 서울대 국어교육 석사 이상의 연구진들이 직접 개발한 프리미엄 교재와 수업 시스템, 그리고 원장 직강 수업을 통해 진정한 국어 영재를 길러내는 데에 집중하고 있습니다.

              하늘 국어영재원은 단순한 학원이 아닌, 학생의 진로와 삶을 설계하는 ‘교육 파트너’가 되고자 합니다.

              학생 한 명 한 명이 자신의 지성과 개성을 꽃피우고, 미래를 향해 도약할 수 있도록 늘 최선을 다하겠습니다.

              감사합니다.
            </p>
            <p className="mt-8 text-right font-semibold text-[#2A338E] text-base md:text-lg">하늘 국어영재원 원장</p>

            {/* 경력 */}
            <div className="mt-8 text-sm text-gray-600 text-left whitespace-pre-line leading-relaxed">
              <p className="font-semibold mb-2">대표 원장 : 현 원장</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>現 국어영재원 현 대표</li>
                <li>現 국어영재원 현 대표컨설턴트</li>
                <li>現 서울대, 의대 전문 입시코디</li>
                <li>前 디아 아카데미 대표 원장</li>
                <li>前 수성구 중고등학교 교사</li>
                <li>비상 교육 교과서 검토 위원</li>
                <li>천재 교육 교과서 검토 위원</li>
                <li>대구 교육감 인재 양성 표창</li>
                <li>교육부 장관 인재 양성 표창</li>
                <li>1급 중고등학교 정교사 자격</li>
                <li>독서논술지도사 자격</li>
                <li>심리 상담사 자격</li>
                <li>청소년 상담 자격</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 위치 안내 */}
          <section
            id="location"
            className={cn('bg-[#F5FAFF] py-20 px-6 md:px-12')}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#2A338E] mb-6">학원 위치 안내</h2>
              <p className="text-lg text-gray-800 mb-6">대구 수성구 달구벌대로 2507 8층</p>

              {/* 네이버 지도 iframe 삽입 */}
              <div className="w-full h-[400px]">
                <iframe
                  src="https://map.naver.com/p/entry/place/1004409667?c=14140823.2407572,4184292.9707398,15,0,0,0,dh"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="하늘 국어영재원 위치"
                ></iframe>
              </div>
            </div>
          </section>

        {/* 학원 규정 */}
          <section
            id="rules"
            className={cn('bg-white py-20 px-6 md:px-12')}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#2A338E] mb-6">학원 규정</h2>
              <Image
                src="/academy-rules.jpg" // public 폴더에 저장된 이미지 경로
                alt="학원 규정"
                width={800}
                height={600}
                className="mx-auto rounded shadow-md"
              />
            </div>
          </section>
    </div>
  );
}
