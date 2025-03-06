import React, { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, Send, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      const bg = heroRef.current.querySelector('.hero-bg') as HTMLElement;
      const content = heroRef.current.querySelector('.hero-content') as HTMLElement;
      
      if (bg && content) {
        // Subtle parallax effect
        bg.style.transform = `scale(1.05) translate(${-x * 10}px, ${-y * 10}px)`;
        content.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black min-h-[90vh] flex items-center"
    >
      {/* Background effects */}
      <div className="hero-bg absolute inset-0 transition-transform duration-[2000ms] ease-out">
        {/* Glass circles */}
        <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-br from-gray-200/20 to-gray-300/30 blur-3xl dark:from-gray-700/20 dark:to-gray-600/10" />
        <div className="absolute bottom-1/4 left-1/3 w-[25vw] h-[25vw] rounded-full bg-gradient-to-tr from-gray-200/30 to-gray-300/20 blur-3xl dark:from-gray-800/30 dark:to-gray-700/20" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02YzMuMzEgMCA2IDIuNjkgNiA2IDAgMy4zMS0yLjY5IDYtNiA2SDAgNnY2YzAgOS45NCA4LjA2IDE4IDE4IDE4IDkuOTQgMCAxOC04LjA2IDE4LTE4IDAtNC45Ny0yLjAzLTkuNDctNS4yOS0xMi43NEMzMy45NyAyNy40NyAzNiAyMi45NyAzNiAxOHoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNCIvPjwvZz48L3N2Zz4=')] opacity-30 dark:opacity-10" />
      </div>
      
      {/* Content */}
      <div className="hero-content container mx-auto px-6 py-12 md:py-24 relative z-10 transition-transform duration-1000 ease-out">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
              Next-Gen AI Assistants
            </span>
          </div>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary animate-fade-in [animation-delay:200ms]">
            Revolutionize Your Business With Advanced AI
          </h1>
          
          <p className="mt-6 text-xl text-muted-foreground mx-auto max-w-2xl animate-fade-in [animation-delay:400ms]">
            Custom AI assistants that transform how you engage with customers, streamline operations, and drive growth.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in [animation-delay:600ms]">
            <Link to="/demo">
              <Button
                size="lg"
                className="group w-full"
              >
                Try Our Demo
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="w-full"
              >
                Explore Solutions
              </Button>
            </Link>
          </div>

          {/* Quick contact links */}
          <div className="mt-16 flex justify-center space-x-6 animate-fade-in [animation-delay:800ms]">
            <a href="https://wa.me/48889906053" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
            <a href="https://t.me/vovachornyi" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <Send className="w-5 h-5 mr-2" />
              Telegram
            </a>
            <a href="mailto:info@devtogether.eu" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
