'use client'
import React from "react"
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Toast({
    error 
    } : {
    error: string
    }){
    const [toast, setToast] = React.useState<string | null>(null);

   const showToast = (message: string) => {
        setToast(message)

        setTimeout(() => setToast(null), 2000)
   }

    return(
        <div>
            <Button name="Click here" onClick={() => showToast(error)}/>
            <div className="fixed bottom-4 right-4 space-y-2">
                <AnimatePresence>
                    {toast && <motion.div 
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: -30 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className=" w-full px-2 py-1 rounded-md bg-red-200">
                    Error Occured
                    </motion.div>}
                </AnimatePresence>
            </div>
        </div>
    )
}
