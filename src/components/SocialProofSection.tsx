const logos = [
  "Walmart", "Target", "Kroger", "Costco", "Albertsons",
  "Publix", "Ahold", "Lidl", "Aldi", "Carrefour",
  "Tesco", "Metro", "Sainsbury's", "Morrisons", "REWE"
];

const SocialProofSection = () => {
  return (
    <section className="py-16 border-y border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm uppercase tracking-wider text-muted-foreground">
          Trusted by leading retailers worldwide
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling logos */}
        <div className="flex animate-scroll-logos">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <span className="text-xl font-semibold text-foreground/30 whitespace-nowrap hover:text-foreground/50 transition-colors">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;