import { motion } from 'motion/react';
import { VALUES, TIMELINE, BUSINESS_INFO } from '../data';
import { ShieldAlert, Heart, BadgeIndianRupee, MessageCircle, Clock, Award, Star, Quote } from 'lucide-react';

const IconMap: { [key: string]: any } = {
  ShieldAlert,
  Heart,
  BadgeIndianRupee,
  MessageCircle
};

export default function About() {
  return (
    <div className="pt-24 pb-12 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="about-view">
      
      {/* 1. HEADER HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-8">
        <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">Since 1998</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
          About Agrawal Medical Hall
        </h1>
        <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
        <p className="text-slate-500 dark:text-neutral-450 text-sm sm:text-base leading-relaxed">
          Your neighborhood wellness partner in Pai Bigha, Bihar. Discover our journey of integrity, quality healthcare dispensing, and dedicated local support.
        </p>
      </section>

      {/* 2. BUSINESS STORY & OWNER MESSAGE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our 25+ Year Service Legacy in Bihar
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed font-sans">
            Agrawal Medical Hall was established in the year 1998 with a simple, profound goal: to bring genuine, life-saving medicines within easy reach of the families residing in and around Pai Bigha. During that era, accessing standard prescription drugs required travelling long distances to cities. Our founder recognized this critical gap and committed to providing a fully stocked local pharmacy right at the center of the town.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed font-sans">
            Over the years, we have grown from a modest medication counter into a robust modern healthcare hub. Today, we handle a vast catalog of prescription pharmaceuticals, temperature-controlled pediatric insulin, advanced medical diagnostic equipment, baby healthcare supplies, and everyday hygienic essentials. 
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed font-sans">
            We are proud to serve as a reliable healthcare gateway for multiple generations. Our customers trust us not just for our inventory, but for the personalized guidance, dosage advice, and respect that we accord to every individual who walks through our doors.
          </p>
        </div>

        {/* Owner Message Card */}
        <div className="lg:col-span-5">
          <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-950/20 dark:to-emerald-950/20 border border-blue-500/15 dark:border-teal-500/5 space-y-6">
            <Quote className="absolute top-4 right-4 h-12 w-12 text-blue-500/20" />
            
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">Pharmacist & Owner Message</h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-neutral-350 italic font-sans leading-relaxed">
                &quot;We believe that healthcare is a fundamental trust. Our customers are our friends, neighbors, and families. For over two decades, we have strictly prioritized medicine quality over everything else. We ensure every batch is double-verified, because your wellness is our household&apos;s primary responsibility. Thank you for making us Pai Bigha&apos;s most trusted medical landmark.&quot;
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-blue-500/20 pt-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-display font-black text-sm">
                AG
              </div>
              <div>
                <h4 className="font-display font-extrabold text-xs text-slate-900 dark:text-white leading-none">Mr. Agrawal</h4>
                <span className="text-[10px] text-blue-600 dark:text-blue-400 font-mono">Chief Pharmacist & Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & CORE VALUES */}
      <section className="space-y-12 bg-slate-100/50 dark:bg-neutral-900/40 py-16 px-6 sm:px-12 rounded-3xl border border-slate-200/50 dark:border-neutral-850">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="font-display text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Our Noble Mission</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 leading-relaxed font-sans">
              To safeguard the health of our Pai Bigha community by delivering 100% authentic, scientifically correct medications and clinical-grade equipment, while maintaining utmost transparency, affordability, and supportive medical counsel.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Our Strategic Vision</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 leading-relaxed font-sans">
              To modernize rural healthcare dispensing in Bihar by integrating temperature-managed refrigeration arrays, rapid-response WhatsApp ordering systems, and comprehensive post-prescription tracking for elder-care programs.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-neutral-800 pt-10">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">Our Core Ethical Values</h4>
            <p className="text-xs text-slate-500">The founding principles that direct every medical dispensing action we perform.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val) => {
              const IconComp = IconMap[val.iconName] || ShieldAlert;
              return (
                <div key={val.id} className="p-5 rounded-2xl bg-white dark:bg-neutral-950 border border-slate-100 dark:border-neutral-850 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h5 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">{val.title}</h5>
                  <p className="text-xs text-slate-500 dark:text-neutral-400 font-sans leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CHRONOLOGICAL TIMELINE */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">Our Chronological Journey</h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
          <p className="text-xs text-slate-500">Tracing our milestones and standard upgrades through the years of local healthcare service.</p>
        </div>

        <div className="relative border-l border-slate-200 dark:border-neutral-800 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-10">
          {TIMELINE.map((item) => (
            <div key={item.id} className="relative">
              {/* Dot indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-neutral-950 shadow-md" />
              
              <div className="space-y-1">
                <span className="inline-block text-xs font-mono font-bold bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-md">
                  {item.year}
                </span>
                <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-neutral-400 leading-relaxed font-sans">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY LOCAL CUSTOMERS TRUST US */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-blue-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="space-y-2">
          <span className="font-display text-4xl sm:text-5xl font-black">25+</span>
          <h4 className="font-display text-sm font-bold tracking-wider uppercase text-blue-100">Years of Reputation</h4>
          <p className="text-xs text-blue-100/80 font-sans max-w-xs mx-auto">Continuous reliable counter service since our founding in 1998.</p>
        </div>
        <div className="space-y-2 border-y md:border-y-0 md:border-x border-blue-800 py-6 md:py-0">
          <span className="font-display text-4xl sm:text-5xl font-black">100%</span>
          <h4 className="font-display text-sm font-bold tracking-wider uppercase text-blue-100">Genuine Guarantee</h4>
          <p className="text-xs text-blue-100/80 font-sans max-w-xs mx-auto">Sourced directly from verified corporate pharmacy wholesalers.</p>
        </div>
        <div className="space-y-2">
          <span className="font-display text-4xl sm:text-5xl font-black">10K+</span>
          <h4 className="font-display text-sm font-bold tracking-wider uppercase text-blue-100">Served Families</h4>
          <p className="text-xs text-blue-100/80 font-sans max-w-xs mx-auto">We are standard suppliers of healthcare for homes throughout Pai Bigha.</p>
        </div>
      </section>

    </div>
  );
}
