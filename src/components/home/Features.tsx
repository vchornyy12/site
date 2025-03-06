
import React, { useEffect, useRef } from 'react';
import { Brain, Users, LineChart, Zap, RefreshCw, Lock } from 'lucide-react';

const features = [
  {
    title: 'Advanced AI Processing',
    description: 'Powered by cutting-edge language models to understand context and intent with exceptional accuracy.',
    icon: Brain,
  },
  {
    title: 'Seamless Integration',
    description: 'Easily connects with your existing systems including CRM, support tickets, and knowledge bases.',
    icon: RefreshCw,
  },
  {
    title: 'Customer Engagement',
    description: 'Personalized interactions that build relationships and enhance customer satisfaction.',
    icon: Users,
  },
  {
    title: 'Data-Driven Insights',
    description: 'Generate valuable analytics from conversations to improve products and services.',
    icon: LineChart,
  },
  {
    title: 'Lightning Fast',
    description: 'Instant responses with minimal latency, ensuring smooth user experiences.',
    icon: Zap,
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-level encryption and privacy controls to keep your data safe and compliant.',
    icon: Lock,
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when the section is visible
            const items = sectionRef.current?.querySelectorAll('.feature-item');
            items?.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-scale-in');
              }, index * 100); // Stagger the animations
            });
            
            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Intelligent Assistants, Exceptional Results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our AI solutions are designed to transform how businesses operate and engage with customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item opacity-0 p-6 rounded-lg border border-border/50 hover:border-primary/20 bg-secondary/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
