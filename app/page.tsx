'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i < 5 
                ? 'bg-gradient-to-r from-teal-500/10 to-blue-500/10 blur-xl' 
                : i < 15 
                ? 'w-1 h-1 bg-slate-400 opacity-20' 
                : 'w-1.5 h-1.5 bg-teal-400 opacity-15 animate-ping'
            }`}
            style={{
              width: i < 5 ? `${60 + Math.random() * 80}px` : undefined,
              height: i < 5 ? `${60 + Math.random() * 80}px` : undefined,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content - Professional Layout */}
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <div className="text-center px-6 max-w-5xl mx-auto">
          
          {/* Professional Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-300">
                Never Let Your Credit Cards
              </span>
              <br />
              <span className="text-slate-100">
                Get Closed
              </span>
            </h1>
          </div>

          {/* Professional Problem Statement */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-8">
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-4">
                <span className="text-orange-300 font-semibold">Did you know?</span> Banks automatically close credit cards after 12-24 months of inactivity.
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                This can seriously damage your credit score by reducing your credit history length.
              </p>
            </div>
            
            {/* Solution Box */}
            <div className="bg-teal-900/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-700/30">
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                We automatically charge a $.99 amount annually to keep your cards active, protecting years of credit history.
              </p>
            </div>
          </div>

          {/* Professional CTA */}
          <div className="space-y-6">
            <a 
              href="https://buy.stripe.com/9B6eVdfM5cWZ02XfJT6c003"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Setup Yearly Renewal
              </div>
            </a>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}