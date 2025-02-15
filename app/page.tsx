"use client"

import { Mail, Terminal, Bot, FileSpreadsheet, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [text, setText] = useState("")
  const fullText = "Making highly capable technology accessible to anyone."

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
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="border border-black dark:border-white p-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              <Bot className="w-6 h-6 mb-4" />
              <h2 className="text-xl font-bold mb-2">AI Integration</h2>
              <p className="text-sm opacity-80">
                Leveraging artificial intelligence to enhance daily workflows and decision-making processes.
              </p>
            </div>

            <div className="border border-black dark:border-white p-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              <Zap className="w-6 h-6 mb-4" />
              <h2 className="text-xl font-bold mb-2">Automation</h2>
              <p className="text-sm opacity-80">
                Creating tools that automate repetitive tasks while maintaining human oversight and control.
              </p>
            </div>

            <div className="border border-black dark:border-white p-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              <FileSpreadsheet className="w-6 h-6 mb-4" />
              <h2 className="text-xl font-bold mb-2">Simple Solutions</h2>
              <p className="text-sm opacity-80">
                Building practical tools like spreadsheets and templates that solve real problems effectively.
              </p>
            </div>
          </div>

          <div className="border border-black dark:border-white p-8">
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider">Featured Project</h3>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold">Buckt</h2>
                  <p className="text-gray-600 dark:text-gray-400">Simple expense tracking for everyone</p>
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
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 border-t border-black dark:border-white mt-12">
        <p className="text-sm text-center opacity-80">Building appropriate technology for the future</p>
      </footer>
    </div>
  )
}

