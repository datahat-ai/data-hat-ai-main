import { Dna, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutioningTransition = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-primary/5 to-background border-y border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-display text-foreground mb-3">
            From Strategy to <span className="text-primary">Digital Personnel</span>
          </h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Momentum manifests your operational logic into a specialized digital workforce. 
            Each agent is a veteran-trained module ready for autonomous execution.
          </p>
        </div>

        {/* Visual Flow */}
        <div className="flex items-center justify-center gap-4 md:gap-8 my-10">
          {/* Left: Operational DNA */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Dna className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Operational DNA
            </span>
          </div>

          {/* Connector Line with Pulse */}
          <div className="flex-1 max-w-xs relative h-12 flex items-center">
            {/* Base gradient line */}
            <div className="absolute inset-y-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-primary via-primary/60 to-primary/30 rounded-full" />
            
            {/* Pulsing energy dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
              initial={{ left: "0%", opacity: 0 }}
              animate={{ 
                left: ["0%", "100%"],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5
              }}
            />
            
            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="px-3 py-1 bg-background border border-border rounded-full text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-primary">
                Manifesting
              </span>
            </div>
          </div>

          {/* Right: Digital Personnel */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
              <UserCheck className="w-7 h-7 md:w-8 md:h-8 text-green-600" />
            </div>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Digital Personnel
            </span>
          </div>
        </div>

        {/* Core Credibility Statement */}
        <div className="text-center pt-4 border-t border-border/30">
          <p className="text-base md:text-lg text-foreground/80 italic font-light tracking-wide">
            "Built by <span className="font-medium text-primary">retail industry</span> veterans."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutioningTransition;
