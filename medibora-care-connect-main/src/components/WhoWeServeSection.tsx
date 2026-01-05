import { Baby, Heart, MapPin, Star, Brain, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhoWeServeSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const audiences = [
    { icon: <Baby className="w-6 h-6" />, label: "Expecting mothers" },
    { icon: <Heart className="w-6 h-6" />, label: "New mothers" },
    { icon: <MapPin className="w-6 h-6" />, label: "Rural or underserved women" },
    { icon: <Star className="w-6 h-6" />, label: "First-time moms" },
    { icon: <Brain className="w-6 h-6" />, label: "Mothers facing emotional or mental health struggles" },
    { icon: <Building2 className="w-6 h-6" />, label: "Healthcare programs & NGOs supporting maternal care" },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Community
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-muted-foreground">
            MediBora is designed for mothers and organizations who need accessible, compassionate care.
          </p>
        </div>

        <div ref={ref} className="flex flex-wrap justify-center gap-4">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 bg-card rounded-full px-6 py-4 shadow-soft border border-border transition-all duration-500 hover:shadow-card hover:border-primary/20 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                {audience.icon}
              </div>
              <span className="text-foreground font-medium">{audience.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
