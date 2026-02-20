import heroImage from "@/assets/hero-volte.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Person making a crystal clear VoLTE call"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-airtel-dark/90 via-airtel-dark/70 to-transparent" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            Now Available in Uganda
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-900 leading-[1.05] text-primary-foreground">
            Crystal Clear
            <br />
            <span className="text-gradient-hero">Voice Calls</span>
            <br />
            with VoLTE
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg font-body leading-relaxed">
            Experience HD voice quality over Airtel's 4G LTE network. Faster call connections, 
            better clarity, and simultaneous voice & data — at no extra cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#activate"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-cta px-8 py-4 text-lg font-display font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-elevated"
            >
              Activate VoLTE Now
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm px-8 py-4 text-lg font-display font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
