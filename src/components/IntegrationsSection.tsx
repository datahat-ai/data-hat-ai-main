const integrations = [
  { name: "SAP", logo: "SAP" },
  { name: "Oracle", logo: "Oracle" },
  { name: "NetSuite", logo: "NetSuite" },
  { name: "Microsoft Dynamics", logo: "Dynamics" },
  { name: "Salesforce", logo: "Salesforce" },
  { name: "Snowflake", logo: "Snowflake" },
];

const IntegrationsSection = () => {
  return (
    <section className="relative py-16">
      {/* Connector line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <div className="connector-dot" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span className="text-muted-foreground text-sm font-medium">
            Seamless integration with your existing stack
          </span>
        </div>

        {/* Logo Cloud */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center justify-center px-6 py-4 rounded-xl bg-muted/50 opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="text-lg font-semibold text-muted-foreground tracking-wide">
                {integration.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
