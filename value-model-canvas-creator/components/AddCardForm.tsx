
import React, { useState } from 'react';
import PlusIcon from './icons/PlusIcon';

interface AddCardFormProps {
  onAddCard: (content: string) => void;
  buttonText?: string;
  sectionColor: string; // e.g., 'blue' for bg-blue-500, text-blue-50
}

const AddCardForm: React.FC<AddCardFormProps> = ({ onAddCard, buttonText = "Add Idea", sectionColor }) => {
  const [content, setContent] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onAddCard(content.trim());
      setContent('');
      setIsAdding(false);
    }
  };

  if (!isAdding) {
    return (
      <button
        onClick={() => setIsAdding(true)}
        className={`mt-2 w-full flex items-center justify-center p-2 rounded-md ${'bg-' + sectionColor + '-500'} text-white hover:${'bg-' + sectionColor + '-600'} transition-colors shadow`}
      >
        <PlusIcon className="w-5 h-5 mr-1" /> {buttonText}
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 p-2 border border-gray-300 rounded-md bg-white shadow">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter new idea..."
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
        rows={3}
        autoFocus
      />
      <div className="mt-2 flex justify-end space-x-2">
        <button
            type="button"
            onClick={() => { setIsAdding(false); setContent(''); }}
            className="px-3 py-1.5 text-sm rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors"
        >
            Cancel
        </button>
        <button
            type="submit"
            className={`px-3 py-1.5 text-sm rounded-md text-white ${'bg-' + sectionColor + '-600'} hover:${'bg-' + sectionColor + '-700'} transition-colors disabled:opacity-50`}
            disabled={!content.trim()}
        >
            Add
        </button>
      </div>
    </form>
  );
};

export default AddCardForm;
