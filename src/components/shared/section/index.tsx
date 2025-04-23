import { cn } from '@/utils/cn';
import { type HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
}

export const Section = ({ id, className, children, ...props }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full py-16 md:py-24',
        'flex items-center justify-center',
        className,
      )}
      {...props}
    >
      <div className="container mx-auto w-[70%]">{children}</div>
    </section>
  );
};
