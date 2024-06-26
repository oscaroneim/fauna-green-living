'use client';

import Spinner from 'components/spinner';
import { useEffect, useRef } from 'react';
import Input from './components/input';
import SelectInput from './ContactInput';
import useContactForm from './useContactForm';

export default function ContactForm() {
  const { errors, handleSubmit, success, isPending } = useContactForm();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (success) {
      resetForm();
    }
  }, [success]);

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex grow flex-col gap-y-2 ">
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

      <SelectInput
        defaultValue={''}
        label="Subject"
        name="subject"
        id="subject"
        options={[
          { value: '', label: 'Select one of the options' },
          { value: 'wholesale', label: 'Wholesale enquiry' },
          { value: 'custom', label: 'Custom wraps enquiry' },
          { value: 'general', label: 'General enquiry' }
        ]}
        error={errors?.subject?._errors?.[0]}
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
      <button className="flex h-12 items-center justify-center rounded-lg bg-customDarkGreen text-white">
        {isPending ? <Spinner /> : 'Submit'}
      </button>
      {success && (
        <div className="text-center font-semibold text-customDarkGreen">
          Thank you for submitting your message!
        </div>
      )}
    </form>
  );
}
