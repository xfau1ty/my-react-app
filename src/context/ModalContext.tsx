import React, { 
  createContext, 
  useContext, 
  useState, 
  ReactNode, 
  useCallback,
  useMemo
} from 'react';

interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  
  const value = useMemo(() => ({
    isModalOpen,
    openModal,
    closeModal
  }), [isModalOpen, openModal, closeModal]);
  
  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal должен использоваться в ModalProvider');
  }
  return context;
};