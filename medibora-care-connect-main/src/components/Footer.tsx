import mediboraLogo from "@/assets/medibora-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={mediboraLogo} 
                alt="MediBora Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">MediBora</span>
            </div>
            <p className="text-background/70 max-w-md">
              AI-enhanced maternal health support that reaches every mother,
              everywhere — online and offline.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#problem" className="hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-background transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a
                  href="mailto:contact@medibora.org"
                  className="hover:text-background transition-colors"
                >
                  contact@medibora.org
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-background/50 text-sm">
          <p>© 2026 MediBora. All rights reserved. Built with care for mothers worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
