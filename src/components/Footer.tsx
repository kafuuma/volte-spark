const Footer = () => {
  return (
    <footer className="bg-airtel-dark border-t border-primary-foreground/5 py-10">
      <div className="container text-center">
        <p className="text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Airtel Uganda. All rights reserved. VoLTE is available in select coverage areas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
