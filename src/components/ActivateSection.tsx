import { Check } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Check Your Phone",
    description: "Ensure your smartphone supports VoLTE. Most modern 4G phones are compatible.",
  },
  {
    step: "02",
    title: "Update Settings",
    description: 'Go to Settings → Mobile Networks → Enable "VoLTE" or "Enhanced 4G LTE Mode".',
  },
  {
    step: "03",
    title: "Dial *100#",
    description: "Or send an SMS with 'VoLTE' to 100 to activate the service on your Airtel line.",
  },
];

const requirements = [
  "4G-enabled Airtel SIM card",
  "VoLTE-compatible smartphone",
  "Active Airtel Uganda line",
  "4G network coverage area",
];

const ActivateSection = () => {
  return (
    <section id="activate" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-800 text-foreground mb-4">
            Activate in <span className="text-primary">3 Easy Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started with VoLTE is simple and free.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-xl border border-border bg-card p-8 shadow-card"
            >
              <span className="text-6xl font-display font-900 text-primary/10 absolute top-4 right-6">
                {item.step}
              </span>
              <div className="relative">
                <h3 className="text-2xl font-display font-700 text-card-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="max-w-xl mx-auto rounded-2xl bg-gradient-hero p-8 text-center">
          <h3 className="text-2xl font-display font-700 text-primary-foreground mb-6">
            What You Need
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-left">
            {requirements.map((req) => (
              <div
                key={req}
                className="flex items-center gap-3 text-primary-foreground/90"
              >
                <Check className="h-5 w-5 shrink-0 text-airtel-gold" />
                <span className="font-medium">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivateSection;
