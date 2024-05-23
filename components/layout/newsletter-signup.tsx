'use client';

import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import Spinner from '../spinner'; // Adjust the import path based on your project structure

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true); // Set loading state to true when form is submitted

    // EmailJS configuration
    const serviceID = 'service_5vevvdg';
    const templateID = 'template_jsz1wbo';
    const userID = 'LeeUSkEtxK_E8jCVb';

    // EmailJS parameters
    const templateParams = {
      user_email: email
    };

    // Send email via EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage('Signed up for newsletter!');
        setEmail(''); // Clear the input field after submission
        setIsLoading(false); // Reset loading state
        setTimeout(() => {
          setSuccessMessage(''); // Clear success message after a delay
        }, 3000); // Adjust the delay as needed
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSuccessMessage('There was an error signing up. Please try again.');
        setIsLoading(false); // Reset loading state
        setTimeout(() => {
          setSuccessMessage(''); // Clear error message after a delay
        }, 2000); // Adjust the delay as needed
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        id="emailAddress"
        className="peer-rounded-[1px] mb-4 w-full max-w-md rounded-lg border border-transparent border-t-transparent bg-[#D9D9D9] px-3 py-2.5 font-sans text-sm font-normal text-[#043028] outline outline-0 transition-all placeholder-shown:border-transparent focus:border-[#D9D9D9] focus:border-transparent focus:border-t-transparent focus:outline-0 disabled:border-0"
        placeholder="Enter your email here"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <br />
      <button
        type="button"
        className="text-cabin inline-block w-full max-w-md cursor-pointer rounded-lg bg-[#82a38a] px-4 py-3 text-center text-lg font-semibold text-white transition duration-200 ease-in-out hover:bg-[#57755e]"
        disabled={isLoading} // Disable the button while loading
      >
        {isLoading ? <Spinner /> : 'Sign Up'}
      </button>
      {successMessage && (
        <p className="mt-4 text-center text-lg font-semibold text-customDarkGreen">
          {successMessage}
        </p>
      )}
    </form>
  );
};

export default SignupForm;
