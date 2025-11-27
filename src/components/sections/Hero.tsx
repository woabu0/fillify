"use client";
import dynamic from "next/dynamic";

const LightRays = dynamic(() => import("../animations/LightRays"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-gray-950" aria-hidden="true" />,
});

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen h-[100vh] bg-gray-950">
      {/* ✅ Light rays as a full background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays w-full h-full"
        />
      </div>

      {/* ✅ Content stays on top */}
      <div className="w-full sm:w-11/12 md:w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-4 sm:px-6 md:px-8">
        <div className="flex items-center flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-center">
          <p className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base border border-white/30 rounded-full inline font-light text-white/90 backdrop-blur-sm bg-white/10">
            Making fillable to editing it
          </p>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight px-2 sm:px-4">
            Modern Solution <br className="hidden sm:block" /> for the Modern World
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 px-2 sm:px-4 max-w-2xl mx-auto">
            Make any non-fillable PDF into a fillable PDF, and edit any PDF for free
          </p>
          <div className="flex justify-center mt-2 sm:mt-3 md:mt-4 w-full sm:w-auto">
            <button className="w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-500 transition-colors duration-200 shadow-lg cursor-pointer">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
