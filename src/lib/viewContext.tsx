'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ViewType = 'desktop' | 'mobile';

interface ViewContextType {
  view: ViewType;
  toggleView: () => void;
}

const ViewContext =createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<ViewType>('desktop');

  const toggleView = () => {
    setView(prev => prev === 'desktop' ? 'mobile' : 'desktop');
  };

  return (
    <ViewContext.Provider value={{ view, toggleView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error('useView must be used within ViewProvider');
  }
  return context;
}
