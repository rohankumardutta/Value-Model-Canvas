
import React from 'react';
import { SectionId, VMC_SECTIONS, SECTION_DISPLAY_ORDER, INITIAL_EMPTY_CANVAS_DATA } from './constants';
import { CanvasData, CardData } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import CanvasSection from './components/CanvasSection';
import Header from './components/Header';

const App: React.FC = () => {
  const [canvasData, setCanvasData] = useLocalStorage<CanvasData>('vmcData', INITIAL_EMPTY_CANVAS_DATA());

  const handleAddCard = (sectionId: SectionId, content: string) => {
    const newCard: CardData = {
      id: Date.now().toString() + Math.random().toString(36).substring(2,9), // Simple unique ID
      content,
    };
    setCanvasData((prevData) => ({
      ...prevData,
      [sectionId]: [...(prevData[sectionId] || []), newCard],
    }));
  };

  const handleUpdateCard = (sectionId: SectionId, cardId: string, newContent: string) => {
    setCanvasData((prevData) => ({
      ...prevData,
      [sectionId]: (prevData[sectionId] || []).map((card) =>
        card.id === cardId ? { ...card, content: newContent } : card
      ),
    }));
  };

  const handleDeleteCard = (sectionId: SectionId, cardId: string) => {
    setCanvasData((prevData) => ({
      ...prevData,
      [sectionId]: (prevData[sectionId] || []).filter((card) => card.id !== cardId),
    }));
  };

  const handleClearCanvas = () => {
    setCanvasData(INITIAL_EMPTY_CANVAS_DATA());
  };
  
  // Get sections in defined display order
  const orderedSections = SECTION_DISPLAY_ORDER.map(id => VMC_SECTIONS.find(s => s.id === id)).filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      <Header onClearCanvas={handleClearCanvas} />
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-12 gap-4 auto-rows-fr">
          {orderedSections.map((section) => {
            if (!section) return null; // Should not happen with filter(Boolean)
            return (
              <CanvasSection
                key={section.id}
                section={section}
                cards={canvasData[section.id] || []}
                onAddCard={handleAddCard}
                onUpdateCard={handleUpdateCard}
                onDeleteCard={handleDeleteCard}
              />
            );
          })}
        </div>
      </main>
      <footer className="text-center p-4 bg-slate-700 text-slate-300 text-sm">
        Value Model Canvas Creator - Powered by React & Tailwind CSS
      </footer>
    </div>
  );
};

export default App;
