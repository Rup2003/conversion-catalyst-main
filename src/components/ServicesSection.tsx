import { motion } from "framer-motion";
import { 
  Megaphone, 
  Globe, 
  BarChart3, 
  Mail, 
  Users, 
  Rocket,
  Code2,
  Layout,
  Search,
  Gauge,
  ArrowRight
} from "lucide-react";
import { Button } from "./ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "SMMA & Lead Generation",
      subtitle: "Fill your pipeline with qualified prospects",
      description: "Stop wasting budget on unqualified traffic. Our precision-targeted campaigns bring you decision-makers ready to buy—not just browsers.",
      icon: Megaphone,
      features: [
        { icon: BarChart3, text: "Meta, Google & LinkedIn Ads" },
        { icon: Mail, text: "Email Marketing & Automation" },
        { icon: Users, text: "Lead Funnels & CRM Setup" },
        { icon: Rocket, text: "Conversion Rate Optimization" },
      ],
      cta: "Start Generating Leads",
      highlight: "Average 300% increase in qualified leads",
    },
    {
      title: "Landing Pages & Web Dev",
      subtitle: "Convert every click into a customer",
      description: "Beautiful doesn't mean effective. Our pages are engineered for one thing: turning your hard-won traffic into paying customers.",
      icon: Globe,
      features: [
        { icon: Layout, text: "High-Converting Landing Pages" },
        { icon: Code2, text: "Custom Web Development" },
        { icon: Search, text: "SEO-Optimized Architecture" },
        { icon: Gauge, text: "Lightning-Fast Performance" },
      ],
      cta: "Build Your Sales Machine",
      highlight: "Pages that convert 2-5x industry average",
    },
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Two Ways to
            <span className="gradient-text"> 10X Your Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you need more leads or better conversions, we have the systems to scale your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 md:p-10 relative group overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary" />
              
              {/* Icon */}
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6">
                <service.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">{service.title}</h3>
              <p className="text-primary font-medium mb-4">{service.subtitle}</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Badge */}
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {service.highlight}
              </div>

              {/* CTA */}
              <div>
                <Button className="w-full sm:w-auto group/btn glow-button">
                  {service.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;