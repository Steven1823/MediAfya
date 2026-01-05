import { CubeLink, CubeButton } from "@/components/ui/cube-button";
import heroImage from "@/assets/hero-maternal-care.jpg";
import { Heart, Phone, Shield } from "lucide-react";

const HeroSection = () => {
  const scrollToLearnMore = () => {
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                Compassionate Care for Every Mother
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.15] text-balance">
                MediBora — <span className="text-primary">Compassionate AI-Supported</span> Maternal Care for Every Mother
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Early support, mental and emotional care, and continuous monitoring — even for mothers without smartphones.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <CubeLink href="#join" variant="primary">
                Join MediBora
              </CubeLink>
              <CubeButton variant="outline" onClick={scrollToLearnMore}>
                Learn More
              </CubeButton>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm">Works offline</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Trusted by health workers</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Healthcare worker providing prenatal care to expectant mother"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card rounded-xl p-4 shadow-card border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">24/7 Support</p>
                  <p className="text-sm text-muted-foreground">Phone, SMS & USSD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
