'use client';

import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import Button from '@/components/ui/button';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'error' | 'success' | 'default';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
};

const LinkedButton = ({ children, className, href, variant, size, disabled, ...props }: Props): JSX.Element => {
  return (
    <Link href={href || ''} {...props} onClick={(e) => disabled && e.preventDefault()}>
      <Button className={className} variant={variant} size={size} disabled={disabled}>
        {children}
      </Button>
    </Link>
  );
};

export default LinkedButton;
