import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Demo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Try Our Demo | DevTogether';
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 pt-24 sm:pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">
            Experience Our AI Assistant
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground text-center mb-8 sm:mb-12 px-4">
            Interact with our AI assistant below to see how it can transform your customer service experience.
          </p>

          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden">
            <div className="relative">
              <div 
                id="chat_form"
                className="h-[400px] sm:h-[500px] md:h-[600px] bg-white dark:bg-gray-900"
                style={{ minHeight: '350px' }}
              />
            </div>

            <div className="p-4 sm:p-6 bg-secondary/20 border-t border-border">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  Ready to Transform Your Customer Service?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-2">
                  Get a customized AI assistant tailored to your business needs. 
                  Our team will help you set up, train, and integrate the perfect solution for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/contact')} 
                    className="w-full sm:w-auto sm:min-w-[200px]"
                  >
                    Contact Sales
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => navigate('/case-studies')} 
                    className="w-full sm:w-auto sm:min-w-[200px]"
                  >
                    View Case Studies
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
            <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg font-semibold mb-2">24/7 Availability</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Provide instant support to your customers around the clock without human intervention.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Natural Conversations</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Advanced AI that understands context and maintains natural, engaging conversations.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Easy Integration</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Simple setup process with seamless integration into your existing website or platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Demo;
