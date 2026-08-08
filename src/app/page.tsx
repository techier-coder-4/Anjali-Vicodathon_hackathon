import Link from 'next/link';
import { 
  Cloud,
  Zap,
  ArrowRight,
  ArrowDown,
  Users,
  Smile,
  Globe,
  Network,
  Code2,
  CodeXml,
  Lightbulb,
  Share2,
  CalendarDays,
  Target,
  FileText,
  BrainCircuit,
  Rocket,
  Check,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] selection:bg-blue-500/20">
      
      {/* 1. HEADER */}
      <header className="w-full bg-white border-b border-slate-100 z-50 py-4 px-4 sm:px-8 flex items-center justify-between shadow-sm">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Cloud className="w-8 h-8 text-blue-600 fill-blue-600" />
            <span className="font-extrabold text-2xl tracking-tight text-slate-900">ABTalks</span>
          </div>
          
          <div className="flex items-center">
            <Link 
              href="/dashboard"
              className={cn(buttonVariants({ variant: "default", size: "default" }), "rounded-full font-semibold px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20")}
            >
              Start the Challenge <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full bg-gradient-to-b from-[#F0F5FF]/80 to-[#E0E9FF]/40 relative overflow-hidden">
        
        {/* Soft background glow elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-200/30 rounded-full blur-[80px] pointer-events-none" />

        {/* 2. HERO */}
        <section className="relative pt-12 pb-24 md:pt-24 md:pb-32 px-4 z-10">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
              
              {/* Hero Left */}
              <div className="flex flex-col items-start text-left gap-7 relative">
                
                {/* Floating decorative Icon - Top Left */}
                <div className="absolute top-[-40px] right-[10%] w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-sm animate-pulse" style={{animationDuration: '4s'}}>
                  <CodeXml className="w-6 h-6" />
                </div>
                {/* Floating decorative sparkles */}
                <div className="absolute top-[-10px] right-[5%] text-blue-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" opacity="0.5"/></svg>
                </div>

                <Badge className="px-4 py-1.5 text-xs sm:text-sm bg-orange-50 hover:bg-orange-100 text-orange-600 border border-orange-200 gap-1.5 font-bold rounded-full shadow-sm">
                  <Zap className="w-4 h-4 fill-orange-500" />
                  60-Day Coding Challenge
                </Badge>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-blue-900 leading-[1.1]">
                  60 days. <br /> 
                  Build something real.
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
                  ABTalks is a structured 60-day coding challenge for college students to build daily, prove your work publicly, and develop the consistency that transforms your skills.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                  <Link 
                    href="/dashboard"
                    className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-[16px] rounded-full shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all hover:translate-y-[-2px]")}
                  >
                    Start the Challenge <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a 
                    href="#how-it-works"
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-14 px-8 text-[16px] rounded-full shadow-md bg-white border-slate-200 text-slate-700 hover:bg-slate-50 font-bold transition-all hover:translate-y-[-2px]")}
                  >
                    See how it works <ArrowDown className="ml-2 w-5 h-5" />
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4 text-sm font-semibold text-slate-600 bg-white/50 backdrop-blur-sm py-3 px-5 rounded-full border border-white max-w-fit shadow-sm">
                  <span className="flex items-center gap-2"><Users className="w-5 h-5 text-blue-500" /> Open to all students</span>
                  <span className="flex items-center gap-2"><Smile className="w-5 h-5 text-green-500" /> Beginner friendly</span>
                  <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-purple-500" /> Build in public</span>
                </div>
              </div>

              {/* Hero Right - Journey Visual */}
              <div className="relative w-full max-w-lg xl:max-w-xl mx-auto lg:mx-0 mt-8 lg:mt-0">
                
                {/* Floating Elements Around Card */}
                <div className="absolute -top-6 right-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200/50 z-20 hover:scale-110 transition-transform">
                  <Code2 className="w-8 h-8 text-slate-800" />
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30 z-20 hover:scale-110 transition-transform rotate-12">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center shadow-lg border border-amber-100 z-20 hover:scale-110 transition-transform -rotate-12">
                  <Lightbulb className="w-6 h-6 text-amber-500" />
                </div>

                <Card className="relative border border-white/60 shadow-2xl shadow-blue-900/10 bg-white/90 backdrop-blur-xl overflow-hidden rounded-3xl z-10 p-8 sm:p-10">
                  <div className="mb-8">
                    <h3 className="font-bold text-xl text-slate-900 mb-1">Your 60-Day Journey</h3>
                    <p className="text-sm font-medium text-slate-500">One day at a time. Big progress every day.</p>
                  </div>

                  {/* Connected Timeline */}
                  <div className="relative w-full mb-12">
                    {/* Background track line */}
                    <div className="absolute top-[28px] left-[5%] w-[90%] h-[3px] bg-slate-100" />
                    
                    <div className="flex justify-between relative w-full items-start">
                      
                      {/* Step 1 */}
                      <div className="flex flex-col items-center gap-4 w-1/4 relative z-10 group cursor-default">
                        <div className="w-14 h-14 rounded-full bg-blue-50 border-4 border-white shadow-md shadow-blue-100 flex items-center justify-center font-extrabold text-lg text-blue-600 transition-transform group-hover:scale-105">
                          01
                        </div>
                        <div className="absolute top-[28px] left-[50%] w-full h-[3px] bg-blue-500" />
                        <div className="text-center pt-2">
                          <span className="text-[11px] sm:text-xs font-bold block text-blue-600 tracking-wider mb-1">BUILD</span>
                          <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight">Code daily</span>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex flex-col items-center gap-4 w-1/4 relative z-10 group cursor-default">
                        <div className="w-14 h-14 rounded-full bg-green-50 border-4 border-white shadow-md shadow-green-100 flex items-center justify-center font-extrabold text-lg text-green-600 transition-transform group-hover:scale-105">
                          02
                        </div>
                        <div className="absolute top-[28px] left-[50%] w-full h-[3px] bg-green-400" />
                        <div className="text-center pt-2">
                          <span className="text-[11px] sm:text-xs font-bold block text-green-600 tracking-wider mb-1">PROVE</span>
                          <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight">Share your work</span>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex flex-col items-center gap-4 w-1/4 relative z-10 group cursor-default">
                        <div className="w-14 h-14 rounded-full bg-purple-50 border-4 border-white shadow-md shadow-purple-100 flex items-center justify-center font-extrabold text-lg text-purple-600 transition-transform group-hover:scale-105">
                          03
                        </div>
                        <div className="text-center pt-2">
                          <span className="text-[11px] sm:text-xs font-bold block text-purple-600 tracking-wider mb-1">REFLECT</span>
                          <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight">Understand deeply</span>
                        </div>
                      </div>

                      {/* Dashed line connector to 60 */}
                      <div className="absolute top-[28px] left-[65%] w-[15%] h-[3px] border-t-2 border-dashed border-slate-300" />
                      <div className="absolute top-[21px] left-[78%] text-slate-400 tracking-[0.2em] font-bold text-sm">...</div>

                      {/* Step 4 */}
                      <div className="flex flex-col items-center gap-4 w-1/4 relative z-10 group cursor-default">
                        <div className="w-14 h-14 rounded-full bg-orange-50 border-4 border-white shadow-md shadow-orange-100 flex items-center justify-center font-extrabold text-lg text-orange-500 transition-transform group-hover:scale-105">
                          60
                        </div>
                        <div className="text-center pt-2">
                          <span className="text-[11px] sm:text-xs font-bold block text-orange-500 tracking-wider mb-1">KEEP GOING</span>
                          <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight">Make it a habit</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Bottom Stats Row */}
                  <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 flex justify-between items-center border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-50 text-red-500 rounded-lg"><CalendarDays className="w-5 h-5" /></div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-800 leading-none mb-1">60</span>
                        <span className="text-[11px] font-semibold text-slate-500 leading-none">Days</span>
                      </div>
                    </div>
                    <div className="w-px h-8 bg-slate-200"></div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-teal-50 text-teal-600 rounded-lg"><FileText className="w-5 h-5" /></div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-800 leading-none mb-1">Daily</span>
                        <span className="text-[11px] font-semibold text-slate-500 leading-none">Challenges</span>
                      </div>
                    </div>
                    <div className="w-px h-8 bg-slate-200"></div>
                    <div className="flex items-center gap-3 hidden sm:flex">
                      <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Globe className="w-5 h-5" /></div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-800 leading-none mb-1">Build</span>
                        <span className="text-[11px] font-semibold text-slate-500 leading-none">Publicly</span>
                      </div>
                    </div>
                    <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-fuchsia-50 text-fuchsia-600 rounded-lg"><Zap className="w-5 h-5" /></div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-800 leading-none mb-1">Level Up</span>
                        <span className="text-[11px] font-semibold text-slate-500 leading-none">Everyday</span>
                      </div>
                    </div>
                  </div>
                  
                </Card>
              </div>

            </div>
          </div>
        </section>
        {/* 3. WHY THIS CHALLENGE MATTERS */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16 relative">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-6 drop-shadow-sm">Why this challenge matters</h2>
              <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full mt-4" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              
              <Card className="border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden hover:-translate-y-2 group">
                <div className="h-1.5 w-full bg-blue-500" />
                <CardContent className="p-8 flex flex-col items-start gap-6">
                  <div className="flex items-center justify-between w-full">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform shadow-sm">
                      <CodeXml className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-blue-900/80 tracking-tight">01</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Build Real Projects</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      Break out of tutorial purgatory. Every day gives you a discrete, actionable piece of code to write and ship.
                    </p>
                  </div>
                  <div className="w-12 h-1 bg-blue-200 rounded-full mt-auto" />
                </CardContent>
              </Card>

              <Card className="border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden hover:-translate-y-2 group">
                <div className="h-1.5 w-full bg-green-500" />
                <CardContent className="p-8 flex flex-col items-start gap-6">
                  <div className="flex items-center justify-between w-full">
                    <div className="p-4 bg-green-50 text-green-600 rounded-2xl group-hover:scale-110 transition-transform shadow-sm">
                      <Share2 className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-blue-900/80 tracking-tight">02</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-green-700 transition-colors">Prove Your Work</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      You don't just say you can code. You demonstrate your progress publicly through daily GitHub commits and LinkedIn updates.
                    </p>
                  </div>
                  <div className="w-12 h-1 bg-green-200 rounded-full mt-auto" />
                </CardContent>
              </Card>

              <Card className="border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden hover:-translate-y-2 group">
                <div className="h-1.5 w-full bg-purple-500" />
                <CardContent className="p-8 flex flex-col items-start gap-6">
                  <div className="flex items-center justify-between w-full">
                    <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl group-hover:scale-110 transition-transform shadow-sm">
                      <CalendarDays className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-blue-900/80 tracking-tight">03</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">Build Consistency</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      Motivation fades, but structure remains. Establish a 60-day rhythm that turns sporadic coding into a daily habit.
                    </p>
                  </div>
                  <div className="w-12 h-1 bg-purple-200 rounded-full mt-auto" />
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section id="how-it-works" className="py-24 px-4 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-20 relative">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">How it works</h2>
              <p className="text-lg font-medium text-slate-600">A simple loop you'll follow for 60 days.</p>
            </div>
            
            <div className="relative">
              {/* Desktop connected line */}
              <div className="hidden md:block absolute top-[44px] left-[12%] w-[76%] h-[2px] border-t-2 border-dashed border-slate-300" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative px-4">
                
                {/* Stage 1 */}
                <div className="flex flex-col items-center text-center relative pointer-events-none group hover:pointer-events-auto">
                  <div className="md:hidden absolute top-[44px] left-[50%] -ml-[1px] w-[2px] h-[calc(100%+32px)] border-l-2 border-dashed border-slate-300" />
                  
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-blue-500 text-blue-500 flex flex-col items-center justify-center shrink-0 z-10 shadow-lg relative mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8" />
                  </div>
                  <span className="text-blue-600 font-bold mb-2">01</span>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">Choose a track</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-[200px] font-medium">Pick a focus area that excites you.</p>
                </div>

                {/* Stage 2 */}
                <div className="flex flex-col items-center text-center relative group">
                  <div className="md:hidden absolute top-[44px] left-[50%] -ml-[1px] w-[2px] h-[calc(100%+32px)] border-l-2 border-dashed border-slate-300" />
                  
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-green-500 text-green-500 flex flex-col items-center justify-center shrink-0 z-10 shadow-lg relative mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8" />
                  </div>
                  <span className="text-green-600 font-bold mb-2">02</span>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">Get the daily challenge</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-[200px] font-medium">Receive clear, practical requirements.</p>
                </div>

                {/* Stage 3 */}
                <div className="flex flex-col items-center text-center relative group">
                  <div className="md:hidden absolute top-[44px] left-[50%] -ml-[1px] w-[2px] h-[calc(100%+32px)] border-l-2 border-dashed border-slate-300" />
                  
                  <div className="w-20 h-20 rounded-full bg-purple-500 text-white flex flex-col items-center justify-center shrink-0 z-10 shadow-xl shadow-purple-500/30 relative mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CodeXml className="w-8 h-8" />
                  </div>
                  <span className="text-purple-600 font-bold mb-2">03</span>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">Build it</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-[200px] font-medium">Write the code, solve the problem, and test.</p>
                </div>

                {/* Stage 4 */}
                <div className="flex flex-col items-center text-center relative group">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-orange-400 text-orange-400 flex flex-col items-center justify-center shrink-0 z-10 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-8 h-8 fill-orange-400" />
                  </div>
                  <span className="text-orange-500 font-bold mb-2">04</span>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">Prove it</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-[200px] font-medium">Submit your GitHub and LinkedIn links.</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 5. CORE PHILOSOPHY - DARK SECTION */}
        <section className="py-24 px-4 bg-[#0A0B1A] relative overflow-hidden">
          {/* Subtle lighting backgrounds */}
          <div className="absolute top-0 right-[15%] w-[600px] h-[600px] bg-purple-900/40 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-900/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute left-[30%] top-1/2 w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column Text */}
              <div className="flex flex-col items-start gap-6">
                <span className="uppercase tracking-widest text-[11px] font-bold text-purple-400">Our Philosophy</span>
                
                <h2 className="text-4xl md:text-5xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
                  Doing the work isn't the same <br className="hidden md:block" /> as <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 border-b-4 border-purple-500/50 pb-1">understanding</span> the work.
                </h2>
                
                <p className="text-lg text-slate-300 max-w-lg mb-4 font-medium leading-relaxed">
                  ABTalks measures more than completion. We help you reflect, internalize, and truly grow as a developer.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-start gap-3 w-full">
                  
                  {/* Step 1 */}
                  <div className="flex items-center gap-4 py-3 min-w-[200px]">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 shadow-inner border border-blue-500/30 flex items-center justify-center shrink-0">
                      <CodeXml className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-white tracking-wide">BUILD IT</span>
                      <span className="text-xs text-slate-400 font-medium">Create something<br />with your own hands.</span>
                    </div>
                  </div>
                  
                  <ChevronRight className="w-4 h-4 text-slate-600 hidden sm:block shrink-0" />
                  
                  {/* Step 2 */}
                  <div className="flex items-center gap-4 py-3 min-w-[200px]">
                    <div className="w-10 h-10 rounded-lg bg-green-600/20 shadow-inner border border-green-500/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-white tracking-wide">PROVE IT</span>
                      <span className="text-xs text-slate-400 font-medium">Show the world<br />what you built.</span>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-600 hidden sm:block shrink-0" />

                  {/* Step 3 */}
                  <div className="flex items-center gap-4 py-3 min-w-[200px]">
                    <div className="w-10 h-10 rounded-lg bg-purple-600/20 shadow-inner border border-purple-500/30 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-white tracking-wide">UNDERSTAND IT</span>
                      <span className="text-xs text-slate-400 font-medium">Reflect, learn, and<br />improve every day.</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column Glowing Brain Graphic */}
              <div className="hidden lg:flex justify-center items-center relative h-[450px]">
                {/* Abstract Glowing Head */}
                <div className="relative w-[320px] h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-[1.3]" />
                  <div className="absolute inset-0 rounded-full border border-purple-500/20 scale-[1.1] animate-pulse" style={{animationDuration: '3s'}} />
                  <div className="absolute inset-0 rounded-full border border-pink-500/30 rotate-45" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-full shadow-[0_0_80px_rgba(147,51,234,0.3)]"></div>
                  
                  {/* Internal Glow Bulb/Brain */}
                  <div className="relative z-10 w-24 h-24 bg-gradient-to-b from-amber-200 to-amber-500 rounded-full blur-[2px] shadow-[0_0_100px_rgba(251,191,36,0.8)] flex items-center justify-center">
                     <BrainCircuit className="w-14 h-14 text-slate-900" />
                  </div>

                  <div className="absolute top-10 right-10 w-3 h-3 bg-purple-400 rounded-full blur-sm" />
                  <div className="absolute bottom-20 left-10 w-4 h-4 bg-blue-400 rounded-full blur-sm" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. STUDENT OUTCOMES */}
        <section id="outcomes" className="py-24 px-4 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16 relative">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">From students like you</h2>
              <p className="text-lg font-medium text-slate-500">Real journeys. Real growth.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <Card className="border border-slate-200 shadow-md shadow-slate-200/50 bg-white flex flex-col h-full rounded-2xl">
                <CardContent className="p-6 md:p-8 flex flex-col h-full gap-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                         {/* Avatar placeholder SVG */}
                         <svg viewBox="0 0 36 36" fill="none" className="w-full h-full text-blue-500 bg-blue-100"><path d="M18 20C21.3137 20 24 17.3137 24 14C24 10.6863 21.3137 8 18 8C14.6863 8 12 10.6863 12 14C12 17.3137 14.6863 20 18 20Z" fill="currentColor"/><path d="M26.4714 26.5594C24.3644 24.3312 21.3283 23 18 23C14.6717 23 11.6356 24.3312 9.5286 26.5594C11.6966 28.9839 14.7176 30.5 18 30.5C21.2824 30.5 24.3034 28.9839 26.4714 26.5594Z" fill="currentColor"/></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 leading-tight">Arjun K.</h4>
                        <p className="text-xs font-bold text-blue-600 mt-0.5">Frontend Track</p>
                      </div>
                    </div>
                    <div className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 border border-green-100 shadow-sm">
                      <Check className="w-3 h-3" /> 60/60 Days
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-[14px] text-slate-700 leading-relaxed font-medium">
                      Built a full-stack task manager with auth, drag & drop, and analytics. Learned State Management, APIs, and deployment.
                    </p>
                  </div>

                  <div className="bg-blue-50/50 rounded-xl py-3 px-4 border border-blue-100 text-center mt-2">
                    <span className="text-xs text-slate-500 font-semibold">Biggest takeaway: <span className="text-blue-700 font-bold">Consistency  Motivation</span></span>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="border border-slate-200 shadow-md shadow-slate-200/50 bg-white flex flex-col h-full rounded-2xl">
                <CardContent className="p-6 md:p-8 flex flex-col h-full gap-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                         {/* Avatar placeholder SVG */}
                         <svg viewBox="0 0 36 36" fill="none" className="w-full h-full text-green-600 bg-green-100"><path d="M18 20C21.3137 20 24 17.3137 24 14C24 10.6863 21.3137 8 18 8C14.6863 8 12 10.6863 12 14C12 17.3137 14.6863 20 18 20Z" fill="currentColor"/><path d="M26.4714 26.5594C24.3644 24.3312 21.3283 23 18 23C14.6717 23 11.6356 24.3312 9.5286 26.5594C11.6966 28.9839 14.7176 30.5 18 30.5C21.2824 30.5 24.3034 28.9839 26.4714 26.5594Z" fill="currentColor"/></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 leading-tight">Neha D.</h4>
                        <p className="text-xs font-bold text-green-600 mt-0.5">Backend Track</p>
                      </div>
                    </div>
                    <div className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 border border-green-100 shadow-sm">
                      <Check className="w-3 h-3" /> 60/60 Days
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-[14px] text-slate-700 leading-relaxed font-medium">
                      Created a REST API with role-based auth and automated testing. Got confident with Node.js, MongoDB & system design basics.
                    </p>
                  </div>

                  <div className="bg-green-50/50 rounded-xl py-3 px-4 border border-green-100 text-center mt-2">
                    <span className="text-xs text-slate-500 font-semibold">Biggest takeaway: <span className="text-green-700 font-bold">Small wins compound</span></span>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="border border-slate-200 shadow-md shadow-slate-200/50 bg-white flex flex-col h-full rounded-2xl">
                <CardContent className="p-6 md:p-8 flex flex-col h-full gap-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                         {/* Avatar placeholder SVG */}
                         <svg viewBox="0 0 36 36" fill="none" className="w-full h-full text-purple-600 bg-purple-100"><path d="M18 20C21.3137 20 24 17.3137 24 14C24 10.6863 21.3137 8 18 8C14.6863 8 12 10.6863 12 14C12 17.3137 14.6863 20 18 20Z" fill="currentColor"/><path d="M26.4714 26.5594C24.3644 24.3312 21.3283 23 18 23C14.6717 23 11.6356 24.3312 9.5286 26.5594C11.6966 28.9839 14.7176 30.5 18 30.5C21.2824 30.5 24.3034 28.9839 26.4714 26.5594Z" fill="currentColor"/></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 leading-tight">Rohit S.</h4>
                        <p className="text-xs font-bold text-purple-600 mt-0.5">Full Stack Track</p>
                      </div>
                    </div>
                    <div className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 border border-green-100 shadow-sm">
                      <Check className="w-3 h-3" /> 60/60 Days
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-[14px] text-slate-700 leading-relaxed font-medium">
                      Shipped a personal finance tracker app. Improved problem solving and learned to ship features end-to-end.
                    </p>
                  </div>

                  <div className="bg-purple-50/50 rounded-xl py-3 px-4 border border-purple-100 text-center mt-2">
                    <span className="text-xs text-slate-500 font-semibold">Biggest takeaway: <span className="text-purple-700 font-bold">I can build real things</span></span>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="py-24 px-4 bg-gradient-to-br from-[#060D23] via-[#0A1B4A] to-[#120e36] text-white relative overflow-hidden min-h-[500px]">
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes float-rocket {
              0%, 100% { transform: translateY(0) rotate(42deg); }
              50% { transform: translateY(-12px) rotate(44deg); }
            }
            @keyframes exhaust {
              0%, 100% { transform: scaleY(1); opacity: 0.9; }
              50% { transform: scaleY(1.1); opacity: 1; filter: brightness(1.3); }
            }
          `}} />

          {/* Deep Space Background with Stars */}
          <div className="absolute inset-0 z-0">
             <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full opacity-60"></div>
             <div className="absolute top-[30%] left-[8%] w-1.5 h-1.5 bg-blue-100 rounded-full opacity-80 shadow-[0_0_8px_white]"></div>
             <div className="absolute top-[15%] right-[25%] w-1 h-1 bg-white rounded-full opacity-40"></div>
             <div className="absolute top-[40%] right-[10%] w-1.5 h-1.5 bg-blue-200 rounded-full opacity-70 shadow-[0_0_10px_#93c5fd]"></div>
             <div className="absolute bottom-[40%] right-[30%] w-1 h-1 bg-purple-100 rounded-full opacity-50"></div>
             <div className="absolute top-[50%] left-[40%] w-1 h-1 bg-white rounded-full opacity-30"></div>
             
             {/* Nebula Glows */}
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
             <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
          </div>

          {/* Real 3D Vector Rocket */}
          <div className="absolute left-[5%] md:left-[15%] bottom-[15%] z-20" style={{ animation: "float-rocket 3s ease-in-out infinite" }}>
             <svg width="240" height="240" viewBox="0 0 200 200" className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]">
               <defs>
                 {/* 3D Metallics & Gradients */}
                 <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#CBD5E1" />
                    <stop offset="25%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#94A3B8" />
                 </linearGradient>
                 <linearGradient id="blueAccent" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E3A8A" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                 </linearGradient>
                 <linearGradient id="metalFins" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#94A3B8" />
                    <stop offset="100%" stopColor="#475569" />
                 </linearGradient>
                 <linearGradient id="flameOuter" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="50%" stopColor="#EF4444" />
                    <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0"/>
                 </linearGradient>
                 <linearGradient id="flameInner" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FEF08A" />
                    <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#EA580C" stopOpacity="0"/>
                 </linearGradient>
                 
                 <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
                 <filter id="flameGlow" x="-50%" y="-20%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
               </defs>
               
               {/* Fire / Exhaust */}
               <g style={{ animation: "exhaust 0.1s infinite alternate", transformOrigin: "100px 165px" }}>
                 <path d="M85 155 C70 190, 100 230, 100 230 C100 230, 130 190, 115 155 Z" fill="url(#flameOuter)" filter="url(#flameGlow)"/>
                 <path d="M92 155 C85 180, 100 210, 100 210 C100 210, 115 180, 108 155 Z" fill="url(#flameInner)"/>
                 {/* Core intense white/yellow flame */}
                 <path d="M96 155 C94 165, 100 180, 100 180 C100 180, 106 165, 104 155 Z" fill="#FFFFFF"/>
               </g>

               {/* Back Wings (Darker) */}
               <path d="M90 120 L90 165 L100 160 Z" fill="#334155" />
               <path d="M110 120 L110 165 L100 160 Z" fill="#1E293B" />

               {/* Engine Nozzle */}
               <path d="M85 150 L115 150 L110 160 L90 160 Z" fill="#334155" />
               <path d="M85 150 L100 150 L95 160 L90 160 Z" fill="#64748B" />

               {/* Left Fin */}
               <path d="M72 100 C60 120, 50 145, 50 155 C55 155, 75 145, 80 135 Z" fill="url(#metalFins)" />
               <path d="M72 100 C65 120, 55 145, 55 155 C60 155, 75 145, 80 135 Z" fill="#CBD5E1" opacity="0.6"/>

               {/* Right Fin */}
               <path d="M128 100 C140 120, 150 145, 150 155 C145 155, 125 145, 120 135 Z" fill="url(#metalFins)" />
               <path d="M128 100 C135 120, 145 145, 145 155 C140 155, 125 145, 120 135 Z" fill="#475569" opacity="0.8"/>
               
               {/* Rocket Main Body */}
               <path d="M100 25 C122 55, 128 95, 125 150 C125 152, 100 155, 100 155 C100 155, 75 152, 75 150 C72 95, 78 55, 100 25 Z" fill="url(#rocketBody)" />

               {/* Nose Cone Blue Accent */}
               <path d="M100 25 C110 40, 115 52, 118 65 C100 72, 82 65, 82 65 C85 52, 90 40, 100 25 Z" fill="url(#blueAccent)" />
               
               {/* 3D Highlight on Body */}
               <path d="M100 25 C105 40, 108 80, 105 152 C95 152, 85 100, 92 60 C95 45, 97 32, 100 25 Z" fill="#ffffff" fillOpacity="0.4" />

               {/* Window */}
               <circle cx="100" cy="100" r="18" fill="#475569" />
               <circle cx="100" cy="100" r="14" fill="#0EA5E9" />
               
               {/* Inner window glow/highlight for glass realism */}
               <circle cx="100" cy="100" r="14" fill="url(#blueAccent)" opacity="0.5"/>
               <path d="M92 92 A 12 12 0 0 1 108 90 A 14 14 0 0 0 90 96 Z" fill="#ffffff" fillOpacity="0.9"/>
               <path d="M105 108 A 14 14 0 0 0 108 105 A 14 14 0 0 1 103 108 Z" fill="#ffffff" fillOpacity="0.4"/>

               {/* Body Stripes */}
               <path d="M77 130 Q100 135 123 130" stroke="#3B82F6" strokeWidth="4" fill="none" />
               <path d="M78 120 Q100 125 122 120" stroke="#1E3A8A" strokeWidth="2" fill="none" />
             </svg>
          </div>

          {/* Fluffy Realistic Puffy Clouds Frame Using Layered SVG Circles */}
          {/* Note: In standard web dev we group many circles. White clouds overlaid to create structure. */}
          <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-[300px] pointer-events-none overflow-hidden">
             {/* Deep depth blue clouds */}
             <svg className="absolute bottom-0 w-full h-full text-blue-900/30" viewBox="0 0 100 100" preserveAspectRatio="none">
               <circle cx="-5" cy="110" r="40" fill="currentColor" filter="blur(8px)"/>
               <circle cx="20" cy="120" r="45" fill="currentColor" filter="blur(6px)"/>
               <circle cx="50" cy="125" r="50" fill="currentColor" filter="blur(10px)"/>
               <circle cx="80" cy="115" r="40" fill="currentColor" filter="blur(5px)"/>
               <circle cx="105" cy="110" r="40" fill="currentColor" filter="blur(8px)"/>
             </svg>
             {/* Mid depth light blue clouds */}
             <svg className="absolute bottom-0 w-full h-full text-indigo-400/20" viewBox="0 0 100 100" preserveAspectRatio="none">
               <circle cx="-5" cy="115" r="30" fill="currentColor" filter="blur(4px)"/>
               <circle cx="15" cy="120" r="35" fill="currentColor" filter="blur(2px)"/>
               <circle cx="85" cy="120" r="35" fill="currentColor" filter="blur(2px)"/>
               <circle cx="105" cy="115" r="30" fill="currentColor" filter="blur(4px)"/>
             </svg>
             {/* Foreground pure white frame clouds */}
             <svg className="absolute bottom-[-10px] w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <circle cx="-10" cy="100" r="25" fill="#F8FAFC" />
               <circle cx="5" cy="98" r="22" fill="#F8FAFC" />
               <circle cx="18" cy="105" r="30" fill="#F8FAFC" />
               
               <circle cx="35" cy="108" r="25" fill="#F8FAFC" />
               <circle cx="50" cy="110" r="28" fill="#F8FAFC" />
               <circle cx="65" cy="108" r="25" fill="#F8FAFC" />
               
               <circle cx="82" cy="105" r="30" fill="#F8FAFC" />
               <circle cx="95" cy="98" r="22" fill="#F8FAFC" />
               <circle cx="110" cy="100" r="25" fill="#F8FAFC" />
             </svg>
          </div>

          <div className="container mx-auto max-w-4xl text-center relative z-30 pt-10 pb-8 px-4">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              60 days. One day at a time.
            </h2>
            <p className="text-[17px] sm:text-lg text-blue-100 mb-12 max-w-xl mx-auto leading-relaxed font-medium drop-shadow-sm">
              Start your journey today and become the developer you're capable of being.
            </p>
            <Link 
              href="/dashboard"
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "bg-white hover:bg-slate-50 text-[#091535] h-[60px] px-10 text-[17px] rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.2)] font-extrabold transition-all hover:scale-105 hover:shadow-[0_6px_30px_rgba(255,255,255,0.3)] border border-slate-100 hover:border-white")}
            >
              Start the Challenge <ArrowRight className="ml-2 w-5 h-5 text-blue-600" />
            </Link>
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="bg-[#050917] border-t border-slate-800 py-12 px-4 shadow-inner">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Cloud className="w-6 h-6 text-blue-500 fill-blue-500" />
            <span className="font-bold text-lg text-white">ABTalks</span>
          </div>
          <p className="text-sm text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} ABTalks. All rights reserved.
          </p>
        </div>
      </footer>
      
    </div>
  );
}
