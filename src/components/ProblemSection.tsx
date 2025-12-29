import { useEffect, useState } from "react";

const problems = [
  {
    percentage: "20%",
    label: "Revenue lost to out-of-stocks",
    color: "primary",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    percentage: "30%",
    label: "Capital trapped in safety stock",
    color: "secondary",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    percentage: "50%",
    label: "Man-hours spent on spreadsheets",
    color: "primary",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const AnimatedCounter = ({ target }: { target: string }) => {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = numericTarget / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [numericTarget]);
  
  return <span>{count}%</span>;
};

const ProblemSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="gradient-text">Hidden Cost</span> of Manual Operations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every day your team spends in spreadsheets is a day your competitors gain ground.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass-card-hover p-8 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                problem.color === "primary" 
                  ? "bg-primary/20 text-primary" 
                  : "bg-secondary/20 text-secondary"
              } group-hover:scale-110 transition-transform duration-300`}>
                {problem.icon}
              </div>
              
              <div className={`text-5xl md:text-6xl font-bold mb-4 ${
                problem.color === "primary" ? "text-primary" : "text-secondary"
              }`}>
                <AnimatedCounter target={problem.percentage} />
              </div>
              
              <p className="text-muted-foreground text-lg">
                {problem.label}
              </p>
              
              <div className={`mt-6 h-1 w-24 mx-auto rounded-full ${
                problem.color === "primary" ? "bg-primary/30" : "bg-secondary/30"
              }`}>
                <div className={`h-full rounded-full ${
                  problem.color === "primary" ? "bg-primary" : "bg-secondary"
                }`} style={{ width: problem.percentage }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;