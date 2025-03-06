import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';

const TechproCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'TechPro Case Study | AIassist';
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 pt-32 max-w-4xl">
        <div className="mb-8">
          <span className="bg-primary/10 text-primary text-sm font-medium py-1 px-3 rounded">SaaS</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">TechPro's Journey to 60% Support Cost Reduction</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">-60%</p>
                <p className="text-muted-foreground">Support Costs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">+85%</p>
                <p className="text-muted-foreground">First Response Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="text-muted-foreground">Resolution Accuracy</p>
              </div>
            </div>
          </div>

          <h2>Challenge</h2>
          <p>
            TechPro, a rapidly growing SaaS company, was facing scalability challenges with their customer support:
          </p>
          <ul>
            <li>Rising support costs due to team expansion</li>
            <li>High volume of repetitive tier-1 support tickets</li>
            <li>Difficulty maintaining consistent support quality</li>
            <li>Limited coverage for international customers</li>
          </ul>

          <h2>Solution</h2>
          <p>
            We implemented a comprehensive AI support solution featuring:
          </p>
          <ul>
            <li>AI-powered ticket triage and routing</li>
            <li>Automated responses for common issues</li>
            <li>24/7 multilingual support capability</li>
            <li>Integration with their knowledge base</li>
            <li>Real-time performance analytics</li>
          </ul>

          <h2>Implementation Process</h2>
          <p>
            The implementation was completed in phases over 6 weeks:
          </p>
          <ul>
            <li>Initial assessment and customization</li>
            <li>Knowledge base integration and AI training</li>
            <li>Pilot program with select customer segments</li>
            <li>Full rollout and team training</li>
            <li>Continuous optimization and refinement</li>
          </ul>

          <h2>Results</h2>
          <p>
            After 6 months of implementation, TechPro achieved:
          </p>
          <ul>
            <li>60% reduction in support operational costs</li>
            <li>85% improvement in first response rate</li>
            <li>95% accuracy in automated issue resolution</li>
            <li>70% reduction in average handling time</li>
            <li>24/7 support coverage without additional staffing</li>
          </ul>

          <blockquote>
            "The AI assistant has revolutionized our support operations. Our team can now focus on complex technical issues while routine queries are handled automatically with impressive accuracy."
            <footer>- John Chen, Head of Customer Support at TechPro</footer>
          </blockquote>
        </div>
      </div>
    </Layout>
  );
};

export default TechproCaseStudy;
