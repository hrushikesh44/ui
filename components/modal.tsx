'use client'

import React from "react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";


export function Modal(){
    const [open, setOpen] = React.useState<boolean>(false)
    return(
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 1, ease: "easeInOut"}}
        className="flex items-center justify-center h-screen">
            {!open && <Button name="Click here" onClick={() => setOpen(true)} />}
            <AnimatePresence>
                {open && (
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5 , ease: "easeInOut"}}
                >
                <div className="bg-neutral-900 opacity-40 w-screen h-screen flex items-center "></div>
                    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center "  onClick={() => setOpen(false)}>
                        <div className="flex items-center backdrop-opacity-0 ">
                            <div className=" bg-white p-5 rounded-md h-[40vh] w-[30vh] flex items-center justify-center selection:bg-amber-200" onClick={() => setOpen(false)}>
                                What ever you need here
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
    )
}