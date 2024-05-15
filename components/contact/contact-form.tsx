'use client';

import Input from './components/input';

export default function ContactForm() {
  return (
    <form className="flex grow flex-col gap-y-4 ">
      <div className="flex gap-x-4 ">
        <Input label="First Name" name="firstName" id="firstName" placeholder="Enter first name" />
        <Input label="Last Name" name="lastName" id="lastName" placeholder="Enter last name" />
      </div>

      <Input
        label="Email Address"
        name="emailAddress"
        id="emailAddress"
        placeholder="Enter email address"
      />

      <div className="flex w-full grow flex-col gap-y-0.5">
        <label className="font-medium text-customDarkGreen" htmlFor="yourMessage">
          Your Message
        </label>
        <textarea
          className=" grow resize-none rounded-lg border border-customLightGrey px-4 py-3 font-medium shadow-sm focus:outline-none"
          id="yourMessage"
          name="yourMessage"
          placeholder="Enter your question or message"
        />
      </div>
      <button className="rounded-lg bg-customDarkGreen py-4 text-white">Submit</button>
    </form>
  );
}
