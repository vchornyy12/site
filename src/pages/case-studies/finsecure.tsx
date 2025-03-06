import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';

const FinsecureCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'FinSecure Case Study | AIassist';
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 pt-32 max-w-4xl">
        <div className="mb-8">
          <span className="bg-primary/10 text-primary text-sm font-medium py-1 px-3 rounded">Financial Services</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">FinSecure: Achieving 78% Fraud Reduction with AI Monitoring</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">-78%</p>
                <p className="text-muted-foreground">Fraud Reduction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-muted-foreground">Compliance Coverage</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">90%</p>
                <p className="text-muted-foreground">Faster Detection</p>
              </div>
            </div>
          </div>

          <h2>Challenge</h2>
          <p>
            FinSecure, a leading financial services provider, faced significant challenges in:
          </p>
          <ul>
            <li>Managing increasing transaction volumes</li>
            <li>Detecting and preventing fraud in real-time</li>
            <li>Maintaining regulatory compliance</li>
            <li>Reducing false positives in fraud detection</li>
          </ul>

          <h2>Solution</h2>
          <p>
            We implemented our AI-powered monitoring solution that provided:
          </p>
          <ul>
            <li>Real-time transaction monitoring and analysis</li>
            <li>Advanced pattern recognition for fraud detection</li>
            <li>Automated compliance checking and reporting</li>
            <li>Machine learning-based risk assessment</li>
            <li>Intelligent alert system with priority routing</li>
          </ul>

          <h2>Implementation</h2>
          <p>
            The implementation was completed over 12 weeks, including:
          </p>
          <ul>
            <li>System integration and data migration</li>
            <li>AI model training with historical data</li>
            <li>Compliance framework alignment</li>
            <li>Staff training and certification</li>
            <li>Phased rollout across departments</li>
          </ul>

          <h2>Results</h2>
          <p>
            Within the first year of implementation, FinSecure achieved:
          </p>
          <ul>
            <li>78% reduction in fraudulent transactions</li>
            <li>100% coverage of compliance monitoring requirements</li>
            <li>90% faster fraud detection and response</li>
            <li>65% reduction in false positives</li>
            <li>$2.5M annual cost savings in fraud prevention</li>
          </ul>

          <blockquote>
            "The AI monitoring system has transformed our ability to detect and prevent fraud while ensuring compliance. It's like having a vigilant guardian watching over our transactions 24/7."
            <footer>- Sarah Thompson, Chief Risk Officer at FinSecure</footer>
          </blockquote>
        </div>
      </div>
    </Layout>
  );
};

export default FinsecureCaseStudy;
