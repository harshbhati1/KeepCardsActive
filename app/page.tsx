'use client'

import { Analytics } from '@vercel/analytics/next'
import { useEffect, useState } from 'react'

// Generate beautiful sparkling background elements
const generateBackgroundElements = () => {
  const elements = []
  
  // Large floating orbs (5 elements)
  for (let i = 0; i < 5; i++) {
    elements.push({
      id: `orb-${i}`,
      type: 'orb',
      size: 80 + (i * 20),
      left: (i * 20 + 10) % 90,
      top: (i * 15 + 10) % 80,
      animationDelay: i * 1.2,
      animationDuration: 6 + (i * 0.8),
      opacity: 0.06 + (i * 0.02)
    })
  }
  
  // Twinkling stars (15 elements)
  for (let i = 0; i < 15; i++) {
    elements.push({
      id: `star-${i}`,
      type: 'star',
      size: 2 + (i % 3),
      left: (i * 13 + 5) % 95,
      top: (i * 17 + 8) % 90,
      animationDelay: i * 0.3,
      animationDuration: 2 + (i % 3),
      opacity: 0.3 + ((i % 4) * 0.15)
    })
  }
  
  // Sparkle particles (20 elements)
  for (let i = 0; i < 20; i++) {
    elements.push({
      id: `sparkle-${i}`,
      type: 'sparkle',
      size: 1 + (i % 2),
      left: (i * 11 + 3) % 97,
      top: (i * 19 + 12) % 88,
      animationDelay: i * 0.4,
      animationDuration: 3 + (i % 4),
      opacity: 0.4 + ((i % 3) * 0.2)
    })
  }
  
  return elements
}

export default function Home() {
  const [backgroundElements, setBackgroundElements] = useState<any[]>([])
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    setBackgroundElements(generateBackgroundElements())
    
    // Handle scroll for active nav item
    const handleScroll = () => {
      const sections = ['home', 'problem', 'setup']
      const scrollY = window.scrollY
      
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
          }
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="fixed inset-0 z-0">
        {backgroundElements.map((element) => (
          <div
            key={element.id}
            className={`absolute rounded-full ${
              element.type === 'orb' 
                ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/10 blur-2xl animate-float' 
                : element.type === 'star'
                ? 'bg-teal-300 animate-twinkle shadow-sm shadow-teal-300/50' 
                : 'bg-gradient-to-r from-orange-400/60 to-teal-400/40 animate-sparkle blur-[0.5px]'
            }`}
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: `${element.left}%`,
              top: `${element.top}%`,
              opacity: element.opacity,
              animationDelay: `${element.animationDelay}s`,
              animationDuration: `${element.animationDuration}s`
            }}
          />
        ))}
      </div>

      {/* Floating particles overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`float-${i}`}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-slow"
            style={{
              left: `${(i * 23 + 8) % 92}%`,
              top: `${(i * 31 + 15) % 85}%`,
              animationDelay: `${i * 2.1}s`,
              animationDuration: `${8 + (i * 1.5)}s`
            }}
          />
        ))}
      </div>

      {/* Glassy Navigation Bar - Ultra Thin & Narrow */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-3">
        <div className="max-w-md mx-auto">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-2 shadow-2xl">
            <div className="flex items-center justify-center">
              {/* Navigation Links - Centered */}
              <div className="flex items-center space-x-1">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'problem', label: 'Problem & Solution' },
                  { id: 'setup', label: 'Get Started' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-1.5 rounded-full font-medium transition-all duration-300 text-sm ${
                      activeSection === item.id
                        ? 'bg-white/20 text-white shadow-lg'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Section 1: Home/Hero */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-300">
                Never Let Your Credit Cards
              </span>
              <br />
              <span className="text-slate-100">
                Get Closed
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-light max-w-5xl mx-auto leading-relaxed mb-12">
              Protect your credit score with automated card activity management
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('problem')}
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-teal-500/25"
              >
                Learn More
              </button>
              <button
                onClick={() => scrollToSection('setup')}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Problem & Solution */}
        <section id="problem" className="min-h-screen flex items-center justify-center py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                The Problem & Our Solution
              </h2>
              <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-4xl mx-auto">
                Understanding the credit card inactivity issue and how we solve it
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              
              {/* Problem Section */}
              <div className="bg-gradient-to-br from-red-950/30 to-orange-950/20 backdrop-blur-sm rounded-3xl border border-red-900/30 hover:border-red-800/50 transition-all duration-300 group h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">The Problem</h3>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <p className="text-lg text-slate-200 leading-relaxed text-center">
                      Banks automatically close credit cards after <span className="font-semibold text-orange-300">12-24 months</span> of inactivity.
                    </p>
                    <p className="text-base text-slate-300 leading-relaxed text-center">
                      This damages your credit score by reducing your credit history length and available credit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution Section */}
              <div className="bg-gradient-to-br from-teal-950/40 to-blue-950/30 backdrop-blur-sm rounded-3xl border border-teal-900/40 hover:border-teal-800/60 transition-all duration-300 group h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Our Solution</h3>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <p className="text-lg text-slate-200 leading-relaxed text-center">
                      Automated <span className="font-semibold text-teal-300">$0.99 annual charges</span> keep your cards active and your credit history intact.
                    </p>
                    <p className="text-base text-slate-300 leading-relaxed text-center">
                      Set it once, protect your credit score for years.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-gradient-to-br from-emerald-950/40 to-teal-950/30 backdrop-blur-sm rounded-3xl border border-emerald-900/40 hover:border-emerald-800/60 transition-all duration-300 group h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Your Benefits</h3>
                  </div>
                  
                  <div className="flex-1">
                    <div className="space-y-4">
                      <div className="flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <p className="text-base text-slate-200 flex items-center">
                            <span className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></span>
                            Maintain credit history length
                          </p>
                          <p className="text-base text-slate-200 flex items-center">
                            <span className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></span>
                            Preserve available credit
                          </p>
                          <p className="text-base text-slate-200 flex items-center">
                            <span className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></span>
                            Protect credit score
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mb-16">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/30 max-w-5xl mx-auto">
                <div className="flex flex-wrap justify-center items-center gap-12 text-slate-400">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base font-medium">Secure & Encrypted</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base font-medium">Powered by Stripe</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <span className="text-base font-medium">Annual Billing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Setup/Get Started */}
        <section id="setup" className="min-h-screen flex items-center justify-center py-20">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Section Header */}
            <div className="mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Get Started Today
              </h2>
              <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-4xl mx-auto mb-8">
                Protect your credit score in just a few clicks
              </p>
            </div>

            {/* Setup Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Click Setup</h3>
                <p className="text-slate-300">Click the setup button to begin the process with our secure Stripe checkout.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Add Cards</h3>
                <p className="text-slate-300">Securely add the credit cards you want to keep active to your account.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Relax</h3>
                <p className="text-slate-300">We automatically handle the rest. Your credit score is now protected!</p>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="mb-8">
              <a 
                href="https://buy.stripe.com/9B6eVdfM5cWZ02XfJT6c003"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-16 py-6 rounded-2xl font-semibold text-xl lg:text-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center space-x-4">
                  <span>Setup Yearly Renewal</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            </div>
            
            <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
              By continuing, you agree to our terms of service. Your card information is securely processed by Stripe and we never store your payment details.
            </p>
          </div>
        </section>
      </div>
      
      <Analytics />
    </div>
  )
}