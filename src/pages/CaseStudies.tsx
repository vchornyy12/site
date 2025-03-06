
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Case Studies | AIassist';
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Case Studies</h1>
        
        <div className="max-w-2xl mx-auto mb-20">
          <p className="text-lg text-muted-foreground text-center">
            Explore real-world implementations of our AI assistant solutions and the measurable results they've delivered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Case Study Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Retail company case study" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 text-primary text-xs font-medium py-1 px-2 rounded">
                Retail
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Increased leads by 22%</h3>
              <p className="text-muted-foreground mb-4">
                Master AGD implemented our AI customer support solution to handle their increasing support volume while maintaining quality.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-green-500 dark:text-green-400">+45% CSAT</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-muted-foreground">6 min read</span>
                </div>
                <Link to="/case-studies/globalmart" className="text-primary hover:underline font-medium">Read more</Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 mix-blend-multiply"></div>
              <img 
                src="https://masteragd.com.pl/images/zmywarka.png" 
                alt="Tech company case study" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 text-primary text-xs font-medium py-1 px-2 rounded">
                SaaS
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">TechPro Reduced Support Costs by 60% with AI Assistants</h3>
              <p className="text-muted-foreground mb-4">
                TechPro implemented our AI solution to automate tier-1 support and allow their team to focus on complex issues.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-green-500 dark:text-green-400">-60% Cost</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-muted-foreground">8 min read</span>
                </div>
                <Link to="/case-studies/techpro" className="text-primary hover:underline font-medium">Read more</Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Financial services case study" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 text-primary text-xs font-medium py-1 px-2 rounded">
                Financial Services
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">FinSecure's 24/7 Compliance Monitoring Success Story</h3>
              <p className="text-muted-foreground mb-4">
                FinSecure leveraged our AI to monitor transactions and compliance in real-time, reducing fraud by 78%.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-green-500 dark:text-green-400">-78% Fraud</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-muted-foreground">5 min read</span>
                </div>
                <Link to="/case-studies/finsecure" className="text-primary hover:underline font-medium">Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;
