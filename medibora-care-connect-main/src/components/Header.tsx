import { useState } from "react";
import { CubeButton, CubeLink } from "@/components/ui/cube-button";
import mediboraLogo from "@/assets/medibora-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#problem" },
    { label: "Features", href: "#what-is-medibora" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img 
              src={mediboraLogo} 
              alt="MediBora Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-foreground">MediBora</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <CubeLink
                key={link.label}
                href={link.href}
                variant="nav"
                className="px-4 py-2 text-sm"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </CubeLink>
            ))}
            <CubeLink 
              href="https://medibora.vercel.app/#/"
              variant="primary" 
              className="ml-4 px-8 py-3 text-lg font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join MediBora
            </CubeLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <CubeLink
                  key={link.label}
                  href={link.href}
                  variant="nav"
                  className="px-4 py-2 text-sm"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </CubeLink>
              ))}
              <CubeLink
                href="https://medibora.vercel.app/#/"
                variant="primary"
                className="px-6 py-3 text-base font-bold mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join MediBora
              </CubeLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
