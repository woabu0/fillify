import { Upload, Edit, Download } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your PDF",
      description: "Simply drag and drop your PDF file or click to browse. We support all standard PDF formats.",
      step: "01",
    },
    {
      icon: Edit,
      title: "Edit or Convert",
      description: "Use our powerful tools to edit your PDF or convert it to a fillable form. All changes happen instantly.",
      step: "02",
    },
    {
      icon: Download,
      title: "Download & Share",
      description: "Download your processed PDF immediately. No waiting, no watermarks, completely free.",
      step: "03",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 text-white px-2">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Get started in three simple steps. No sign-up required, no credit card needed.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-cyan-600 rounded-full flex items-center justify-center border-4 border-gray-950 z-10">
                  <span className="text-white font-bold text-base sm:text-lg md:text-xl">{step.step}</span>
                </div>
                
                {/* Card */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 pt-10 sm:pt-12 md:pt-14 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-cyan-900/50 rounded-lg sm:rounded-xl flex items-center justify-center border border-cyan-800/50">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector Line (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-6 sm:top-8 md:top-10 left-full w-full h-0.5 bg-gradient-to-r from-cyan-600 to-transparent -z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-600 rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

