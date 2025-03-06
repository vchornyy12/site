import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';

const GlobalmartCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Master AGD Case Study | AIassist';
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 pt-32 max-w-4xl">
        <div className="mb-8">
          <span className="bg-primary/10 text-primary text-sm font-medium py-1 px-3 rounded">Retail</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">How Master AGD Increased Leads by 22% with AI Support</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">+22%</p>
                <p className="text-muted-foreground">Increase in Leads</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">+45%</p>
                <p className="text-muted-foreground">CSAT Improvement</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">-30%</p>
                <p className="text-muted-foreground">Response Time</p>
              </div>
            </div>
          </div>

          <h2>Challenge</h2>
          <p>
            Master AGD, a leading retail company, was experiencing rapid growth but struggling to maintain quality customer support. 
            Their team was overwhelmed with increasing support volume, leading to longer response times and decreased customer satisfaction.
          </p>

          <h2>Solution</h2>
          <p>
            We implemented our AI customer support solution that:
          </p>
          <ul>
            <li>Automated responses to common customer inquiries</li>
            <li>Provided 24/7 instant support in multiple languages</li>
            <li>Integrated seamlessly with their existing CRM system</li>
            <li>Offered intelligent lead qualification and routing</li>
          </ul>

          <h2>Implementation</h2>
          <p>
            The implementation process took just 4 weeks, including:
          </p>
          <ul>
            <li>Initial system setup and customization</li>
            <li>Integration with existing tools and databases</li>
            <li>Staff training and onboarding</li>
            <li>Testing and optimization</li>
          </ul>

          <h2>Results</h2>
          <p>
            Within 3 months of implementation, Master AGD saw significant improvements:
          </p>
          <ul>
            <li>22% increase in qualified leads through improved response times</li>
            <li>45% improvement in customer satisfaction scores</li>
            <li>30% reduction in average response time</li>
            <li>80% of routine inquiries handled automatically</li>
            <li>Support team now focusing on complex, high-value interactions</li>
          </ul>

          <blockquote>
            "The AI assistant has transformed our customer support operations. We're now able to provide better service to more customers while generating more qualified leads."
            <footer>- Maria Kowalska, Customer Success Manager at Master AGD</footer>
          </blockquote>
        </div>
      </div>
    </Layout>
  );
};

export default GlobalmartCaseStudy;
