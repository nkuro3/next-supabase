'use client';

import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
  link?: boolean;
}

const buttonVariants = cva('text-gray-50', {
  variants: {
    variant: {
      primary: 'bg-blue-600 hover:bg-blue-500',
      error: 'bg-red-600 hover:bg-red-500',
      success: 'bg-green-600 hover:bg-green-500',
      default: 'bg-slate-600 hover:bg-slate-500'
    },
    size: {
      sm: 'px-3 py-1 text-sm',
      md: 'px-5 py-2',
      lg: 'px-10 py-3 text-lg'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
});

const Button = ({ children, className, variant, size, disabled, link, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ size, variant }),
        {
          'bg-gray-500 hover:bg-gray-500 cursor-default': !link && disabled
        },
        {
          'px-1 py-0 bg-transparent hover:bg-transparent hover:underline hover:cursor-pointer': link && !disabled
        },
        {
          'text-gray-500 cursor-default px-1 py-0 bg-transparent hover:bg-transparent': link && disabled
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
