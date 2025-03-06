import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Send, Mail } from 'lucide-react';

const contactNumbers = {
  whatsapp: '+48889906053',
  telegram: 'vovachornyi',
  email: 'info@devtogether.eu'
};

const ContactCTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={ctaRef}
      className="py-20 bg-gradient-to-b from-white to-secondary/50 dark:from-black dark:to-gray-900 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/60 to-secondary/80 dark:from-gray-800/80 dark:via-gray-800/60 dark:to-gray-800/80 backdrop-blur-sm" />
          
          {/* Content */}
          <div className="relative p-8 md:p-12 z-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Get started with our AI assistants today and see the difference in customer engagement, efficiency, and insights.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/demo">
                  <Button
                    size="lg"
                    className="group w-full"
                  >
                    Try Our Demo
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
              
              {/* Quick links */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:space-x-8">
                <a 
                  href={`https://wa.me/${contactNumbers.whatsapp}`} 
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Chat with us on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href={`https://t.me/${contactNumbers.telegram}`} 
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Message us on Telegram"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Telegram
                </a>
                <a 
                  href={`mailto:${contactNumbers.email}`} 
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
