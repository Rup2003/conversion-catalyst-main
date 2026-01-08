import { motion } from "framer-motion";
import { Target, TrendingUp, Zap, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Results-Obsessed",
      description: "Every campaign, every page, every dollar is optimized for ROI. We don't do vanity metrics.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Systems",
      description: "We build growth engines that scale with your business—not band-aid solutions that break under pressure.",
    },
    {
      icon: Zap,
      title: "Speed to Market",
      description: "Launch campaigns in days, not months. We move fast because your competitors won't wait.",
    },
    {
      icon: Shield,
      title: "Proven Frameworks",
      description: "Battle-tested strategies from 8-figure campaigns. No experiments on your dime.",
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Why DevLaunch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Not Another Agency.
            <br />
            <span className="gradient-text">Your Growth Partner.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't just run ads or build websites. We architect complete revenue systems 
            that turn strangers into customers and customers into advocates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card p-8 md:p-12 text-center glow-effect"
        >
          <p className="text-xl md:text-2xl text-foreground/90 font-medium leading-relaxed max-w-3xl mx-auto">
            "We've generated over <span className="text-primary font-bold">$47M</span> in revenue for our clients 
            through strategic paid media and conversion-optimized web experiences. 
            <span className="text-primary font-semibold"> Your success is our portfolio.</span>"
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutSection;