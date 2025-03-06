import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Mail, MessageCircle, Send, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50 mt-20">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-tight text-primary">
              Dev<span className="text-gray-500">Together</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Advanced AI assistants for modern businesses. Streamline your operations and enhance customer engagement.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:info@devtogether.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/services/ai-assistant" className="text-muted-foreground hover:text-primary text-sm">AI Assistant</Link></li>
              <li><Link to="/services/crm-integration" className="text-muted-foreground hover:text-primary text-sm">CRM Integration</Link></li>
              <li><Link to="/services/customer-support" className="text-muted-foreground hover:text-primary text-sm">Customer Support</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary text-sm">About Us</Link></li>
              <li><Link to="/case-studies" className="text-muted-foreground hover:text-primary text-sm">Case Studies</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Contact Us</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="text-muted-foreground mr-2 mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  123 AI Street, Tech City<br />
                  New York, NY 10001
                </p>
              </div>
              <a href="tel:+11234567890" className="flex items-center text-sm text-muted-foreground hover:text-primary">
                <Phone size={18} className="mr-2 shrink-0" />
                +48 (889) 906-053
              </a>
              <div className="flex space-x-3">
                <a href="https://wa.me/+48889906053" className="text-muted-foreground hover:text-green-600 transition-colors" aria-label="Chat on WhatsApp">
                  <MessageCircle size={20} />
                  <span className="sr-only">WhatsApp</span>
                </a>
                <a href="https://t.me/vovachornyi" className="text-muted-foreground hover:text-blue-500 transition-colors" aria-label="Message on Telegram">
                  <Send size={20} />
                  <span className="sr-only">Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DevTogether. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-xs text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-xs text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
