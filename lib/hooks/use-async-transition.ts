import { useState } from 'react';

const useAsyncTransition = () => {
  const [isPending, setIsPending] = useState(false);

  const startTransition = async (asyncFn: () => Promise<void>) => {
    setIsPending(true);
    await asyncFn();
    setIsPending(false);
  };

  return [isPending, startTransition] as const;
};

export default useAsyncTransition;
