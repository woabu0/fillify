import { Gift, FileText, Clock, Lock, Rocket } from "lucide-react";

export default function About() {
  const stats = [
    { value: "100%", label: "Free to Use", Icon: Gift },
    { value: "10K+", label: "Documents Processed", Icon: FileText },
    { value: "24/7", label: "Available", Icon: Clock },
    { value: "0", label: "Files Stored", Icon: Lock },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent px-2">
            About Fillify
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Transform your PDF workflow with powerful, easy-to-use tools that make document management effortless.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.Icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 sm:p-5 md:p-6 text-center hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center border border-cyan-800/50">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-900/30 border border-cyan-800/50 rounded-full text-cyan-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Why Choose Fillify?
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              The Modern Solution for PDF Management
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Fillify is the cutting-edge platform for PDF editing and conversion. Whether you need to make a PDF fillable, 
              edit existing documents, or transform your files, we provide a seamless experience that saves you time and effort.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Our platform is designed with simplicity and power in mind, making complex PDF operations accessible to everyone, 
              from professionals to students. No technical expertise required—just upload, edit, and download.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4">
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                <span>No Sign-up Required</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                <span>Instant Processing</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                <span>Privacy First</span>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 md:mt-0">
            <div className="bg-gradient-to-br from-cyan-900/40 via-blue-900/40 to-purple-900/40 border border-cyan-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-sm relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
              
              <div className="relative z-10 text-center space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="inline-block p-3 sm:p-4 bg-cyan-500/20 rounded-2xl">
                    <Rocket className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400" />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-400 mb-1 sm:mb-2">100%</div>
                <div className="text-lg sm:text-xl md:text-2xl text-gray-200 font-semibold mb-3 sm:mb-4">Free Forever</div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed px-2">
                  No hidden fees, no subscriptions, no credit card required. 
                  Experience the full power of Fillify completely free.
                </p>
                <div className="pt-3 sm:pt-4 border-t border-gray-700/50">
                  <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                    <div>✓ Unlimited Use</div>
                    <div>✓ All Features</div>
                    <div>✓ No Ads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
