import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { 
  Heart, 
  Users, 
  TrendingDown,
  TrendingUp,
  Activity,
  Smile,
  Wifi,
  WifiOff,
  Globe
} from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import impactHeroImage from "@/assets/impact-hero.jpg";
import communityHealthWorker from "@/assets/community-health-worker.jpg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Animated counter component
const AnimatedCounter = ({ 
  end, 
  suffix = "", 
  prefix = "",
  isVisible 
}: { 
  end: number; 
  suffix?: string; 
  prefix?: string;
  isVisible: boolean;
}) => {
  const count = useCountUp(end, 2500, 0, isVisible);
  return (
    <span className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Impact metric card component
const ImpactMetricCard = ({
  icon: Icon,
  value,
  suffix,
  prefix,
  label,
  description,
  isVisible,
  delay
}: {
  icon: React.ElementType;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  isVisible: boolean;
  delay: number;
}) => (
  <div 
    className={`group bg-card/90 backdrop-blur-sm border border-border/40 rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="flex-1">
        <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
          <AnimatedCounter end={value} suffix={suffix} prefix={prefix} isVisible={isVisible} />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{label}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const ImpactSection = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation(0.1);
  const { ref: chartsRef, isVisible: chartsVisible } = useScrollAnimation(0.1);
  const { ref: offlineRef, isVisible: offlineVisible } = useScrollAnimation(0.2);
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation(0.2);
  
  const [chartsAnimated, setChartsAnimated] = useState(false);

  useEffect(() => {
    if (chartsVisible && !chartsAnimated) {
      setChartsAnimated(true);
    }
  }, [chartsVisible, chartsAnimated]);

  // Line chart - Preventable emergencies reduction
  const lineChartData = {
    labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [
      {
        label: 'Reduction (%)',
        data: chartsAnimated ? [5, 12, 20, 28, 35, 40] : [0, 0, 0, 0, 0, 0],
        borderColor: 'hsl(152, 44%, 49%)',
        backgroundColor: 'hsla(152, 44%, 49%, 0.08)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'hsl(152, 44%, 49%)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8
      }
    ]
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeOutQuart' as const
    },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Projected Reduction in Preventable Emergencies',
        font: { size: 14, weight: 'bold' as const },
        color: 'hsl(152, 44%, 35%)',
        padding: { bottom: 20 }
      },
      tooltip: {
        backgroundColor: 'hsl(0, 0%, 100%)',
        titleColor: 'hsl(0, 0%, 18%)',
        bodyColor: 'hsl(0, 0%, 45%)',
        borderColor: 'hsl(152, 44%, 49%)',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 50,
        ticks: {
          callback: (value: number | string) => value + '%',
          color: 'hsl(0, 0%, 45%)'
        },
        grid: { color: 'hsla(0, 0%, 0%, 0.05)' }
      },
      x: {
        grid: { display: false },
        ticks: { color: 'hsl(0, 0%, 45%)' }
      }
    }
  };

  // Bar chart - User adoption growth
  const barChartData = {
    labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [
      {
        label: 'People Reached (Millions)',
        data: chartsAnimated ? [1.5, 2.8, 4.5, 6.5, 8.5, 10.5] : [0, 0, 0, 0, 0, 0],
        backgroundColor: [
          'hsla(180, 60%, 45%, 0.7)',
          'hsla(180, 60%, 45%, 0.75)',
          'hsla(180, 60%, 45%, 0.8)',
          'hsla(180, 60%, 45%, 0.85)',
          'hsla(180, 60%, 45%, 0.9)',
          'hsla(180, 60%, 45%, 1)'
        ],
        borderRadius: 8,
        borderSkipped: false
      }
    ]
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeOutQuart' as const
    },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'MediBora Adoption Growth — People Reached',
        font: { size: 14, weight: 'bold' as const },
        color: 'hsl(180, 60%, 35%)',
        padding: { bottom: 20 }
      },
      tooltip: {
        backgroundColor: 'hsl(0, 0%, 100%)',
        titleColor: 'hsl(0, 0%, 18%)',
        bodyColor: 'hsl(0, 0%, 45%)',
        borderColor: 'hsl(180, 60%, 45%)',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        callbacks: {
          label: (context: { parsed: { y: number } }) => `${context.parsed.y}M people`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 12,
        ticks: {
          callback: (value: number | string) => value + 'M',
          color: 'hsl(0, 0%, 45%)'
        },
        grid: { color: 'hsla(0, 0%, 0%, 0.05)' }
      },
      x: {
        grid: { display: false },
        ticks: { color: 'hsl(0, 0%, 45%)' }
      }
    }
  };

  // Doughnut chart - Early detection
  const doughnutChartData = {
    labels: ['Early Detection', 'Standard Detection'],
    datasets: [
      {
        data: chartsAnimated ? [70, 30] : [0, 100],
        backgroundColor: [
          'hsl(152, 44%, 49%)',
          'hsla(0, 0%, 90%, 0.6)'
        ],
        borderWidth: 0,
        cutout: '70%'
      }
    ]
  };

  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeOutQuart' as const
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 16,
          usePointStyle: true,
          pointStyle: 'circle' as const,
          color: 'hsl(0, 0%, 45%)'
        }
      },
      title: {
        display: true,
        text: 'Earlier Detection & Awareness Among Users',
        font: { size: 14, weight: 'bold' as const },
        color: 'hsl(152, 44%, 35%)',
        padding: { bottom: 20 }
      }
    }
  };

  return (
    <section id="impact" className="relative overflow-hidden">
      {/* Section 1 - Headline + Mission with Hero */}
      <div className="bg-gradient-to-b from-muted/50 to-background">
        <div 
          ref={heroRef}
          className={`section-container section-padding transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              MediBora — Our Impact by 2030
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
              By 2030, MediBora Will Help Millions<br className="hidden md:block" /> Access Early Health Detection
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              MediBora is a low-cost digital health platform providing continuous health monitoring and early detection — 
              especially for people in underserved and rural communities. Our vision is that no one should lose their life 
              because healthcare was too far, too expensive, or too late.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-card max-w-5xl mx-auto">
            <img 
              src={impactHeroImage} 
              alt="Community healthcare workers helping families at a rural clinic" 
              className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <p className="text-sm md:text-base opacity-90 max-w-xl">
                Healthcare powered by compassion and technology — reaching communities that need it most.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Animated Impact Metrics */}
      <div className="bg-background py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Projected Impact
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real numbers, real change — our commitment to transforming healthcare access.
            </p>
          </div>

          <div 
            ref={metricsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <ImpactMetricCard
              icon={Users}
              value={10000000}
              suffix="+"
              label="People Reached"
              description="Underserved people gaining access to affordable health monitoring by 2030."
              isVisible={metricsVisible}
              delay={0}
            />
            <ImpactMetricCard
              icon={TrendingDown}
              value={40}
              suffix="%" 
              prefix="Up to "
              label="Reduction in Emergencies"
              description="Fewer preventable health emergencies through earlier detection and alerts."
              isVisible={metricsVisible}
              delay={100}
            />
            <ImpactMetricCard
              icon={Activity}
              value={70}
              suffix="%"
              label="Early Detection"
              description="MediBora users identifying potential risks earlier and seeking treatment sooner."
              isVisible={metricsVisible}
              delay={200}
            />
            <ImpactMetricCard
              icon={Smile}
              value={80}
              suffix="%+"
              label="User Satisfaction"
              description="Users reporting peace of mind and better health awareness."
              isVisible={metricsVisible}
              delay={300}
            />
          </div>
        </div>
      </div>

      {/* Section 3 - Animated Graphs */}
      <div className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Data-Driven Progress
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tracking our journey toward accessible healthcare for all.
            </p>
          </div>

          <div 
            ref={chartsRef}
            className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-700 ${chartsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Line Chart */}
            <div className="bg-card/90 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Emergency Reduction</span>
              </div>
              <div className="h-64">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Projected ~40% reduction by 2030
              </p>
            </div>

            {/* Bar Chart */}
            <div className="bg-card/90 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-teal" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">User Growth</span>
              </div>
              <div className="h-64">
                <Bar data={barChartData} options={barChartOptions} />
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Growing to 10M+ users by 2030
              </p>
            </div>

            {/* Doughnut Chart */}
            <div className="bg-card/90 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Early Detection</span>
              </div>
              <div className="h-64 flex items-center justify-center">
                <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
              </div>
              <div className="text-center mt-4">
                <span className="text-3xl font-bold text-primary">70%</span>
                <p className="text-xs text-muted-foreground">detect risks earlier</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 - Offline + Human Support */}
      <div className="bg-muted/30 py-16 md:py-24">
        <div className="section-container">
          <div 
            ref={offlineRef}
            className={`max-w-4xl mx-auto transition-all duration-700 ${offlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="bg-card border border-border/40 rounded-3xl overflow-hidden shadow-card">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <WifiOff className="w-5 h-5 text-primary" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center -ml-3">
                        <Wifi className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-primary">Works Everywhere</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Offline + Human Support
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    MediBora also works offline through trained community health agents, 
                    ensuring continuous support even without smartphones or internet access. 
                    Our network of local healthcare workers bridges the digital divide, 
                    bringing health monitoring to every corner of the community.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">USSD Support</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">SMS Alerts</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Voice Calls</span>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={communityHealthWorker} 
                    alt="Community health worker providing support in a rural village" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent md:from-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 - Vision Statement */}
      <div className="bg-gradient-to-b from-muted/30 to-background py-16 md:py-24">
        <div className="section-container">
          <div 
            ref={visionRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${visionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-teal/5 rounded-3xl p-8 md:p-12 border border-primary/10 shadow-soft">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-teal mx-auto mb-6 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-6 text-balance">
                "By 2030, MediBora aims to close the gap between healthcare and the people who need it most — 
                starting with underserved communities across Africa and beyond."
              </blockquote>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Heart className="w-5 h-5 text-coral" />
                <span className="text-sm">Healthcare powered by compassion + technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
