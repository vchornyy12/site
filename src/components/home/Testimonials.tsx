
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The AI assistant has completely transformed our customer service approach. Response times are down 80% and customer satisfaction is up 35%.",
    author: "Sarah Johnson",
    role: "Customer Success Manager",
    company: "TechDrive Inc.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    quote: "Implementing this AI solution helped us scale our support operations without adding headcount. The ROI has been incredible.",
    author: "David Chen",
    role: "Operations Director",
    company: "Globex Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    quote: "The level of personalization is remarkable. Our customers often don't realize they're interacting with an AI until we tell them.",
    author: "Michael Torres",
    role: "Digital Transformation Lead",
    company: "Innovate Corp",
    rating: 4,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const goToTestimonial = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with the animation duration
  };
  
  const prevTestimonial = () => {
    const newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    goToTestimonial(newIndex);
  };
  
  const nextTestimonial = () => {
    const newIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    goToTestimonial(newIndex);
  };
  
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
      { threshold: 0.3 }
    );
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-20 bg-secondary/30">
      <div 
        ref={testimonialsRef}
        className="container mx-auto px-6 opacity-0"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real results from businesses that implemented our AI assistant solutions.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial cards */}
          <div className="relative h-[350px] sm:h-[280px] md:h-[260px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-border/30 shadow-lg transition-all duration-500 ease-in-out ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0 pointer-events-auto'
                    : 'opacity-0 translate-x-[100px] pointer-events-none'
                }`}
              >
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full object-cover border-2 border-white/50 shadow-md"
                  />
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-primary italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="font-medium text-primary">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Dots indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary w-6' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
