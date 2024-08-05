// ModalContext.tsx
import React, { createContext, useState, ReactNode, FC, useEffect } from 'react';

interface ModalContextProps {
  loginModal: boolean;
  setloginModal: React.Dispatch<React.SetStateAction<boolean>>;
  signupModal: boolean;
  setSignupModal: React.Dispatch<React.SetStateAction<boolean>>;
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  user:Object;
  setUser:React.Dispatch<React.SetStateAction<Object>>;
  loggedIn:boolean;
  setLoggedIn:React.Dispatch<React.SetStateAction<boolean>>;

}

export const Context = createContext<ModalContextProps | undefined>(undefined);

export const ContextProvide: FC<{ children: ReactNode }> = ({ children }) => {
  const [loginModal, setloginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  // setUser(localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')!):{});
  useEffect(() => {
    if(localStorage.getItem('token')){
      setLoggedIn(true);
      
      // setUser(JSON.parse(localStorage.getItem('user')!));
    }
  }, [])


  return (
    <Context.Provider value={{ loginModal, setloginModal, signupModal, setSignupModal,openSidebar,setOpenSidebar,user,setUser,loggedIn,setLoggedIn }}>
      {children}
    </Context.Provider>
  );
};
