import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Award, Building, Globe, BarChart } from 'lucide-react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us | DevTogether';
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DevTogether</h1>
          <p className="text-xl text-muted-foreground mb-10">
            We're on a mission to transform how businesses use AI to enhance customer experiences and streamline operations.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 border-t border-border/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2020, DevTogether began with a simple idea: make powerful AI technology accessible to businesses of all sizes. Our founders, with backgrounds in machine learning and business operations, recognized that many companies struggled to implement AI solutions effectively.
            </p>
            <p className="text-muted-foreground mb-4">
              We started by developing our core AI assistant platform, which quickly gained traction with small and medium-sized businesses looking to enhance their customer service capabilities. Today, we serve hundreds of clients across various industries, helping them leverage the power of artificial intelligence to drive growth and efficiency.
            </p>
          </div>
          <div className="relative">
            <div className="bg-primary/10 rounded-2xl p-8 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-6 text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
                  <p className="text-sm text-muted-foreground">Active Clients</p>
                </div>
                <div className="bg-background rounded-lg p-6 text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">30+</h3>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
                <div className="bg-background rounded-lg p-6 text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">15M+</h3>
                  <p className="text-sm text-muted-foreground">AI Interactions</p>
                </div>
                <div className="bg-background rounded-lg p-6 text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-4 translate-y-4 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 border-t border-border/50">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer First</h3>
            <p className="text-muted-foreground">
              We prioritize our customers' success above all else, ensuring our solutions deliver real business value.
            </p>
          </div>
          <div className="bg-secondary/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="text-muted-foreground">
              We strive for excellence in everything we do, from product development to customer support.
            </p>
          </div>
          <div className="bg-secondary/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-muted-foreground">
              We continuously push the boundaries of what's possible with AI to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16 border-t border-border/50">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 overflow-hidden">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-3xl text-primary/40">JD</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">Jane Doe</h3>
            <p className="text-sm text-muted-foreground mb-3">CEO & Co-Founder</p>
            <p className="text-muted-foreground text-sm">Former ML researcher with 15+ years of experience in AI applications for business.</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 overflow-hidden">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-3xl text-primary/40">JS</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">John Smith</h3>
            <p className="text-sm text-muted-foreground mb-3">CTO & Co-Founder</p>
            <p className="text-muted-foreground text-sm">AI engineer specializing in natural language processing and conversational interfaces.</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 overflow-hidden">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-3xl text-primary/40">EJ</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">Emily Johnson</h3>
            <p className="text-sm text-muted-foreground mb-3">COO</p>
            <p className="text-muted-foreground text-sm">Operations expert with a background in scaling SaaS companies and improving business processes.</p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join us on our mission</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always looking for talented individuals passionate about AI and customer experience to join our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="mailto:careers@devtogether.com">Careers</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
