'use client';

import Input from './components/input';
import useContactForm from './useContactForm';

export default function ContactForm() {
  const { errors, handleSubmit } = useContactForm();
  return (
    <form onSubmit={handleSubmit} className="flex grow flex-col gap-y-2 ">
      <div className="flex gap-x-4 gap-y-2 max-lg:flex-col ">
        <Input
          label="First Name"
          name="firstName"
          id="firstName"
          placeholder="Enter first name"
          error={errors?.firstName?._errors?.[0]}
        />
        <Input
          label="Last Name"
          name="lastName"
          id="lastName"
          placeholder="Enter last name"
          error={errors?.lastName?._errors?.[0]}
        />
      </div>

      <Input
        label="Email Address"
        name="emailAddress"
        id="emailAddress"
        placeholder="Enter email address"
        error={errors?.emailAddress?._errors?.[0]}
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
        <div className="h-6 text-customRed">{errors?.yourMessage?._errors?.[0]}</div>
      </div>
      <button className="rounded-lg bg-customDarkGreen py-4 text-white">Submit</button>
    </form>
  );
}
