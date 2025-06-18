
import React from 'react';

interface IconProps {
  className?: string;
}

const TrashIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.56 0c1.153 0 2.242.078 3.324.225m-3.324-.225L9.31 2.688A2.25 2.25 0 0 1 11.358 1h1.284a2.25 2.25 0 0 1 2.048.805l1.042 2.625m0 0m-4.688 0a48.108 48.108 0 0 1 3.478-.397m5.843 3.992-1.037 1.037A4.875 4.875 0 0 1 16.49 9.513l-1.036-1.037a4.875 4.875 0 0 1 1.507-2.903l.004-.003Z" />
  </svg>
);

export default TrashIcon;
