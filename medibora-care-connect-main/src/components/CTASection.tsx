import { CubeLink } from "@/components/ui/cube-button";
import { Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section id="join" className="section-padding bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div ref={ref} className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Join MediBora Today
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join MediBora and help us protect, support, and empower mothers — <span className="text-primary font-semibold">one life at a time</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CubeLink href="https://medibora.vercel.app/#/" variant="primary" className="inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              Join Now
            </CubeLink>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Healthcare workers, organizations, and advocates welcome.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
