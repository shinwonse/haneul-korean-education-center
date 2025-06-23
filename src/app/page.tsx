import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Header text */}
        <div className="text-center mb-8">
          <h1 className="font-gmarket-light text-lg text-gray-600 mb-2">
            프리미엄 국어 영재 교육 시스템
          </h1>
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-gmarket-light text-gray-800">
              상위 1%의 길을 열다
            </h2>
            <h2 className="text-2xl md:text-3xl font-gmarket-medium text-gray-800">
              하늘 국어 영재원
            </h2>
          </div>
        </div>

        {/* Video section */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gray-200 overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
