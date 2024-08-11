import React from 'react';

import {
  Hero,
  Footer,
} from '@/app/common/components';

const About: React.FC = () => {
  return (
    <>
      <Hero extraClassNames="inset-0 -z-10 h-screen w-screen bg-q-second text-q-background" whiteMode={true} showMenu={false}>
        <div className="h-full flex items-center justify-center">
          <h1 className="text-5xl text-center font-bold mb-5 font-['Raleway_Bold'] text-q-background">About</h1>
        </div>
      </Hero>
      <section className="py-16">
        <div className="w-1/2 m-auto">
          <p className="mb-8">Welcome to Quermi, where compassion meets convenience. Our mission is to enhance the lives of elderly individuals by connecting them with dedicated caregivers who provide personalized support and care, right at their fingertips.</p>
          <div className="mb-8">
            <p className="font-bold">Our Vision</p>
            <p>We believe that every elderly individual deserves to live with dignity and receive the care they need in the comfort of their own home. Our app aims to empower families to find and manage caregiving services with ease, ensuring their loved ones are in safe hands.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">Our Services</p>
            <ul className="ml-6 list-disc">
              <li>Personalized Matching: Our innovative matching system analyzes the specific needs and preferences of each client to pair them with the ideal caregiver.</li>
              <li>Flexible Scheduling: With our user-friendly interface, clients can easily schedule care services at times that work best for them, ensuring their loved ones have the support they need when they need it.</li>
              <li>Transparent Communication: We facilitate open and secure communication between clients and caregivers, making it easy to share important information and updates about care sessions.</li>
              <li>Trusted Caregivers: Each caregiver on our platform is thoroughly vetted and trained to provide the highest standard of care. We conduct background checks and continuous training to ensure quality and safety.</li>
            </ul>
          </div>
          <div className="mb-8">
            <p className="font-bold">Our Story</p>
            <p>Founded by Marian, a veteran in the healthcare industry, Quermi was inspired by a personal experience with finding adequate care for an aging family member. This journey highlighted the challenges faced by families across the nation and sparked the creation of Quermi as a solution to streamline and simplify the process of hiring caregivers.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">Our Commitment to Privacy and Safety</p>
            <p>Your trust is vital to us. We are committed to protecting the privacy and security of our clients and caregivers. Our platform uses advanced security measures to safeguard personal information and ensure all interactions and transactions are secure.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">Join Us</p>
            <p>Whether you're seeking assistance for a loved one or you are a caregiver wanting to make a difference, [Your Company Name] is here to connect you with the right opportunities. Join us in our journey to transform elder care and enhance the lives of the elderly and their families.</p>
          </div>
          <div className="mb-8">
            <p className="font-bold">Contact Us</p>
            <p>For more information or to get started, please visit our Contact page or reach out to us directly at info@quermi.com. We are here to assist you with any questions or concerns.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
