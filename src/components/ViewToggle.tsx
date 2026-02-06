'use client';

import { useView } from '@/lib/viewContext';
import { Smartphone, Monitor } from 'lucide-react';

export default function ViewToggle() {
  const { view, toggleView } = useView();

  return (
    <button
      onClick={toggleView}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-2 px-4 py-3 rounded-full bg-azul-primary text-branco font-semibold shadow-lg hover:shadow-xl transition-all z-50 hover:scale-105"
      title={`Mudar para ${view === 'desktop' ? 'Mobile' : 'Desktop'}`}
    >
      {view === 'desktop' ? (
        <>
          <Smartphone size={18} />
          <span className="hidden sm:inline">Mobile View</span>
        </>
      ) : (
        <>
          <Monitor size={18} />
          <span className="hidden sm:inline">Desktop View</span>
        </>
      )}
    </button>
  );
}
