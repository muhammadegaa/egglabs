"use client"

import { Mail, Terminal, Heart, Shield, Users, Brain, Sprout } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [text, setText] = useState("")
  const fullText = "Building ethical AI that helps humanity flourish."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) clearInterval(timer)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-900 text-black dark:text-white font-mono">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-black dark:border-white">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5" />
          <span className="font-bold">egg labs</span>
        </div>
        <a
          href="mailto:helloegglabs@gmail.com?subject=Hello%20Egg%20Labs&body=I'd%20love%20to%20learn%20more%20about%20your%20projects!"
          className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-4 py-2 transition-colors flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          <span>contact</span>
        </a>
      </header>

      <main className="container mx-auto px-4 flex-grow flex flex-col justify-center py-20">
        <div className="max-w-4xl mx-auto w-full space-y-20">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold min-h-[4rem]">
              {text}
              <span className="animate-pulse">_</span>
            </h1>
            <p className="text-lg md:text-xl opacity-80 max-w-3xl">
              At Egg Labs, we believe technology should amplify human potential, not replace it. 
              We create AI systems that are transparent, secure, and designed to help people grow 
              alongside emerging technologies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="border border-black dark:border-white p-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              <Heart className="w-6 h-6 mb-4" />
              <h2 className="text-xl font-bold mb-2">Human-Centered</h2>
              <p className="text-sm opacity-80">
                Designing AI that enhances human capabilities rather than replacing human judgment and creativity.
              </p>
            </div>

            <div className="border border-black dark:border-white p-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              <Shield className="w-6 h-6 mb-4" />
              <h2 className="text-xl font-bold mb-2">Ethical & Secure</h2>
              <p className="text-sm opacity-80">
                Building transparent systems with robust privacy protections and clear accountability mechanisms.
              </p>
            </div>

            <div className="border border-black dark:border-white p-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              <Sprout className="w-6 h-6 mb-4" />
              <h2 className="text-xl font-bold mb-2">Growth-Oriented</h2>
              <p className="text-sm opacity-80">
                Creating tools that help individuals and communities develop new skills alongside technological advancement.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="border border-black dark:border-white p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Our Approach</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5" />
                      <h4 className="font-bold">Transparent Intelligence</h4>
                    </div>
                    <p className="text-sm opacity-80 leading-relaxed">
                      Every AI system we build comes with clear explanations of how it works, 
                      what data it uses, and how decisions are made.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5" />
                      <h4 className="font-bold">Community-Driven</h4>
                    </div>
                    <p className="text-sm opacity-80 leading-relaxed">
                      We involve users in the development process, ensuring our tools serve 
                      real human needs and values.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-black dark:border-white p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Current Projects</h3>

                <div className="flex justify-between items-start border-b border-gray-200 dark:border-gray-700 pb-6">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">Buckt</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Simple, privacy-first expense tracking that helps people understand their financial patterns
                    </p>
                    <div className="flex gap-2 text-xs">
                      <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Privacy-First</span>
                      <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Local Data</span>
                    </div>
                  </div>
                  <a
                    href="https://buckt.replit.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Try it →
                  </a>
                </div>

                <div className="flex justify-between items-start border-b border-gray-200 dark:border-gray-700 pb-6">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">NotaKu</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Empowering small businesses with accessible document management for POs, DOs, invoices, and receipts
                    </p>
                    <div className="flex gap-2 text-xs">
                      <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">SME-Focused</span>
                      <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Accessible</span>
                    </div>
                  </div>
                  <a
                    href="https://notaku.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Try it →
                  </a>
                </div>

                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">BeeReady</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ethical AI-powered language assessment that helps learners grow at their own pace
                    </p>
                    <div className="flex gap-2 text-xs">
                      <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Educational</span>
                      <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Growth-Focused</span>
                    </div>
                  </div>
                  <a
                    href="https://beeready.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Try it →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 border-t border-black dark:border-white mt-12">
        <div className="text-center space-y-4">
          <p className="text-sm opacity-80">
            "Technology should be a tool for human flourishing, not human replacement."
          </p>
          <p className="text-xs opacity-60">
            Building ethical AI systems that grow with humanity
          </p>
        </div>
      </footer>
    </div>
  )
}