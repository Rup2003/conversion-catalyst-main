import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How quickly can you start generating leads?",
      answer: "Most campaigns are live within 5-7 business days of signing. We move fast because we know every day without leads is revenue lost. Within the first 2 weeks, you'll typically see your first qualified leads coming through.",
    },
    {
      question: "What kind of results can I expect?",
      answer: "Our clients typically see a 250-400% increase in qualified leads within the first 90 days. For landing pages, we consistently achieve 2-5x higher conversion rates compared to industry averages. We focus on ROI, not vanity metrics.",
    },
    {
      question: "How much should I budget for ad spend?",
      answer: "We recommend a minimum of $3,000/month in ad spend to see meaningful results, though $5,000-10,000/month allows for faster optimization and scaling. We'll help you determine the right budget based on your goals and market.",
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No long-term contracts. We work on a month-to-month basis for our SMMA services. We believe in earning your business every month through results, not locking you into contracts. Landing page projects are one-time fees.",
    },
    {
      question: "What makes DevLaunch different from other agencies?",
      answer: "We're not a generalist agency. We specialize in lead generation and conversion optimization for B2B and high-ticket B2C businesses. Every strategy we deploy is battle-tested from 8-figure campaigns. Plus, you get direct access to senior strategists, not account managers reading from scripts.",
    },
    {
      question: "How do you measure and report results?",
      answer: "You'll receive weekly performance reports with clear metrics: cost per lead, conversion rates, ROAS, and pipeline value. We set up comprehensive tracking so you can see exactly how your investment translates to revenue.",
    },
  ];

  return (
    <section id="faq" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Questions?
            <span className="gradient-text"> Answered.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know before we start growing your business together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card px-6 border-none data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;