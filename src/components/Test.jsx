import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import React from 'react';
import { createContext, useContext } from "react";

const ModalContext = createContext(undefined);

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}


export function ModalTrigger({ children, className }) {
//   const { setOpen } = useModal();
  return (
    <div className={className} >
      {children}
    </div>
  );
}


export function useModal() {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
  }
