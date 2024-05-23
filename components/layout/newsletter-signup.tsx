'use client';
import emailjs from '@emailjs/browser';
import useAsyncTransition from 'lib/hooks/use-async-transition';
import { useState, type ChangeEvent, type FC } from 'react';
import Spinner from '../spinner'; // Adjust the import path based on your project structure

const SignupForm: FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useAsyncTransition();
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const validateEmail = (email: string) =>
    email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  const updateMessage = (message: string) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(''); // Clear error message after a delay
    }, 2000);
  };
  const handleSubmit = () => {
    startTransition(async () => {
      try {
        if (!email || !validateEmail) {
          updateMessage('Please enter a valid email');
          return;
        }
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_NEWSLETTER!,
          { email },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        updateMessage('Signed up for newsletter!');
        setEmail(''); // Clear the input field after submission
      } catch (e) {
        console.error('FAILED...', e);
        updateMessage('There was an error signing up. Please try again.');
      }
    });
  };
  return (
    <div>
      <input
        type="text"
        id="emailAddress"
        className="peer-rounded-[1px] mb-4 w-full max-w-md rounded-lg border border-transparent border-t-transparent bg-[#D9D9D9] px-3 py-2.5 font-sans text-sm font-normal text-[#043028] outline outline-0 transition-all placeholder-shown:border-transparent focus:border-[#D9D9D9] focus:border-transparent focus:border-t-transparent focus:outline-0 disabled:border-0"
        placeholder="Enter your email here"
        value={email}
        onChange={handleEmailChange}
      />
      <br />
      <button
        type="button"
        className="text-cabin inline-block w-full max-w-md cursor-pointer rounded-lg bg-[#82A38A] px-4 py-3 text-center text-lg font-semibold text-white transition duration-200 ease-in-out hover:bg-[#57755E]"
        disabled={isPending} // Disable the button while loading
        onClick={handleSubmit}
      >
        {isPending ? <Spinner /> : 'Sign Up'}
      </button>
      {message && (
        <p className="mt-4 text-center text-lg font-semibold text-customDarkGreen">{message}</p>
      )}
    </div>
  );
};

export default SignupForm;
