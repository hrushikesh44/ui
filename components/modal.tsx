'use client'

import React from "react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

export function Modal({ open , onClose }: ModalProps){
    
    return(
        <div>
            {open && (
        <>
          <div className="bg-gray-900 opacity-70 w-screen h-screen flex items-center "></div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center "  onClick={onClose}>
                <div className="flex items-center backdrop-opacity-0 ">
                    <span className=" bg-white p-5 rounded-md w-50 h-50" onClick={onClose}>
                        Hello
                    </span>
                </div>
            </div>
        </>
      )}
        </div>
    )
}