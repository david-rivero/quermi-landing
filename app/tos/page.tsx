import React from 'react';

import {
  Hero,
  Footer,
} from '@/app/common/components';

const ToS: React.FC = () => {
  return (
    <>
      <Hero extraClassNames="inset-0 -z-10 h-screen w-screen bg-q-second text-q-background" whiteMode={true} showMenu={false}>
        <div className="h-full flex items-center justify-center">
          <h1 className="text-5xl text-center font-bold mb-5 font-['Raleway_Bold'] text-q-background">Terms of Service</h1>
        </div>
      </Hero>
      <section className="py-16">
        <div className="w-1/2 m-auto">
          <p className="mb-8">Welcome to Quermi, your dedicated platform for connecting with professional caregivers. By using our services, you agree to these Terms of Service, so please read them carefully.</p>
          <div className="mb-8">
            <p className="font-bold">1. Acceptance of Terms</p>
            <p>By accessing or using our platform, you confirm that you accept these terms and agree to comply with them. If you do not agree to these terms, you must not use our services.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">2. Service Description</p>
            <p>Quermi provides a mobile application that allows users to connect with caregivers for elder care services. These services include matching with caregivers, scheduling care sessions, and rating the provided services.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">3. User Accounts</p>
            <p>To access most features, you must register and create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">4. User Conduct</p>
            <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the platform. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our services.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">5. Intellectual Property Rights</p>
            <p>The content, design, databases, and technology associated with our services are protected by intellectual property laws and are owned by Quermi or our licensors. You may not use any content from our site without our permission or as permitted by law.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">6. Termination and Suspension</p>
            <p>We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms of Service.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">7. Disclaimer of Warranties</p>
            <p>Our services are provided on an "as is" and "as available" basis. Quermi does not make any representations or warranties, express or implied, regarding the operation or availability of our services.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">8. Limitation of Liability</p>
            <p>Quermi shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use of or inability to use our services.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">9. Changes to Terms</p>
            <p>We reserve the right to make changes to these Terms of Service at any time. Your continued use of our services after changes are made will constitute your acceptance of those changes.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">10. Governing Law</p>
            <p>These Terms of Service shall be governed and construed in accordance with the laws of Estonia, without regard to its conflict of law provisions.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">11. Contact Us</p>
            <p>If you have any questions about these Terms of Service, please contact us at <span className="underline">info@quermi.com</span>.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ToS;
