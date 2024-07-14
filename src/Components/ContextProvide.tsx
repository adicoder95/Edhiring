// ModalContext.tsx
import React, { createContext, useState, ReactNode, FC } from 'react';

interface ModalContextProps {
  loginModal: boolean;
  setloginModal: React.Dispatch<React.SetStateAction<boolean>>;
  signupModal: boolean;
  setSignupModal: React.Dispatch<React.SetStateAction<boolean>>;
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ModalContextProps | undefined>(undefined);

export const ContextProvide: FC<{ children: ReactNode }> = ({ children }) => {
  const [loginModal, setloginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Context.Provider value={{ loginModal, setloginModal, signupModal, setSignupModal,openSidebar,setOpenSidebar }}>
      {children}
    </Context.Provider>
  );
};
