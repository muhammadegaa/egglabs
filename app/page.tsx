"use client"

import { Mail, Terminal, Heart, Shield, Users, Brain, Sprout, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [text, setText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const fullText = "Building ethical AI that helps humanity flourish."

  useEffect(() => {
    setIsVisible(true)
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) clearInterval(timer)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
      </div>
      
      {/* Navigation */}
      <nav className={`relative z-50 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <Terminal className="w-7 h-7 text-emerald-400 transition-transform group-hover:scale-110 duration-300" />
                <div className="absolute -inset-2 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                egg labs
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="mailto:helloegglabs@gmail.com?subject=Hello%20Egg%20Labs&body=I'd%20love%20to%20learn%20more%20about%20your%20projects!"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="font-medium">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="container mx-auto px-6 pt-20 pb-32">
          <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  {text}
                </span>
                <span className="animate-pulse text-emerald-400">_</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                At Egg Labs, we believe technology should amplify human potential, not replace it. 
                We create AI systems that are transparent, secure, and designed to help people grow 
                alongside emerging technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 flex items-center gap-2">
                  View Our Work
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="px-8 py-4 border border-gray-600 rounded-full font-semibold text-lg hover:bg-white/5 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-6 py-24">
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Our Principles
              </span>
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
              Every decision we make is guided by these core values that put humanity first.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="group relative p-8 bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">Human-Centered</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Designing AI that enhances human capabilities rather than replacing human judgment and creativity.
                  </p>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="group relative p-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">Ethical & Secure</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Building transparent systems with robust privacy protections and clear accountability mechanisms.
                  </p>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="group relative p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Sprout className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">Growth-Oriented</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Creating tools that help individuals and communities develop new skills alongside technological advancement.
                  </p>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="container mx-auto px-6 py-24">
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-white/10 rounded-3xl p-12">
              <h3 className="text-4xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Approach
                </span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-white">Transparent Intelligence</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Every AI system we build comes with clear explanations of how it works, 
                        what data it uses, and how decisions are made.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-white">Community-Driven</h4>
                      <p className="text-gray-300 leading-relaxed">
                        We involve users in the development process, ensuring our tools serve 
                        real human needs and values.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="container mx-auto px-6 py-24">
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Current Projects
              </span>
            </h3>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
              Real-world applications of our ethical AI principles in action.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Buckt</h4>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
                      Live
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Simple, privacy-first expense tracking that helps people understand their financial patterns
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Privacy-First</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Local Data</span>
                </div>
                
                <a
                  href="https://buckt.replit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 group-hover:translate-x-1"
                >
                  Try it
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">NotaKu</h4>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
                      Live
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Empowering small businesses with accessible document management for POs, DOs, invoices, and receipts
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">SME-Focused</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Accessible</span>
                </div>
                
                <a
                  href="https://notaku.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 group-hover:translate-x-1"
                >
                  Try it
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">BeeReady</h4>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
                      Live
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Ethical AI-powered language assessment that helps learners grow at their own pace
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Educational</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Growth-Focused</span>
                </div>
                
                <a
                  href="https://beeready.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 group-hover:translate-x-1"
                >
                  Try it
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-16 border-t border-white/10">
          <div className={`text-center transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="max-w-4xl mx-auto mb-8">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-300 mb-6 italic">
                "Technology should be a tool for human flourishing, not human replacement."
              </blockquote>
              <p className="text-lg text-gray-400">
                Building ethical AI systems that grow with humanity
              </p>
            </div>
            
            <div className="flex justify-center items-center gap-6 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500">
                © 2024 Egg Labs. Building the future, responsibly.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}