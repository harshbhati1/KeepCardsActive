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

      {/* Main Content - Centered */}
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <div className="text-center px-4 max-w-5xl mx-auto">
          {/* Main Hero */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-300 drop-shadow-lg">Never Lose</span>
            <br />
            <span className="text-slate-100 drop-shadow-lg">Your Cards Again</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Automatic yearly $1 charge to keep your credit cards active, 
            protecting your credit score from unexpected closures.
          </p>
          
          {/* Enhanced CTA */}
          <div className="mb-8">
            <a 
              href="https://buy.stripe.com/9B6eVdfM5cWZ02XfJT6c003"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-12 py-4 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Setup Yearly Renewal
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}