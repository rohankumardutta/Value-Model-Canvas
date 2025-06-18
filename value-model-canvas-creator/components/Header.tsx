
import React from 'react';
import TrashIcon from './icons/TrashIcon';

interface HeaderProps {
  onClearCanvas: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClearCanvas }) => {
  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear the entire canvas? This action cannot be undone.")) {
      onClearCanvas();
    }
  };

  return (
    <header className="bg-slate-700 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-tight">Value Model Canvas</h1>
      <button
        onClick={handleClear}
        className="flex items-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-150"
        aria-label="Clear entire canvas"
      >
        <TrashIcon className="w-5 h-5 mr-2" />
        Clear Canvas
      </button>
    </header>
  );
};

export default Header;
