import { Database, Users, AlertCircle, ArrowRight } from 'lucide-react';

const DataActionGapSection = () => {
  return (
    <section className="bg-muted/50 py-20 border-y border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* <h4 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-4">The Retail Reality</h4> */}
        <h2 className="text-3xl font-display text-foreground mb-12">Plug The Data Action Gap In<span className="text-primary"> Modern Retail</span></h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {/* Connector Line (Background) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/30 via-destructive/30 to-muted -translate-y-12 z-0" />
          
          {/* Step 1 */}
          <div className="relative z-10 flex-1 bg-card p-8 rounded-3xl border border-border shadow-sm">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Database size={24} />
            </div>
            <p className="font-black text-foreground text-sm uppercase mb-2">The Signals</p>
            <p className="text-xs text-muted-foreground">Billions of data points from ERP, CRM, and WMS.</p>
          </div>
          
          <ArrowRight className="hidden md:block text-border z-10" />
          
          {/* Step 2 */}
          <div className="relative z-10 flex-1 bg-card p-8 rounded-3xl border-2 border-destructive/20 shadow-xl scale-105">
            <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users size={24} />
            </div>
            <p className="font-black text-foreground text-sm uppercase mb-2">The Bottleneck</p>
            <p className="text-xs text-muted-foreground">Manual teams can only process &lt;5% of actionable signals.</p>
          </div>
          
          <ArrowRight className="hidden md:block text-border z-10" />
          
          {/* Step 3 */}
          <div className="relative z-10 flex-1 bg-muted p-8 rounded-3xl border border-border opacity-60">
            <div className="w-12 h-12 bg-muted-foreground/20 text-muted-foreground rounded-2xl flex items-center justify-center mx-auto mb-4">
              <AlertCircle size={24} />
            </div>
            <p className="font-black text-foreground text-sm uppercase mb-2">The Leakage</p>
            <p className="text-xs text-muted-foreground">Out-of-stocks, safety stock bloat, and forced markdowns.</p>
          </div>
        </div>
        
        <div className="mt-16 text-muted-foreground font-medium italic">
          "Retailers are drowning in data, but starving for execution. <span className="text-primary font-bold">Orkestra AI agents</span> automate the data to execution gap."
        </div>
      </div>
    </section>
  );
};

export default DataActionGapSection;
