import { Brain, Heart, Activity, BookOpen, Phone, Watch, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhatIsMediboraSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Support",
      description: "Health reminders and personalized guidance",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Mental Wellness Companion",
      description: "Emotional support for mothers throughout their journey",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Continuous Check-ins",
      description: "Regular symptom monitoring and health tracking",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Education & Guidance",
      description: "Clear information in simple language",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Offline Support via EMMA",
      description: "AI voice assistant accessible by phone call",
    },
    {
      icon: <Watch className="w-6 h-6" />,
      title: "Optional Wearable",
      description: "Low-cost monitoring devices available",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Focused",
      description: "Supporting rural, low-income, and underserved communities",
    },
  ];

  return (
    <section id="what-is-medibora" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What is MediBora?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            MediBora is a <strong className="text-foreground">hybrid maternal health support platform</strong> designed to make early-stage pregnancy care, mental health support, and risk awareness accessible — whether or not a mother has a smartphone or internet access.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-card transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsMediboraSection;
