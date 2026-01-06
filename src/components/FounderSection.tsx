const FounderSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-card">
      {/* Connector line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <div className="connector-dot" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-primary font-mono font-medium text-sm uppercase tracking-wider">Our Heritage</span>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-display text-header leading-tight">
              "At Data-Hat AI, we're not just building AI agents; we're architecting the future of autonomous enterprise operations. Our mission is to bridge the gap between data and action."
            </blockquote>
            <div className="font-semibold text-foreground">Kshitij Kumar</div>
            <div className="text-sm text-muted-foreground">Founder & CEO, Data-Hat AI</div>
            <div className="text-xs text-primary mt-1">Top 100 Chief Data Officers (2022)</div>
          </div>
      </div>

      {/* Connector line bottom */}
      <div className="absolute left-1/2 bottom-0 w-0.5 h-20 border-l-2 border-dashed border-border" />
    </section>
  );
};

export default FounderSection;
