import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "SMMA & Lead Generation",
      price: "999-1999",
      period: "/month",
      description: "Full-service paid advertising and lead generation to fill your pipeline with qualified prospects.",
      features: [
        "Meta, Google & LinkedIn Ads Management",
        "Custom Audience Building & Retargeting",
        "Lead Funnel Development",
        "Email Marketing Automation",
        "Weekly Performance Reports",
        "Dedicated Account Manager",
        "A/B Testing & Optimization",
        "CRM Integration Setup",
      ],
      popular: false,
      cta: "Start Growing",
      roi: "Average 4.2x ROAS",
    },
    {
      name: "Web & Landing Pages",
      price: "799-1499",
      period: " one-time",
      description: "Conversion-optimized landing pages and websites that turn your traffic into customers.",
      features: [
        "Custom Landing Page Design",
        "Conversion-Focused Copywriting",
        "Mobile-First Development",
        "SEO Foundation Setup",
        "Speed & Performance Optimization",
        "Analytics & Tracking Setup",
        "1 Month of Post-Launch Support",
        "Unlimited Revisions",
      ],
      popular: true,
      cta: "Build Your Page",
      roi: "2-5x higher conversion rates",
    },
  ];

  return (
    <section id="pricing" className="section-padding relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Invest in Growth,
            <span className="gradient-text"> Not Expenses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Every dollar you spend is engineered to generate ROI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`glass-card p-8 relative ${plan.popular ? 'border-primary/50 glow-effect' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="font-display text-5xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* ROI Badge */}
              <div className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {plan.roi}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                className={`w-full group ${plan.popular ? 'glow-button' : ''}`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground mt-8"
        >
          Need a custom solution? <a href="#contact" className="text-primary hover:underline font-medium">Let's talk</a>
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;