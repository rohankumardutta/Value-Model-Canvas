
import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({ children, ariaLabel, className, ...props }) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`p-1.5 rounded-md hover:bg-gray-300/50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
