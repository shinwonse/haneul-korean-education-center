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
            하늘국어영재원
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

      {/* 인사말 */}
        <section
          id="greeting"
          className={cn(
            'flex flex-col items-center justify-center bg-white w-full',
            'py-12 sm:py-16 md:py-20 lg:py-24',
            'px-4 sm:px-6 md:px-8 lg:px-12',
          )}
        >
          <Badge
            className={cn(
              'text-white font-medium rounded-full shadow-lg bg-[#2A338E]',
              'py-2 px-6 sm:px-8 md:px-10',
              'text-base sm:text-lg md:text-xl',
              'mb-10',
            )}
          >
            인사말
          </Badge>
          <div className={cn('max-w-4xl w-full text-center')}>
             <p className={cn('text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed whitespace-pre-line')}>
              참된 스승은 아이보다 반 발짝 앞에서 믿고 기다리는 사람입니다. 가르친다는 것은 지식을 옮기는 일이 아니라 가능성을 지켜보는 것입니다. 
              단 한명의 아이도 내 아이처럼 국어 실력과 생각하는 힘을 성장시키기 위해 수업을 실험하고 교재를 만들고 치열하게 고민하여 돕고자 합니다. 
              두려움과 강요를 통한 교육은 느리고 질립니다. 깨달음과 성찰을 통한 교육은 빠르고 근사합니다. 
                <br />
                <br />
             </p>
             <p className={cn('text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed whitespace-pre-line')}>
              제대로 된 국어교육을 통해 상위1%의 길을 열겠습니다.
                <br />
                <br />
            </p>

            <p className={cn('mt-6 text-[#2A338E] font-semibold text-base sm:text-lg md:text-xl')}>
              - 하늘국어영재원 -
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
                다룰 수 있는 인문학 전공자&rsquo;입니다. 하늘국어영재원은
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
                중요한데, 하늘국어영재원에선 서울대, 최상위 메디컬 대학의 권장
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
                논리력을 제대로 갖춘 국어 영재를 키우는 것이 하늘국어영재원이
                추구하는 교육 목표입니다. 서울대 연구진들로 구성된 현 국어영재연구원에서 제작한 &lsquo;프리미엄
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
                &nbsp;자료를 활용하여 질문에 맞게 논리적인 글쓰기를 할 수 있다.
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
                &nbsp;문학이 우리 삶과 맞닿아 있음을 이해하고, 삶에 적용해보는 
                <br className="hidden sm:block" />
                &nbsp;자기표현적 글쓰기를 할 수 있다.
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
                우리 삶에서 일어나는 시사문제에 대해 사고하는 
                <br className="hidden sm:block" />
                &nbsp;사회참여적 글쓰기와 수행독서를 통해, 개념을 자신의 진로와 
                <br className="hidden sm:block" />
                &nbsp;연관짓는 진로 연계 글쓰기를 할 수 있다.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* 위치 안내 */}
          <section
            id="location"
            className={cn(
              'flex flex-col items-center justify-center bg-[white] w-full',
              'py-12 sm:py-16 md:py-20 lg:py-24',
              'px-4 sm:px-6 md:px-8 lg:px-12',
            )}
          >
            {/* 배지 타이틀 */}
            <Badge
              className={cn(
                'text-white font-medium rounded-full shadow-lg bg-[#2A338E]',
                'py-2 px-6 sm:px-8 md:px-10',
                'text-base sm:text-lg md:text-xl',
                'mb-10',
              )}
            >
              학원 위치 안내
            </Badge>

            {/* 설명 문구 */}
            <p
              className={cn(
                'text-center text-sm sm:text-base md:text-lg text-gray-800',
                'mb-8',
              )}
            >
              하늘국어영재원은 <strong>대구 수성구 달구벌대로 2507, 8층</strong>에 위치해 있습니다.
              <br className="hidden sm:block" />
              &nbsp;아래 지도를 클릭하시면 네이버 지도에서 확인하실 수 있습니다.
            </p>

            {/* 지도 이미지 & 버튼 */}
            <div className="w-full max-w-3xl">
              <a
                href="https://naver.me/Fiv6kXBA"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/naver-map.png"
                  alt="하늘국어영재원 위치 - 네이버 지도 보기"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-md w-full object-cover"
                />
              </a>

              <p className="text-sm text-center mt-4 text-gray-600">
                <a
                  href="https://naver.me/Fiv6kXBA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#2A338E] font-medium"
                >
                  네이버 지도에서 크게 보기
                </a>
              </p>
            </div>
          </section>

        {/* 학원 규정 */}
          <section
            id="rules"
            className={cn('bg-[#E7F3FF] py-20 px-6 md:px-12')}
          >
            <div className="max-w-4xl mx-auto text-center">
              <Badge
                className={cn(
                  'text-white font-medium rounded-full shadow-lg bg-[#2A338E]',
                  'py-2 px-6 sm:px-8 md:px-10',
                  'text-base sm:text-lg md:text-xl',
                  'mb-10',
                )}
              >
                
                학원 규정
              </Badge>
              <Image
                src="/academy-rules2.jpg" // public 폴더에 저장된 이미지 경로
                alt="교습비등 게시표"
                width={800}
                height={600}
                className="mx-auto rounded shadow-md"
              />&nbsp;
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
