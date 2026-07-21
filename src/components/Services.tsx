import { SERVICES } from '../data';
import { 
  Pill, 
  Dumbbell, 
  Baby, 
  Sparkles, 
  Activity, 
  Scissors, 
  HeartPulse, 
  Droplet, 
  Thermometer, 
  FileSpreadsheet, 
  CheckCircle,
  Phone,
  MessageSquare,
  Search
} from 'lucide-react';
import { useState } from 'react';

const IconMap: { [key: string]: any } = {
  FileSpreadsheet,
  Pill,
  Dumbbell,
  Baby,
  Sparkles,
  Activity,
  Scissors,
  HeartPulse,
  Droplet,
  Thermometer
};

interface ServicesProps {
  openOrderFormWithMedicine: (medName: string) => void;
}

export default function Services({ openOrderFormWithMedicine }: ServicesProps) {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredServices = SERVICES.filter(serv => 
    serv.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    serv.description.toLowerCase().includes(filterQuery.toLowerCase()) ||
    serv.features.some(f => f.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  return (
    <div className="pt-24 pb-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services-view">
      
      {/* 1. HEADER HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-8">
        <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">Our Offerings</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
          Comprehensive Pharmacy Services
        </h1>
        <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
        <p className="text-slate-500 dark:text-neutral-450 text-sm sm:text-base leading-relaxed">
          From temperature-controlled prescription dispensing to advanced clinic setups and home health equipment, we have you fully covered.
        </p>
      </section>

      {/* 2. LIVE FILTER BAR */}
      <section className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search through specific services..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs focus:border-blue-600 focus:outline-none dark:text-white"
            id="services-filter-input"
          />
        </div>
      </section>

      {/* 3. GRID OF SERVICES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => {
            const IconComp = IconMap[service.iconName] || Pill;
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-white dark:bg-neutral-900 p-6 sm:p-8 border border-slate-100 dark:border-neutral-855 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
                        {service.title}
                      </h3>
                      <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                        Verified Department
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-neutral-400 font-sans leading-relaxed">
                    {service.description}
                  </p>

                  <div className="border-t border-slate-100 dark:border-neutral-850 pt-4">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Highlights & Stock Items:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-slate-600 dark:text-neutral-300 font-sans">
                          <CheckCircle className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-8 pt-4 border-t border-slate-100 dark:border-neutral-855">
                  <button
                    onClick={() => openOrderFormWithMedicine(service.title)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs uppercase tracking-wider shadow-sm cursor-pointer transition-all"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Quick Order</span>
                  </button>
                  <a
                    href="tel:07480860951"
                    className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl border border-slate-200 dark:border-neutral-800 hover:bg-slate-50 dark:hover:bg-neutral-850 text-slate-700 dark:text-neutral-355 font-display font-bold text-xs"
                  >
                    <Phone className="h-3.5 w-3.5 text-blue-600" />
                    <span>Call Staff</span>
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-12 text-slate-400 space-y-2">
            <p className="text-sm font-bold">No pharmacy services matched your search filter.</p>
            <p className="text-xs text-slate-500">Try searching for other healthcare groups or clear the search.</p>
            <button
              onClick={() => setFilterQuery('')}
              className="mt-2 text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Clear Search Filter
            </button>
          </div>
        )}
      </section>

      {/* 4. EMERGENCY MEDICAL SERVICES BAR */}
      <section className="bg-red-500/10 dark:bg-red-950/20 border-2 border-dashed border-red-500/20 p-6 sm:p-10 rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-2">
          <span className="inline-block text-[10px] font-mono font-bold bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-md uppercase">
            Emergency Availability Support
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Looking for Critical Vaccines, Anti-Venom, or Rare Injections?
          </h3>
          <p className="text-xs text-slate-500 dark:text-neutral-400 font-sans leading-relaxed">
            During emergency medical states, every minute is precious. If you need cold-chain vaccines, urgent trauma accessories, or rare medications not listed in local shops, contact us directly. We will pull stock from our wholesale affiliates in Patna/Gaya within minimum turnaround hours.
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col gap-2">
          <a
            href="tel:07480860951"
            className="w-full text-center py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xs shadow-md shadow-red-600/10"
          >
            Call Emergency: +91 74808 60951
          </a>
          <span className="text-[10px] text-center text-slate-400 italic font-mono block">
            Active 24x7 for genuine medical crises.
          </span>
        </div>
      </section>

    </div>
  );
}
