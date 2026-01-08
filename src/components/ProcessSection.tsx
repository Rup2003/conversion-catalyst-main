import { motion } from "framer-motion";
import { Search, Settings, Rocket, TrendingUp } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Strategy & Research",
      description: "Deep-dive into your market, competitors, and ideal customer profile. We identify the fastest path to qualified leads.",
    },
    {
      number: "02",
      icon: Settings,
      title: "Funnel & Offer Setup",
      description: "Build high-converting landing pages and irresistible offers designed to capture and nurture leads automatically.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Traffic & Lead Generation",
      description: "Launch precision-targeted campaigns across Meta, Google, and LinkedIn to drive qualified traffic to your funnels.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Optimization & Scaling",
      description: "Continuous A/B testing, audience refinement, and budget scaling to maximize ROI and compound your growth.",
    },
  ];

  return (
    <section id="process" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            From Zero to
            <span className="gradient-text"> Predictable Pipeline</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven 4-step system that transforms your marketing from guesswork into a scalable growth engine.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass-card p-6 h-full relative group hover:border-primary/50 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 font-display text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10 inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6 mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <step.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;