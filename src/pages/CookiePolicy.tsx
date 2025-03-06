import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Cookie Policy | DevTogether';
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Cookie Policy</h1>
        
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <p className="text-muted-foreground mb-6">
            Last Updated: March 2, 2025
          </p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              This Cookie Policy explains how DevTogether ("we," "our," or "us") uses cookies and 
              similar technologies on our website (the "Site"). By using our Site, you consent to 
              the use of cookies in accordance with this policy.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">2. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information 
              to the website owners. Cookies can be "persistent" or "session" cookies. Persistent 
              cookies remain on your device when you go offline, while session cookies are deleted 
              as soon as you close your web browser.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            <p>
              We use different types of cookies for various reasons:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-4">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the Site to 
                function properly. They enable core functionality such as security, network 
                management, and account access. You may not opt-out of these cookies.
              </li>
              <li>
                <strong>Functional Cookies:</strong> These cookies enable us to provide enhanced 
                functionality and personalization. They may be set by us or by third-party providers 
                whose services we have added to our pages.
              </li>
              <li>
                <strong>Performance/Analytics Cookies:</strong> These cookies allow us to count 
                visits and traffic sources so we can measure and improve the performance of our 
                Site. They help us know which pages are the most and least popular and see how 
                visitors move around the Site.
              </li>
              <li>
                <strong>Marketing/Advertising Cookies:</strong> These cookies are used to track 
                visitors across websites. They are used to display ads that are relevant and 
                engaging for individual users and thereby more valuable for publishers and 
                third-party advertisers.
              </li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report 
              usage statistics of the Site, deliver advertisements, and so on. These cookies may 
              include:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Google Analytics cookies to analyze how users use our Site</li>
              <li>Google AdSense cookies to help with online advertising</li>
              <li>Social media cookies from platforms like Facebook, Twitter, and LinkedIn</li>
              <li>Other third-party analytics and marketing tools</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">5. Cookie Management</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Delete cookies from your device</li>
              <li>Block cookies by activating the setting on your browser that allows you to refuse all or some cookies</li>
              <li>Set your browser to notify you when you receive a cookie</li>
            </ul>
            <p className="mt-4">
              Please note that if you choose to block or delete cookies, you may not be able to 
              access certain areas or features of our Site, and some services may not function 
              properly.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">6. Your Cookie Preferences</h2>
            <p>
              When you first visit our Site, you will be shown a cookie banner that allows you to 
              accept or decline non-essential cookies. You can change your preferences at any time 
              by clicking on the "Cookie Settings" link in the footer of our Site.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">7. Similar Technologies</h2>
            <p>
              In addition to cookies, we may also use other similar technologies on our Site, such as:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-4">
              <li>
                <strong>Web Beacons (or Clear GIFs):</strong> Small graphic images that are used to 
                track user behavior and collect data about how visitors navigate the Site.
              </li>
              <li>
                <strong>Pixel Tags:</strong> Tiny transparent images embedded in web pages or emails 
                that track whether a user has completed an action.
              </li>
              <li>
                <strong>Local Storage Objects:</strong> Data stored in your browser's storage to 
                remember your preferences or actions.
              </li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes 
              by posting the new Cookie Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="mt-4">
              We encourage you to periodically review this Cookie Policy to stay informed about how 
              we are using cookies.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <div className="mt-4">
              <p>DevTogether</p>
              <p>123 AI Street, Tech City</p>
              <p>New York, NY 10001</p>
              <p>Email: info@devtogether.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
