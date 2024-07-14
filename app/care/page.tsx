import React from 'react';

const CarePage: React.FC = () => {
  return (
    <>
      <div id="hero" className="hero inset-0 -z-10 h-screen w-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="header">
          <div className="header__icon"></div>
          <div className="header__menu">
            <ul className="flex">
              <li>Features</li>
              <li>Steps</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="header__cta">
            <button>Start using</button>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-content__left">
            <h1>Caring at the palm of your hand</h1>
            <p>Install Quermi in your phone and start taking care of the people you love most</p>
          </div>
          <div className="hero-content__right"></div>
        </div>
      </div>
      <section>
        <div id="feature">
          <div>
            <p>Find caregivers safer and faster</p>
            <h2>The platform you were looking for</h2>
          </div>
          <div>
            <div>
              <p>Find the best match</p>
              <p>Our intelligent matching system ensures you find the perfect caregiver tailored to your specific
                needs. Whether you require specialized care or general assistance, our platform connects you with professionals
                best suited to provide comfort and care to your loved ones.</p>
            </div>
            <div>
              <p>Schedule the days</p>
              <p>Flexibility at your fingertips! Easily schedule and manage caregiving sessions through our user-friendly calendar interface.
                Plan ahead or arrange last-minute assistance, ensuring your elderly family members receive the care they need, whenever they need it.</p>
            </div>
            <div>
              <p>Rate your experience</p>
              <p>Your feedback matters! After each session, you have the opportunity to rate your experience.
                This helps us maintain high standards and improve our services. Your reviews also assist others in making informed decisions when choosing their caregivers.</p>
            </div>
          </div>
        </div>
        <div id="steps">
          <h2>Start using Quermi now</h2>
          <div>
            <div>
              <p>Create an account</p>
              <p>Start downloading our app and create an account</p>
            </div>
            <div>
              <p>Link your payment methods</p>
              <p>Add your preferred credit or debit card</p>
            </div>
            <div>
              <p>Pick a plan</p>
              <p>Choose between mensual or a year plan</p>
            </div>
            <div>
              <p>Find a care provider</p>
              <p>Search among different profiles and match with the one you are looking for</p>
            </div>
            <div>
              <p>Enjoy the experience</p>
              <p>Start your experience and let your care person what you need</p>
            </div>
          </div>
          <div></div>
        </div>
        <div id="pricing">
          <h2>Choose the right plan for you</h2>
          <div>
            <div>
              <p>Basic</p>
              <p>Ideal for your first plan</p>
              <p>$10/month</p>
              <button>Buy plan</button>
              <div>
                <ul>
                  <li>20 swipes per day</li>
                  <li>2 types per day</li>
                </ul>
              </div>
            </div>
            <div>
              <p>Premium</p>
              <p>For customers with several requirements</p>
              <p>$6/month</p>
              <p>Billed anually</p>
              <button>Buy plan</button>
              <div>
                <ul>
                  <li>Unlimited swipes per day</li>
                  <li>Access to all services provided in Quermi</li>
                  <li>Profile highlighted</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="cta">
          <h2>Download the app and start your experience</h2>
          <div></div>
        </div>
      </section>
      <footer>
        <div className="footer-left">
          <span>Giving care at the palm of your hand</span>
          <p>© 2021 Quermi Öu. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <div>
            <p>Product</p>
            <ul>
              <li>For providers</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
          <p>Company</p>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
          <p>Legal</p>
            <ul>
              <li>Terms of service</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default CarePage;
