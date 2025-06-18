
import React from 'react';
import { VMCSection, CardData } from '../types';
import Card from './Card';
import AddCardForm from './AddCardForm';

interface CanvasSectionProps {
  section: VMCSection;
  cards: CardData[];
  onAddCard: (sectionId: string, content: string) => void;
  onUpdateCard: (sectionId: string, cardId: string, newContent: string) => void;
  onDeleteCard: (sectionId: string, cardId: string) => void;
}

const CanvasSection: React.FC<CanvasSectionProps> = ({ section, cards, onAddCard, onUpdateCard, onDeleteCard }) => {
  const sectionColorName = section.bgColor.split('-')[1]; // e.g., 'blue' from 'bg-blue-100'

  return (
    <div className={`flex flex-col p-4 rounded-xl shadow-lg border ${section.borderColor} ${section.bgColor} ${section.gridClasses} min-h-[200px] h-full overflow-hidden`}>
      <div className="mb-3">
        <h2 className={`text-xl font-semibold ${section.textColor}`}>{section.title}</h2>
        <p className={`text-xs ${section.textColor} opacity-80`}>{section.description}</p>
      </div>
      
      <div className="flex-grow space-y-3 overflow-y-auto pr-1 pb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {cards.length === 0 && (
          <p className={`text-sm ${section.textColor} opacity-60 italic text-center py-4`}>No items yet. Add one below!</p>
        )}
        {cards.map((card) => (
          <div key={card.id} className="group"> {/* Added group for hover effects on card buttons */}
            <Card
              card={card}
              onUpdateCard={(cardId, newContent) => onUpdateCard(section.id, cardId, newContent)}
              onDeleteCard={(cardId) => onDeleteCard(section.id, cardId)}
              sectionBgColor={section.bgColor}
            />
          </div>
        ))}
      </div>

      <div className="mt-auto pt-2"> {/* Ensures form is at the bottom */}
        <AddCardForm 
          onAddCard={(content) => onAddCard(section.id, content)} 
          sectionColor={sectionColorName}
        />
      </div>
    </div>
  );
};

export default CanvasSection;
