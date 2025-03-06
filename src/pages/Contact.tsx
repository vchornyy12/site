import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Loader2, MessageCircle, Send, MapPin, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  // Contact numbers
  const contactNumbers = {
    phone1: '+48889906053',
    phone2: '+380977410358',
    whatsapp: '+48889906053',
    telegram: '@vovachornyi'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us | DevTogether';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'vchornyy12@gmail.com', // Replace with your admin email
      };

      await emailjs.send(
        'service_iho2q5h', // Replace with your EmailJS service ID
        'template_6x5fhbu', // Replace with your EmailJS template ID
        templateParams,
        '7_rG75LaBvLA1QiL3' // Replace with your EmailJS public key
      );

      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      toast({
        title: 'Message sent successfully!',
        description: 'We will get back to you as soon as possible.',
      });

      // Reset submission status after a delay
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: 'Error sending message',
        description: 'Please try again later or contact us directly via email.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="bg-secondary/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Our Address</h3>
                  <div className="flex">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <p className="text-primary">
                      123 AI Street, Tech City<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Email Us</h3>
                  <a href="mailto:info@devtogether.com" className="text-primary hover:underline flex items-center">
                    <Mail className="h-5 w-5 shrink-0 mr-3" />
                    <span>info@devtogether.com</span>
                  </a>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Call Us</h3>
                  <a href={`tel:${contactNumbers.phone1}`} className="text-primary hover:underline flex items-center">
                    <Phone className="h-5 w-5 shrink-0 mr-3" />
                    <span>{contactNumbers.phone1}</span>
                  </a>
                  <a href={`tel:${contactNumbers.phone2}`} className="text-primary hover:underline flex items-center mt-2">
                    <Phone className="h-5 w-5 shrink-0 mr-3" />
                    <span>{contactNumbers.phone2}</span>
                  </a>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Chat With Us</h3>
                  <div className="flex space-x-4 mt-3">
                    <a 
                      href={`https://wa.me/${contactNumbers.whatsapp}`} 
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:bg-green-500 hover:text-white transition-colors"
                      aria-label="Chat with us on WhatsApp"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </a>
                    <a 
                      href={`https://t.me/${contactNumbers.telegram}`} 
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:bg-blue-500 hover:text-white transition-colors"
                      aria-label="Message us on Telegram"
                    >
                      <Send className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-sm font-medium text-muted-foreground mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Monday-Friday:</span> 9:00 AM - 6:00 PM EST</p>
                  <p><span className="font-medium">Saturday:</span> 10:00 AM - 2:00 PM EST</p>
                  <p><span className="font-medium">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-green-800 dark:text-green-200">Message Sent!</h3>
                  <p className="mt-2 text-green-700 dark:text-green-300">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
