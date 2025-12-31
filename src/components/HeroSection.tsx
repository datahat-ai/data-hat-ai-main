import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import DeployFormDialog from "./DeployFormDialog";

const agentLogs = [
  { type: "System", message: "Sensing demand surge in Store 402...", color: "text-muted-foreground" },
  { type: "Analysis", message: "Stock level: 12 units. Threshold: 50", color: "text-amber-600" },
  { type: "Reasoning", message: "Stockout risk detected (94% confidence)", color: "text-primary" },
  { type: "Action", message: "Transferring stock from DC-West", color: "text-emerald-600" },
];

const HeroSection = () => {
  const [visibleLogs, setVisibleLogs] = useState<number[]>([0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogs((prev) => {
        const next = prev.length >= agentLogs.length ? [0] : [...prev, prev.length];
        return next.slice(-4);
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute left-1/2 bottom-0 w-0.5 h-20 border-l-2 border-dashed border-border" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-header leading-tight">
             Plug the <span className="gradient-text">Data-Action Gap </span>in Modern Retail
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              <span className="font-semibold text-primary">Orkestra:</span> AI Agents steer full price sell-through, eliminate stock-outs and improve margins.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <DeployFormDialog
                trigger={
                  <Button size="xl" variant="glow" className="group">
                    Deploy Your First Retail Agent
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
              />
            </div>
          </div>

          <div className="relative">
            {/* Torque Dashboard visual with connector */}
            <div className="absolute -left-8 top-1/2 w-8 h-0.5 border-t-2 border-dashed border-border hidden lg:block" />
            <div className="soft-glass p-6 space-y-4 relative">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="connector-dot" />
              </div>
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
                </div>
                <span className="text-sm font-mono font-medium text-muted-foreground uppercase tracking-wide">Torque Control</span>
                <div className="ml-auto flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-emerald-600 font-mono font-semibold">LIVE</span>
                </div>
              </div>
              <div className="space-y-3 font-mono text-sm min-h-[200px]">
                {visibleLogs.map((logIndex, i) => {
                  const log = agentLogs[logIndex];
                  return (
                    <div key={`${logIndex}-${i}`} className="flex items-start gap-3 animate-fade-in-up">
                      <span className={`font-semibold ${log.color}`}>[{log.type}]</span>
                      <span className="text-foreground">{log.message}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
