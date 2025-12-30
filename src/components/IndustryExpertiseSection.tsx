import { useState } from 'react';
import { Shirt, ShoppingCart, Cpu, HeartPulse, ArrowRight } from 'lucide-react';

const industries = [
  {
    id: 'apparel',
    label: 'Apparel & Fashion',
    icon: Shirt,
    headline: 'Solve the Fragmentation Trap.',
    body: 'Torque manages the 12x complexity of style-color-size combinations to prevent broken assortments and forced markdowns.',
    stat: '12x Data Complexity',
  },
  {
    id: 'grocery',
    label: 'Grocery & FMCG',
    icon: ShoppingCart,
    headline: 'Master the Freshness Clock.',
    body: 'Autonomous replenishment that accounts for shelf-life and high-frequency demand spikes to minimize waste.',
    stat: 'Zero-Touch Perishables',
  },
  {
    id: 'electronics',
    label: 'Consumer Electronics',
    icon: Cpu,
    headline: 'Protect Capital in Short Cycles.',
    body: 'Precision allocation for high-value SKUs with rapid churn rates and limited launch windows.',
    stat: 'Max Launch Availability',
  },
  {
    id: 'beauty',
    label: 'Health & Beauty',
    icon: HeartPulse,
    headline: 'Tame SKU Proliferation.',
    body: 'Managing thousands of small variants and complex promotional mechanics without manual intervention.',
    stat: 'Automated Promo Lift',
  },
];

const IndustryExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const activeContent = industries.find((i) => i.id === activeTab);

  if (!activeContent) return null;

  const ActiveIcon = activeContent.icon;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Industry-Specific <span className="text-blue-600">Retail DNA.</span>
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl">
            Torque isn't a generic model. It's pre-trained on the unique constraints of your vertical.
          </p>
        </div>

        {/* The Split-Screen Command Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">
          
          {/* Left Column: Vertical Navigation */}
          <div className="flex flex-col space-y-2">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={`group flex items-center gap-4 px-6 py-5 text-left transition-all duration-300 border-l-[4px] ${
                    activeTab === industry.id
                      ? 'border-blue-600 bg-blue-50/50 text-blue-900'
                      : 'border-transparent hover:bg-slate-50 text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Icon
                    size={20}
                    className={activeTab === industry.id ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}
                  />
                  <span className={`text-sm ${activeTab === industry.id ? 'font-bold' : 'font-medium'}`}>
                    {industry.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: The Glass Pane Display */}
          <div className="relative min-h-[400px] rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-slate-200 p-12 flex flex-col justify-center shadow-xl shadow-slate-100/50">
            {/* Decorative Background element */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 text-blue-50 opacity-50 pointer-events-none">
              <ActiveIcon size={200} strokeWidth={1} />
            </div>

            <div key={activeTab} className="relative z-10 animate-in fade-in slide-in-from-right-4 duration-500">
              {/* The Industry 'Badge' */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-200">
                {activeContent.stat}
              </div>
               
              <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
                {activeContent.headline}
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                {activeContent.body}
              </p>
              
              <div className="mt-10">
                <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                  See the use cases <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertiseSection;
