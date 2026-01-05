import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { AlertTriangle, MapPin, Heart, Activity, DollarSign, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const ProblemSection = () => {
  const { ref: chartRef, isVisible: chartVisible } = useScrollAnimation(0.3);
  const [animatedData, setAnimatedData] = useState({
    pie: [0, 0, 0, 0],
    bar: [0, 0, 0, 0, 0, 0],
  });

  const challenges = [
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      text: "High miscarriage and maternal complication rates",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Limited access to healthcare, especially in low-resource settings",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      text: "Emotional and mental health struggles during pregnancy and postpartum",
    },
    {
      icon: <Activity className="w-5 h-5" />,
      text: "Lack of continuous monitoring and follow-up",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      text: "Barriers like cost, distance, stigma, and limited awareness",
    },
  ];

  // Animate chart data when visible
  useEffect(() => {
    if (chartVisible) {
      const duration = 1500;
      const steps = 60;
      const interval = duration / steps;
      
      const targetPie = [75, 15, 5, 5];
      const targetBar = [182, 40, 15, 8, 5, 1];
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        
        setAnimatedData({
          pie: targetPie.map(v => Math.round(v * eased)),
          bar: targetBar.map(v => Math.round(v * eased)),
        });
        
        if (step >= steps) {
          clearInterval(timer);
          setAnimatedData({ pie: targetPie, bar: targetBar });
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [chartVisible]);

  const pieData = {
    labels: ["Healthy Births", "Miscarriages", "Stillbirths", "Complications"],
    datasets: [
      {
        data: animatedData.pie,
        backgroundColor: [
          "hsl(152, 44%, 49%)",
          "hsl(14, 89%, 70%)",
          "hsl(0, 0%, 75%)",
          "hsl(40, 80%, 60%)",
        ],
        borderColor: "hsl(0, 0%, 100%)",
        borderWidth: 3,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 16,
          usePointStyle: true,
          font: { family: "Inter", size: 12 },
        },
      },
      title: {
        display: true,
        text: "Global Pregnancy Outcomes (%)",
        font: { family: "Inter", size: 15, weight: "bold" as const },
        padding: { bottom: 16 },
      },
    },
  };

  const barData = {
    labels: ["Sub-Saharan Africa", "South Asia", "SE Asia", "Latin America", "Middle East", "Europe"],
    datasets: [
      {
        label: "Deaths (thousands)",
        data: animatedData.bar,
        backgroundColor: "hsl(152, 44%, 49%)",
        borderRadius: 6,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Maternal Deaths by Region (thousands/year)",
        font: { family: "Inter", size: 15, weight: "bold" as const },
        padding: { bottom: 16 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "hsl(0, 0%, 92%)" },
        ticks: { font: { family: "Inter" } },
      },
      x: {
        grid: { display: false },
        ticks: { font: { family: "Inter", size: 10 }, maxRotation: 45, minRotation: 45 },
      },
    },
  };

  return (
    <section id="problem" className="section-padding bg-muted">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-secondary/15 text-secondary rounded-full text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Maternal Health Matters
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every year, millions of mothers globally face challenges that are often preventable with proper care and support.
          </p>
        </div>

        {/* Challenges list */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border mb-12">
          <div className="grid md:grid-cols-2 gap-4">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                  {challenge.icon}
                </div>
                <p className="text-foreground pt-2">{challenge.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Sub-Saharan Africa</strong> carries one of the highest maternal risk burdens globally, making innovation <span className="text-primary font-semibold">life-saving</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Research Video */}
        <div className="mb-12">
          <div className="bg-card rounded-2xl p-4 md:p-6 shadow-soft border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Our Research Insights</h3>
            <div className="relative rounded-xl overflow-hidden aspect-video max-w-4xl mx-auto">
              <video 
                controls 
                className="w-full h-full object-cover"
              >
                <source src="/videos/research-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Charts with scroll animation */}
        <div ref={chartRef} className="grid lg:grid-cols-2 gap-8">
          <div className={`bg-card rounded-xl p-6 shadow-soft border border-border transition-all duration-700 ${chartVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-xs mx-auto">
              <Pie data={pieData} options={pieOptions} />
            </div>
          </div>

          <div className={`bg-card rounded-xl p-6 shadow-soft border border-border transition-all duration-700 delay-200 ${chartVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Data based on World Health Organization (WHO) maternal health reports
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
