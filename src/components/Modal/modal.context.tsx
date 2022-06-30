import React, { createContext, useContext, useState } from "react";

// context
const ModalContext = createContext({})

// Provider
export const ModalProvider = ({ children }:any) => {
    const [modalState, setModalState] = useState({visible: false})

    const openModal = (payload:any) => 
        setModalState({...payload, visible: true})
    
    const closeModal = () => setModalState({visible: false})

    return (
        <ModalContext.Provider 
            value={{modalState, openModal, closeModal}}
        >
            {children}
        </ModalContext.Provider>
    )
}

// hook
export const UseModalContext = () => {
    const context = useContext(ModalContext)
    return context;
}