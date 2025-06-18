
import React, { useState, useRef, useEffect } from 'react';
import { CardData } from '../types';
import IconButton from './IconButton';
import PencilIcon from './icons/PencilIcon';
import TrashIcon from './icons/TrashIcon';

interface CardProps {
  card: CardData;
  onUpdateCard: (id: string, newContent: string) => void;
  onDeleteCard: (id: string) => void;
  sectionBgColor: string; // e.g. bg-blue-100
}

const Card: React.FC<CardProps> = ({ card, onUpdateCard, onDeleteCard, sectionBgColor }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(card.content);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (editText.trim() === '') {
      onDeleteCard(card.id); // Delete if content is empty
    } else {
      onUpdateCard(card.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(card.content);
    setIsEditing(false);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  // Determine card background based on section's base color, making it slightly darker or different
  // For simplicity, using a fixed light background for cards to ensure readability across sections.
  const cardBg = 'bg-white';

  return (
    <div className={`${cardBg} p-3 rounded-lg shadow-md border border-gray-200 break-words`}>
      {isEditing ? (
        <div className="space-y-2">
          <textarea
            ref={textareaRef}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
            rows={4}
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleCancel}
              className="px-3 py-1 text-xs font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-3 py-1 text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-sm text-gray-700 whitespace-pre-wrap min-h-[20px]">{card.content}</p>
          <div className="flex justify-end space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            <IconButton onClick={() => setIsEditing(true)} ariaLabel="Edit card" className="text-gray-500 hover:text-indigo-600">
              <PencilIcon />
            </IconButton>
            <IconButton onClick={() => onDeleteCard(card.id)} ariaLabel="Delete card" className="text-gray-500 hover:text-red-600">
              <TrashIcon />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
