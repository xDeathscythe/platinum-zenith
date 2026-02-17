import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AppPreview from './AppPreview'

/* ─── Codex Icon — 80x80px ───────────────────────── */
function CodexIcon() {
  return (
    <div className="w-[80px] h-[80px] rounded-[23px] bg-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-black/15">
      <span className="text-[36px]">⬡</span>
    </div>
  )
}

/* ─── Hero Screenshot Mockup ─────────────────────── */
function HeroScreenshot() {
  return (
    <div className="relative mx-auto max-w-[1164px] mt-10 rounded-[11px] overflow-hidden shadow-2xl shadow-black/30">
      <div className="bg-[#1a1a1a] border border-white/[0.08]">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28ca42]" />
            </div>
            <span className="ml-3 text-[13px] text-white/30">Codex</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <span className="text-[13px] text-white/35 font-medium">Create Codex app CTA</span>
            <span className="text-[12px] text-white/25">📁</span>
            <span className="text-[13px] text-white/35">openai/codex</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-[13px] text-[#10a37f] border border-[#10a37f]/30 px-4 py-1.5 rounded-md font-semibold">Open</button>
            <button className="text-[13px] text-white/70 border border-white/10 px-4 py-1.5 rounded-md flex items-center gap-1.5 font-medium">📋 Commit</button>
          </div>
        </div>

        <div className="flex min-h-[340px] md:min-h-[400px]">
          {/* Left sidebar */}
          <div className="hidden md:flex flex-col w-[200px] border-r border-white/[0.06] bg-[#141414] py-3 flex-shrink-0">
            <div className="px-3 space-y-0.5">
              <div className="flex items-center gap-2.5 text-[14px] text-white/50 px-3 py-2 rounded-md cursor-pointer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                New thread
              </div>
              <div className="flex items-center gap-2.5 text-[14px] text-white/50 px-3 py-2">⚡ Automations</div>
              <div className="flex items-center gap-2.5 text-[14px] text-white/50 px-3 py-2">🧩 Skills</div>
            </div>
            <div className="mt-3 px-3">
              <div className="text-[11px] text-white/25 uppercase tracking-wider px-3 mb-1.5 font-medium">Threads</div>
              <div className="space-y-0">
                <div className="flex items-center gap-2 text-[14px] text-white/65 px-3 py-1.5 font-medium">📁 Codex</div>
                <div className="flex items-center justify-between text-[13px] px-3 py-1.5 rounded-md bg-white/[0.06] ml-2">
                  <span className="text-white/55 truncate">Create Codex app CTA</span>
                  <span className="text-[10px] text-white/20 ml-1">4h</span>
                </div>
                <div className="flex items-center justify-between text-[13px] px-3 py-1.5 ml-2">
                  <span className="text-white/35 truncate">Implement dark mode</span>
                  <span className="text-[10px] text-white/20 ml-1">8h</span>
                </div>
                <div className="flex items-center gap-2 text-[14px] text-white/50 px-3 py-1.5">💬 ChatGPT</div>
                <div className="flex items-center justify-between text-[13px] px-3 py-1.5 ml-2">
                  <span className="text-white/35 truncate">Voice mode shortcuts</span>
                  <span className="text-[10px] text-white/20 ml-1">2h</span>
                </div>
                <div className="flex items-center gap-2 text-[14px] text-white/50 px-3 py-1.5">🎬 Sora</div>
                <div className="flex items-center justify-between text-[13px] px-3 py-1.5 ml-2">
                  <span className="text-white/35 truncate">Persist prompt presets</span>
                  <span className="text-[10px] text-white/20 ml-1">5h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main panel */}
          <div className="flex-1 flex flex-col min-w-0 p-5">
            <div className="bg-[#2a2a2a] rounded-xl px-5 py-4 mb-5 max-w-[480px] ml-auto">
              <div className="text-[14px] text-white/80 leading-relaxed">Create a compelling launch hero for the new Codex app on openai.com/codex</div>
            </div>
            <div className="space-y-2">
              <p className="text-[14px] text-white/60 leading-relaxed">I'll update the hero copy to clearly communicate what Codex app does, add outcome-focused bullets, and ensure the CTAs align with launch goals.</p>
              <div className="text-[13px] text-white/30">Thought 7s</div>
              <div className="text-[13px] text-white/30">Explored 2 files</div>
              <div className="space-y-1.5 mt-2">
                <div className="flex items-center justify-between bg-[#1e1e1e] rounded-lg px-4 py-2.5">
                  <span className="text-[13px] text-white/40">Edited <span className="text-white/70 font-mono">hero.tsx</span></span>
                  <span className="text-emerald-400">✓</span>
                </div>
                <div className="text-[13px] text-white/30 px-1">Read build.py</div>
                <div className="flex items-center justify-between bg-[#1e1e1e] rounded-lg px-4 py-2.5">
                  <span className="text-[13px] text-white/40">Edited <span className="text-white/70 font-mono">build.py</span></span>
                  <span className="text-emerald-400">✓</span>
                </div>
              </div>
              <p className="text-[14px] text-white/60 leading-relaxed mt-3">Updated the launch hero to emphasize real developer outcomes (repo understanding, safe execution, PR delivery), and aligned the CTAs with launch intent.</p>
            </div>

            {/* Ask Codex anything input */}
            <div className="mt-auto pt-4 px-0">
              <div className="bg-[#232323] rounded-xl px-4 py-3 flex items-center justify-between">
                <span className="text-[14px] text-white/30">Ask Codex anything</span>
                <div className="flex items-center gap-3">
                  <span className="text-[13px] text-white/25">+</span>
                  <span className="text-[13px] text-white/40">GPT-5.3-Codex <span className="text-white/20">∨</span></span>
                  <div className="w-7 h-7 rounded-full bg-[#10a37f] flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M5 12l14 0M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel — code diff */}
          <div className="hidden lg:flex flex-col w-[260px] border-l border-white/[0.06] bg-[#141414]">
            <div className="px-4 py-2.5 border-b border-white/[0.06] flex items-center justify-between">
              <span className="text-[13px] text-white/50 font-medium">2 files changed <span className="text-emerald-400/70 font-mono">+9</span> <span className="text-red-400/60 font-mono">-6</span></span>
              <div className="flex gap-1.5"><span className="text-white/30 cursor-pointer">✕</span><span className="text-emerald-400/60 cursor-pointer">✓</span></div>
            </div>
            <div className="px-4 py-2 border-b border-white/[0.06] flex items-center justify-between">
              <span className="text-[12px] text-white/50 font-mono">src/hero.tsx <span className="text-emerald-400/60">+8</span> <span className="text-red-400/50">-5</span></span>
              <div className="flex gap-1.5"><span className="text-white/20 text-[12px]">✕</span><span className="text-emerald-400/40 text-[12px]">✓</span></div>
            </div>
            <div className="px-4 py-2 font-mono text-[11px] leading-[1.7] overflow-hidden flex-1">
              <div className="text-white/50"> export const <span className="text-[#7dd3fc]">hero</span> = {'{'}</div>
              <div className="bg-red-500/10 text-red-400/65 -mx-4 px-4">-  eyebrow: <span className="text-[#fca5a5]">"New"</span>,</div>
              <div className="bg-red-500/10 text-red-400/65 -mx-4 px-4">-  title: <span className="text-[#fca5a5]">"Codex"</span>,</div>
              <div className="bg-red-500/10 text-red-400/65 -mx-4 px-4">-  subtitle: <span className="text-[#fca5a5]">"AI for developers"</span>,</div>
              <div className="bg-emerald-500/8 text-emerald-400/65 -mx-4 px-4">+  eyebrow: <span className="text-[#86efac]">"Introducing"</span>,</div>
              <div className="bg-emerald-500/8 text-emerald-400/65 -mx-4 px-4">+  title: <span className="text-[#86efac]">"Codex app"</span>,</div>
              <div className="bg-emerald-500/8 text-emerald-400/65 -mx-4 px-4">+  subtitle: <span className="text-[#86efac]">"Your AI pair programmer"</span>,</div>
              <div className="bg-emerald-500/8 text-emerald-400/65 -mx-4 px-4">+  primaryCta: <span className="text-[#86efac]">"Get started"</span>,</div>
              <div className="bg-emerald-500/8 text-emerald-400/65 -mx-4 px-4">+  secondaryCta: <span className="text-[#86efac]">"Download the CLI"</span>,</div>
              <div className="text-white/50"> {'}'};</div>
              <div className="mt-2 text-[#c792ea]">export const <span className="text-[#7dd3fc]">heroBullets</span> = [</div>
              <div className="bg-emerald-500/8 text-emerald-400/65 -mx-4 px-4">+  <span className="text-[#86efac]">"Write code faster"</span>,</div>
              <div className="bg-emerald-500/8 text-emerald-400/65 -mx-4 px-4">+  <span className="text-[#86efac]">"Understand any repo"</span>,</div>
              <div className="bg-emerald-500/8 text-emerald-400/65 -mx-4 px-4">+  <span className="text-[#86efac]">"Understands your repo in seconds"</span>,</div>
              <div className="bg-emerald-500/8 text-emerald-400/65 -mx-4 px-4">+  <span className="text-[#86efac]">"Executes commands safely in a sandbox"</span>,</div>
              <div className="bg-emerald-500/8 text-emerald-400/65 -mx-4 px-4">+  <span className="text-[#86efac]">"Turns issues into reviewed, production-ready PRs"</span>,</div>
              <div className="text-white/50">];</div>
            </div>
            {/* Second file — build.py */}
            <div className="px-4 py-2 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-[12px] text-white/50 font-mono">tools/<b>build.py</b> <span className="text-emerald-400/60">+1</span> <span className="text-red-400/50">-1</span></span>
              <div className="flex gap-1.5"><span className="text-white/20 text-[12px]">✕</span><span className="text-emerald-400/40 text-[12px]">✓</span></div>
            </div>
            <div className="px-4 py-2 font-mono text-[11px] leading-[1.7] overflow-hidden">
              <div className="text-white/50">def <span className="text-[#82aaff]">build</span>():</div>
              <div className="bg-red-500/10 text-red-400/65 -mx-4 px-4">-  print(<span className="text-[#fca5a5]">"building"</span>)</div>
              <div className="bg-emerald-500/8 text-emerald-400/65 -mx-4 px-4">+  print(<span className="text-[#86efac]">"building launch hero…"</span>)</div>
              <div className="mt-1 text-white/50">if __name__ == <span className="text-[#c3e88d]">"__main__"</span>:</div>
              <div className="text-white/50">    build()</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Hero ────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center pt-[120px] md:pt-[152px] pb-[60px] px-4 md:px-8 overflow-hidden">
      {/* Aurora video bg with fade to black */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'url(/aurora-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />
        {/* White wash — 15% lighter at top */}
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.10) 8%, rgba(255,255,255,0.04) 16%, transparent 24%, transparent 100%)',
          }}
        />
        {/* Gradient fade: aurora → black — aggressive, mockup area is pure black */}
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 10%, rgba(0,0,0,0.03) 18%, rgba(0,0,0,0.10) 24%, rgba(0,0,0,0.22) 30%, rgba(0,0,0,0.40) 36%, rgba(0,0,0,0.58) 42%, rgba(0,0,0,0.75) 48%, rgba(0,0,0,0.88) 54%, rgba(0,0,0,0.95) 60%, #000000 66%, #000000 100%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <CodexIcon />
        </motion.div>

        {/* H1 — 62px */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4"
        >
          Platinum Zenith Agency
        </motion.h1>

        {/* Subtitle — 15px */}
        <motion.p
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-2"
        >
          Privucite pažnju i generišite prodaju na lak, siguran i predvidljiv način
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 flex-wrap px-2"
        >
          {/* Primary dark: black bg, white text, h-40, radius-40 */}
          <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
            Zakažite Konsultacije
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link to="/digitalni-marketing" className="inline-flex items-center bg-black/[0.04] text-black text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/[0.08] transition-colors">
            Pogledajte usluge
          </Link>
        </motion.div>

        {/* App preview — interactive element (hidden on mobile) */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-16 md:mt-32 hidden md:block">
          <AppPreview />
        </motion.div>
      </div>
    </section>
  )
}
