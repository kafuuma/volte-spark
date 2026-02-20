import { Phone, Zap, Wifi, Shield } from "lucide-react";

const benefits = [
  {
    icon: Phone,
    title: "HD Voice Quality",
    description:
      "Enjoy crystal clear conversations with high-definition audio that makes every word crisp and natural.",
  },
  {
    icon: Zap,
    title: "Faster Call Setup",
    description:
      "Connect in under 2 seconds — up to 3x faster than traditional calls. No more waiting for the ring.",
  },
  {
    icon: Wifi,
    title: "Talk & Browse",
    description:
      "Use 4G data while on a call. Stream, browse, and download without dropping your conversation.",
  },
  {
    icon: Shield,
    title: "No Extra Cost",
    description:
      "VoLTE calls use your existing Airtel voice bundle. Same rate, dramatically better quality.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-800 text-foreground mb-4">
            Why <span className="text-primary">VoLTE</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Airtel Uganda brings you the next generation of voice calling — powered by 4G LTE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative rounded-xl bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-display font-700 text-card-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
