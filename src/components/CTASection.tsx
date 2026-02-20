const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-airtel-dark">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-display font-900 text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
          Ready for the Clearest Calls
          <br />
          <span className="text-gradient-hero">You've Ever Made?</span>
        </h2>
        <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
          Join millions of Airtel Uganda customers already enjoying HD voice on VoLTE. 
          Activate today — it's free.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:*100%23"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-cta px-10 py-4 text-lg font-display font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-elevated animate-pulse-glow"
          >
            Dial *100# to Activate
          </a>
          <a
            href="https://www.airtel.co.ug"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/20 px-10 py-4 text-lg font-display font-semibold text-primary-foreground/80 transition-all hover:bg-primary-foreground/10"
          >
            Visit airtel.co.ug
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
