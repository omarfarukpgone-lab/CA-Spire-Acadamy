import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-[#2563EB] text-white hover:bg-blue-700 shadow-xl shadow-[#2563EB]/20',
      secondary: 'bg-[#0F172A] text-white hover:bg-slate-800 shadow-xl shadow-[#0F172A]/10',
      outline: 'border-2 border-[#0F172A] bg-transparent hover:bg-slate-100 text-[#0F172A]',
      ghost: 'bg-transparent hover:bg-slate-100 text-[#0F172A]',
      danger: 'bg-[#EF4444] text-white hover:bg-red-600 shadow-xl shadow-[#EF4444]/20',
    };

    const sizes = {
      sm: 'h-9 px-4 text-xs tracking-widest uppercase',
      md: 'h-11 px-6 py-2 tracking-tight',
      lg: 'h-14 px-10 text-lg tracking-tight',
      icon: 'h-11 w-11 p-2',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-2xl font-black transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:pointer-events-none disabled:opacity-50 cursor-pointer uppercase',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
