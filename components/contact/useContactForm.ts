import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import useAsyncTransition from 'lib/hooks/use-async-transition';
import { ContactErrors, ContactSchema } from 'lib/scemas';
import { FormEventHandler, useState } from 'react';

const useContactForm = () => {
  const [errors, setErrors] = useState<ContactErrors>();
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useAsyncTransition();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    startTransition(async () => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      const result = ContactSchema.safeParse(data);

      if (!result.success) {
        setErrors(result.error.format());
        return;
      }
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          result.data,
          { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
        );
        setSuccess(true);
      } catch (error) {
        if (error instanceof EmailJSResponseStatus) {
          console.error('emailjs failed...', error);
          return;
        }
        console.error('error', error);
      }
    });
  };

  return { errors, handleSubmit, success, isPending };
};

export default useContactForm;
