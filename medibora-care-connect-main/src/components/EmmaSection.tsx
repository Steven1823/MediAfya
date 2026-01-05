import { Phone, MessageCircle, Clock, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EmmaSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const capabilities = [
    { icon: <MessageCircle className="w-5 h-5" />, text: "Guidance and health education" },
    { icon: <Heart className="w-5 h-5" />, text: "Emotional support and encouragement" },
    { icon: <Clock className="w-5 h-5" />, text: "Check-ins and appointment reminders" },
    { icon: <Phone className="w-5 h-5" />, text: "Works with any phone — no internet needed" },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                {/* Phone call UI mockup */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">EMMA</p>
                      <p className="text-sm text-muted-foreground">Your health companion</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm text-muted-foreground">Connected</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted rounded-xl p-4">
                    <p className="text-sm text-muted-foreground italic">
                      "Hello! I'm EMMA, your maternal health companion. How are you feeling today?"
                    </p>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4 ml-8">
                    <p className="text-sm text-foreground">
                      "I've been having some headaches lately..."
                    </p>
                  </div>
                  <div className="bg-muted rounded-xl p-4">
                    <p className="text-sm text-muted-foreground italic">
                      "I understand. Let me ask you a few questions to help you better, and I'll guide you on the next steps..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Offline Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet EMMA — Your Caring Voice Companion
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              EMMA is our friendly AI voice assistant who mothers can call and talk to for guidance, emotional support, check-ins, and reminders — <strong className="text-foreground">even without internet</strong>. This ensures <span className="text-primary font-semibold">no mother is left behind</span>.
            </p>

            <div className="space-y-4">
              {capabilities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmmaSection;
