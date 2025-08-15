'use client'
import { AnimatePresence, motion } from "motion/react";
import React from "react";

export function Tooltip(){
    const [showTooltip, setShowTooltip] = React.useState<boolean>(false)
    return(
        <motion.div 
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        className="px-2 py-1 relative rounded shadow-[0px_0.5px_1px_rgba(0,0,0,0.4)] inset-shadow-2xs w-fit">
            Hover here
            <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: -30, scale: 1.1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute bottom-4 px-2 py-1 text-sm text-neutral-500 rounded shadow-lg text-nowrap"
            >
              Hello ❤️
            </motion.div>
          )}
        </AnimatePresence>
        </motion.div>
    )
}
