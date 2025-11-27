export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border-y border-cyan-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-5 md:mb-6 px-2">
          Ready to Transform Your PDFs?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto px-2">
          Start using Fillify today and experience the easiest way to edit and convert PDF documents. 
          No sign-up required, completely free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-500 transition-colors duration-200 shadow-lg shadow-cyan-600/30 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

