import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROICalculatorSection = () => {
  const [revenue, setRevenue] = useState(50);

  const revenueValue = revenue * 1000000;
  const outOfStockLoss = revenueValue * 0.08;
  const trappedCapital = revenueValue * 0.15;
  const totalRecovery = outOfStockLoss + trappedCapital;

  const formatValue = (value: number) => {
    return (value / 1000000).toFixed(1);
  };

  return (
    <section className="relative py-24 bg-background">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-6">
        {/*<span className="text-primary font-medium text-sm uppercase tracking-wider">RoI Calculator</span>*/}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
          The Hidden Cost of Manual Processes
        </h2>
        <p className="text-muted-foreground mt-4">
          Slide to see your potential losses and what you could recover.
        </p>
      </div>

      {/* Dark Console Panel */}
      <div className="max-w-4xl mx-auto px-6">
        <div 
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: '#0F172A',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Inner glow effect */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
            }}
          />

          <div className="relative p-8 md:p-12">
            {/* Revenue Slider Section */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Annual Revenue</span>
                <span className="text-white text-3xl md:text-4xl font-bold font-mono">
                  ${formatValue(revenueValue)}M
                </span>
              </div>
              
              {/* Custom Slider */}
              <div className="relative h-2 bg-slate-800 rounded-full overflow-visible">
                <div 
                  className="absolute h-full rounded-full transition-all duration-150"
                  style={{
                    width: `${((revenue - 10) / 490) * 100}%`,
                    background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                  }}
                />
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                {/* Glowing Thumb */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full pointer-events-none transition-all duration-150"
                  style={{
                    left: `calc(${((revenue - 10) / 490) * 100}% - 10px)`,
                    background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                  }}
                />
              </div>
              <div className="flex justify-between mt-3 text-xs text-slate-500 font-mono">
                <span>$10M</span>
                <span>$500M</span>
              </div>
            </div>

            {/* Etched Divider */}
            <div 
              className="h-px mb-10"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)',
              }}
            />

            {/* Data Modules Grid */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-0">
              {/* Lost to Out-of-Stocks */}
              <div className="md:border-r md:border-slate-700/50 md:pr-6">
                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-3">
                  Lost to Out-of-Stocks
                </div>
                <OdometerValue value={formatValue(outOfStockLoss)} color="#F87171" />
                <div className="text-slate-500 text-xs mt-2 font-mono">~8% of revenue</div>
              </div>

              {/* Etched Vertical Divider (mobile) */}
              <div className="h-px md:hidden bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

              {/* Trapped in Safety Stock */}
              <div className="md:border-r md:border-slate-700/50 md:px-6">
                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-3">
                  Trapped in Safety Stock
                </div>
                <OdometerValue value={formatValue(trappedCapital)} color="#FB923C" />
                <div className="text-slate-500 text-xs mt-2 font-mono">~15% of revenue</div>
              </div>

              {/* Etched Vertical Divider (mobile) */}
              <div className="h-px md:hidden bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

              {/* Total Recovery Potential */}
              <div className="md:pl-6 relative">
                {/* Glow behind recovery value */}
                <div 
                  className="absolute -inset-4 rounded-xl opacity-20 blur-xl"
                  style={{
                    background: 'radial-gradient(circle, #10B981 0%, transparent 70%)',
                  }}
                />
                <div className="relative">
                  <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-3">
                    Total Recovery Potential
                  </div>
                  <OdometerValue value={formatValue(totalRecovery)} color="#10B981" isHero />
                  <div className="text-slate-500 text-xs mt-2 font-mono">annual savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Odometer Component with Rolling Digit Effect
const OdometerValue = ({ value, color, isHero = false }: { value: string; color: string; isHero?: boolean }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      setDisplayValue(value);
      prevValue.current = value;
    }
  }, [value]);

  const digits = displayValue.split('');

  return (
    <div 
      className={`flex items-baseline font-mono ${isHero ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'} font-bold`}
      style={{ 
        color,
        textShadow: isHero ? `0 0 30px ${color}40, 0 0 60px ${color}20` : `0 0 20px ${color}30`,
      }}
    >
      <span className="mr-0.5">$</span>
      <div className="flex overflow-hidden">
        {digits.map((digit, index) => (
          <OdometerDigit key={index} digit={digit} index={index} />
        ))}
      </div>
      <span className="text-lg md:text-xl ml-1 opacity-80">M</span>
    </div>
  );
};

const OdometerDigit = ({ digit, index }: { digit: string; index: number }) => {
  const isNumber = !isNaN(Number(digit));
  
  if (!isNumber) {
    return <span>{digit}</span>;
  }

  return (
    <div className="relative h-[1.2em] overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: index * 0.02
          }}
          className="block"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default ROICalculatorSection;
