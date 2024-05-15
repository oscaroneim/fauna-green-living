import { ContactErrors, ContactSchema } from 'lib/scemas';
import { FormEventHandler, useState } from 'react';

const useContactForm = () => {
  const [errors, setErrors] = useState<ContactErrors>();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const result = ContactSchema.safeParse(data);
    if (!result.success) {
      setErrors(result.error.format());
    }
  };
  return { errors, handleSubmit };
};

export default useContactForm;
