import motherBabyImage from "@/assets/mother-baby.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VisionSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={motherBabyImage}
                  alt="Mother holding her healthy newborn baby"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary/10" />
            </div>
          </div>

          {/* Content */}
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <span className="inline-block px-4 py-1.5 bg-secondary/15 text-secondary rounded-full text-sm font-medium mb-4">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Future of Equal Care
            </h2>
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed border-l-4 border-primary pl-6 my-8">
              "MediBora envisions a world where every mother — regardless of income, location, or connectivity — receives the care, emotional support, and early-risk awareness she deserves."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              We believe that geography and circumstances should never determine a mother's chance of having a safe pregnancy. Through accessible technology and compassionate AI support, we're bridging the gap between underserved communities and quality maternal healthcare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
