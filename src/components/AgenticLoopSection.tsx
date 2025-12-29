const steps = [
  {
    id: 1,
    title: "Ingest Data",
    description: "Real-time feeds from POS, ERP, and suppliers",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    position: "top",
  },
  {
    id: 2,
    title: "Reasoning Engine",
    description: "AI analyzes patterns and predicts outcomes",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
        <path d="M12 2a10 10 0 0 1 10 10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    position: "right",
  },
  {
    id: 3,
    title: "Autonomous Execution",
    description: "Actions taken automatically within guardrails",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    position: "bottom",
  },
  {
    id: 4,
    title: "Human-in-the-Loop",
    description: "Approval workflows for high-impact decisions",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    position: "left",
  },
];

const AgenticLoopSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="gradient-text">Agentic Loop</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A continuous cycle of intelligence that never sleeps, learns from every decision, 
            and keeps humans in control.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Central circle with rotating glow */}
          <div className="relative w-80 h-80 mx-auto">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/10 animate-spin-slow" />
            
            {/* Glowing ring */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 animate-pulse-glow" />
            
            {/* Inner circle */}
            <div className="absolute inset-8 rounded-full glass-card flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-foreground">Agent Core</p>
                <p className="text-xs text-muted-foreground">Always Learning</p>
              </div>
            </div>
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
                  <stop offset="100%" stopColor="hsl(188, 94%, 53%)" />
                </linearGradient>
              </defs>
              {/* Curved paths connecting steps */}
              <path 
                d="M 160 40 Q 280 80 280 160" 
                fill="none" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                strokeDasharray="8 4"
                className="animate-pulse-glow"
              />
              <path 
                d="M 280 160 Q 280 240 160 280" 
                fill="none" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                strokeDasharray="8 4"
                className="animate-pulse-glow"
                style={{ animationDelay: "0.5s" }}
              />
              <path 
                d="M 160 280 Q 40 240 40 160" 
                fill="none" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                strokeDasharray="8 4"
                className="animate-pulse-glow"
                style={{ animationDelay: "1s" }}
              />
              <path 
                d="M 40 160 Q 40 80 160 40" 
                fill="none" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                strokeDasharray="8 4"
                className="animate-pulse-glow"
                style={{ animationDelay: "1.5s" }}
              />
            </svg>
          </div>
          
          {/* Step cards positioned around the circle */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8">
            <StepCard step={steps[0]} />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8">
            <StepCard step={steps[1]} />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8">
            <StepCard step={steps[2]} />
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8">
            <StepCard step={steps[3]} />
          </div>
        </div>
        
        {/* Mobile-friendly list view */}
        <div className="lg:hidden mt-16 grid sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="glass-card p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground">
                  {step.icon}
                </div>
                <span className="text-2xl font-bold text-primary/50">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step }: { step: typeof steps[0] }) => {
  return (
    <div className="hidden lg:block glass-card-hover p-4 w-48 text-center group">
      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-secondary group-hover:text-primary-foreground transition-all duration-300">
        {step.icon}
      </div>
      <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
      <p className="text-xs text-muted-foreground">{step.description}</p>
    </div>
  );
};

export default AgenticLoopSection;