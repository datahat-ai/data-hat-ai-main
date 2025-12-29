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
          <p className="text-3xl md:text-4xl lg:text-5xl font-display text-header leading-tight">
            Built by <span className="text-primary">retail industry</span> veterans.
          </p>
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="w-12 h-px bg-border" />
            <span className="text-muted-foreground font-display text-sm tracking-tight">DataHat AI</span>
            <div className="w-12 h-px bg-border" />
          </div>
        </div>
      </div>

      {/* Connector line bottom */}
      <div className="absolute left-1/2 bottom-0 w-0.5 h-20 border-l-2 border-dashed border-border" />
    </section>
  );
};

export default FounderSection;
