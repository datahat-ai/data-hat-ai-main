import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  ShoppingCart,
  TrendingUp,
  Warehouse,
  X,
  Zap,
} from "lucide-react";

const ExecutiveDecisionModule = () => {
  const [countdown, setCountdown] = useState({ minutes: 14, seconds: 32 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="decision-module p-0 max-w-lg w-full overflow-hidden">
      {/* Module Header */}
      <div className="bg-gradient-to-r from-header to-header/90 p-5 text-white">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Executive Decision Required</h3>
              <p className="text-xs text-white/60 font-mono">DEC-2024-0847</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-300">98% Confidence</span>
            </div>
          </div>
        </div>

        {/* Time to Expiry */}
        <div className="flex items-center gap-2 text-white/70">
          <Clock className="w-4 h-4" />
          <span className="text-xs">Decision window expires in:</span>
          <span className="font-mono text-sm font-semibold text-amber-300">
            {String(countdown.minutes).padStart(2, "0")}:{String(countdown.seconds).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* Impact Summary Bar */}
        <div className="bg-muted/50 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Impact Summary</span>
            <div className="flex items-center gap-1 text-emerald-600">
              <TrendingUp className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">+$1,240 Net</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-red-600 font-medium">Revenue at Risk</span>
                <span className="text-xs font-semibold text-red-600">$3,200</span>
              </div>
              <div className="h-2 bg-red-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                  style={{ width: "72%" }}
                />
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-emerald-600 font-medium">Recovered Revenue</span>
                <span className="text-xs font-semibold text-emerald-600">$4,440</span>
              </div>
              <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
                  style={{ width: "95%" }}
                />
              </div>
            </div>
          </div>
          {/* Sparkline */}
          <div className="mt-3 flex items-end gap-0.5 h-6">
            {[40, 35, 45, 50, 42, 55, 60, 58, 70, 75, 72, 80, 85, 90, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-sm opacity-80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Decision Details */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-muted/30 rounded-xl p-3">
            <span className="text-xs text-muted-foreground">Action</span>
            <p className="font-semibold text-header text-sm mt-0.5">Transfer 60 units</p>
          </div>
          <div className="bg-muted/30 rounded-xl p-3">
            <span className="text-xs text-muted-foreground">SKU</span>
            <p className="font-mono text-sm mt-0.5 text-foreground">PREM-COLA-500ML</p>
          </div>
          <div className="bg-muted/30 rounded-xl p-3 col-span-2">
            <span className="text-xs text-muted-foreground">Route</span>
            <p className="font-semibold text-header text-sm mt-0.5">DC-West  Store 402</p>
          </div>
        </div>

        {/* Calculated Logic Box */}
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4">
          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center">
              <Zap className="w-3 h-3 text-primary" />
            </div>
            Calculated Logic Engine
          </h4>
          <div className="space-y-2.5">
            <div className="flex items-start gap-3 p-2 bg-white/50 rounded-lg">
              <div className="w-6 h-6 rounded-md bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShoppingCart className="w-3.5 h-3.5 text-amber-600" />
              </div>
              <p className="text-sm text-muted-foreground">
                Store 402 has <span className="font-semibold text-header">4 days</span> of stock remaining (below threshold)
              </p>
            </div>
            <div className="flex items-start gap-3 p-2 bg-white/50 rounded-lg">
              <div className="w-6 h-6 rounded-md bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-purple-600" />
              </div>
              <p className="text-sm text-muted-foreground">
                Weekend promotion starts in <span className="font-semibold text-header">3 days</span> (expected +40% lift)
              </p>
            </div>
            <div className="flex items-start gap-3 p-2 bg-white/50 rounded-lg">
              <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Warehouse className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <p className="text-sm text-muted-foreground">
                DC-West has surplus inventory (<span className="font-semibold text-header">120 units</span> above target)
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            variant="outline"
            className="flex-1 bg-white/80 backdrop-blur-sm border-border/50 text-muted-foreground hover:bg-white hover:text-red-600 hover:border-red-200 shadow-sm"
          >
            <X className="w-4 h-4 mr-2" />
            Reject
          </Button>
          <Button className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/25">
            <Check className="w-4 h-4 mr-2" />
            Approve & Execute
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDecisionModule;
