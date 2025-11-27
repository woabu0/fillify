import { Zap, Shield, Cloud, Sparkles } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process your documents in seconds. Our optimized engine ensures quick conversions without compromising quality.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your documents are processed securely. We never store your files, ensuring complete privacy and peace of mind.",
    },
    {
      icon: Cloud,
      title: "Cloud-Based",
      description: "Access your PDF tools from anywhere, on any device. No downloads or installations required—just open and use.",
    },
    {
      icon: Sparkles,
      title: "High Quality",
      description: "Maintain the original quality of your PDFs. Our advanced algorithms preserve formatting, images, and text perfectly.",
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 text-white px-2">Powerful Features</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Everything you need to manage your PDF documents in one place
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-4 sm:p-5 md:p-6 rounded-xl border border-gray-800 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 bg-gradient-to-br from-gray-900 to-gray-950"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center mb-3 sm:mb-4 border border-cyan-800/50">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

