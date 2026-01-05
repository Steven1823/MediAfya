import { UserPlus, BookOpen, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const steps = [
    {
      number: "01",
      icon: <UserPlus className="w-8 h-8" />,
      title: "Enroll",
      description: "Mothers enroll through the app, SMS, USSD, clinic partner, or a health worker.",
    },
    {
      number: "02",
      icon: <BookOpen className="w-8 h-8" />,
      title: "Support & Education",
      description: "MediBora provides education, reminders, emotional support, and health tracking.",
    },
    {
      number: "03",
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Early Detection",
      description: "EMMA and the platform help detect concerns early and guide the mother to the right care channels.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-secondary/15 text-secondary rounded-full text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How MediBora Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to comprehensive maternal care support.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border text-center relative z-10 h-full">
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
