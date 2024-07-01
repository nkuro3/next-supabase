'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import Button from '@/components/ui/button';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const SubmitButton = ({ children, className, ...props }: Props): JSX.Element => {
  const { pending } = useFormStatus();

  return (
    <Button {...props} className={className} type="submit" disabled={pending}>
      {!pending ? (
        children
      ) : (
        <>
          <div className="h-0 opacity-0">{children}</div>
          <div className="animate-spin rounded-full border-t-transparent h-6 w-6 border-2 border-gray-50 mx-auto"></div>
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
