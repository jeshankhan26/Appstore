import React from 'react';

const Terms = () => {
    return (
        <>
        <div className="max-w-4xl mx-auto p-6">
      <div className="prose lg:prose-xl">
        <h1 className="text-center text-3xl font-bold mb-6">Terms of Service</h1>
        
        <p>Effective Date: May 6, 2025</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, you agree to be bound by these Terms of Service.
          If you do not agree to all the terms and conditions, then you may not access the service.
        </p>

        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. It is your responsibility to check 
          the terms periodically for changes.
        </p>

        <h2>3. User Responsibilities</h2>
        <ul className="list-disc list-inside">
          <li>Use the service in compliance with all laws.</li>
          <li>Do not engage in harmful or abusive activities.</li>
          <li>Do not attempt to gain unauthorized access to any part of the website.</li>
        </ul>

        <h2>4. Account Information</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and 
          for all activities that occur under your account.
        </p>

        <h2>5. Termination</h2>
        <p>
          We may suspend or terminate your access at any time without prior notice if you violate 
          these terms.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at <a className="link link-hover text-blue-500">jeshank1123@gmail.com</a>.
        </p>
      </div>
    </div>
            
        </>
    );
};

export default Terms;