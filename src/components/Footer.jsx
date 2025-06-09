export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-brand-900 to-brand-800 border-t border-brand-700/30 safe-bottom">
      <div className="max-w-7xl mx-auto py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white/90 font-light tracking-wide text-sm lg:text-base">
            © 2025 . GB GLOBA
            <span className="relative">
              L
              <sup className="absolute -top-1.5 lg:-top-2 -right-1 lg:right-0 text-xs text-white/80">®</sup>
            </span>
            . All rights reserved.
          </p>

          {/* Optional: Add back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 inline-flex items-center px-3 py-2 text-xs font-medium text-white/70 hover:text-white transition-colors duration-200 group"
            aria-label="Back to top"
          >
            <svg className="w-4 h-4 mr-1 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}