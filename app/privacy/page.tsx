import React from 'react';

import {
  Hero,
  Footer,
} from '@/app/common/components';

const Privacy: React.FC = () => {
  return (
    <>
      <Hero extraClassNames="inset-0 -z-10 h-screen w-screen bg-q-footer text-q-background" whiteMode={true} showMenu={false}>
        <div className="h-full flex items-center justify-center">
          <h1 className="text-5xl text-center font-bold mb-5 font-['Raleway_Bold'] text-q-background">Privacy</h1>
        </div>
      </Hero>
      <section className="py-16">
        <div className="w-1/2 m-auto">
          <p className="mb-8">At Quermi, your privacy is paramount. This Privacy Policy outlines the types of information we collect, how it is used, and the measures we take to protect your personal information.</p>
          <div className="mb-8">
            <p className="font-bold">1. Information Collection</p>
            <p>When you use our platform, we collect personal information that you provide directly to us. This may include:</p>
            <ul className="ml-6 list-disc">
              <li>Personal Identification Information: Name, email address, phone number, and physical address.</li>
              <li>Health Information: To better cater to the needs of the elderly, sensitive information regarding health conditions may be collected, with your consent.</li>
              <li>Payment Information: We collect necessary payment details to process transactions.</li>
            </ul>
          </div>
          <div className="mb-8">
            <p className="font-bold">2. Use of Information</p>
            <p>The information we collect from you may be used to:</p>
            <ul className="ml-6 list-disc">
              <li>Provide and improve our services.</li>
              <li>Communicate with you about your account or services requested.</li>
              <li>Process transactions.</li>
              <li>Ensure compliance with our terms of service.</li>
              <li>Send you promotional information, as permitted by law.</li>
            </ul>
          </div>
          <div className="mb-8">
            <p className="font-bold">3. Information Sharing and Disclosure</p>
            <p>We may share your information with:</p>
            <ul className="ml-6 list-disc">
              <li>Caregivers: To facilitate the provision of care services.</li>
              <li>Service Providers: Third parties who perform services on our behalf, such as payment processing and data management.</li>
              <li>Law Enforcement: When required by law or to protect the rights and safety of our users and the public.</li>
            </ul>
          </div>
          <div className="mb-8">
            <p className="font-bold">4. Data Security</p>
            <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">5. User Rights</p>
            <p>You have the right to:</p>
            <ul className="ml-6 list-disc">
              <li>Access and update your personal information.</li>
              <li>Opt out of receiving promotional communications.</li>
              <li>Request deletion of your data, subject to certain conditions.</li>
            </ul>
          </div>
          <div className="mb-8">
            <p className="font-bold">6. Cookies and Tracking Technologies</p>
            <p>We use cookies and similar tracking technologies to track activity on our service and hold certain information, which helps us to improve our platform and your user experience.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">7. Children's Privacy</p>
            <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personally identifiable information from children under 18 years of age.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">8. Changes to This Privacy Policy</p>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">9. Contact Us</p>
            <p>If you have any questions or concerns about our Privacy Policy, please contact us at Quermi.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Privacy;
