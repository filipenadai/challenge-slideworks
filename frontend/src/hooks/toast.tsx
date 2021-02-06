import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 } from 'uuid';

import ToastContainer from '../components/Toast';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({ title, description }) => {
    const id = v4();

    const toast = {
      id,
      title,
      description,
    };

    setMessages(state => [...state, toast]);
  }, []);

  const removeToast = useCallback(id => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('Toast is not defined in providers');
  }

  return context;
}
