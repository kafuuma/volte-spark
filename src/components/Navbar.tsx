import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-airtel-dark/80 backdrop-blur-lg border-b border-primary-foreground/5">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-cta flex items-center justify-center">
            <Phone className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display font-800 text-primary-foreground text-xl">
            airtel<span className="text-primary">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary-foreground/70">
          <a href="#benefits" className="transition-colors hover:text-primary-foreground">Benefits</a>
          <a href="#activate" className="transition-colors hover:text-primary-foreground">Activate</a>
          <a
            href="tel:*100%23"
            className="rounded-lg bg-primary px-5 py-2 text-primary-foreground font-display font-bold transition-all hover:bg-accent"
          >
            Dial *100#
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
