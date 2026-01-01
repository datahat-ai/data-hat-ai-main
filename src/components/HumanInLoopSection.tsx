import ExecutiveDecisionModule from "@/components/ExecutiveDecisionModule";
import { CheckCircle2, ShieldAlert } from "lucide-react";

const HumanInLoopSection = () => {
  return (
    <section id="human-in-the-loop" className="bg-card py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono font-medium text-sm uppercase tracking-wider">Responsible AI</span>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mt-4">
            Human in the Loop
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - The Copy */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display text-foreground">
              Orkestra AI Agent keeps you in <span className="text-primary">command.</span>
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every autonomous decision is routed through your executive guardrails. Full transparency, complete control.
            </p>

            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Explainable Logic</p>
                  <p className="text-sm text-muted-foreground">
                    Every agent action includes the reasoning behind the decision.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <ShieldAlert className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Configurable Thresholds</p>
                  <p className="text-sm text-muted-foreground">
                    Set dollar amounts or risk scores that trigger approval workflows.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column - The Module */}
          <div className="flex items-center justify-center">
            <ExecutiveDecisionModule />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanInLoopSection;
