import { motion } from "framer-motion";
import { Rocket, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const footerLinks = [
    {
      title: "Services",
      links: ["Lead Generation", "Paid Advertising", "Landing Pages", "Web Development"],
    },
    {
      title: "Company",
      links: ["About Us", "Case Studies", "Blog", "Careers"],
    },
    {
      title: "Support",
      links: ["Contact", "FAQ", "Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <footer className="relative pt-20 pb-8 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="p-2 rounded-xl bg-primary/10">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display text-2xl font-bold">DevLaunch</span>
            </motion.div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              We help ambitious businesses generate predictable leads and revenue through 
              strategic paid media and conversion-optimized web experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="p-3 rounded-xl bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-display font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevLaunch. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with precision. Designed for conversion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;