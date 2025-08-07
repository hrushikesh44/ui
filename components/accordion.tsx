'use client'
import { IconPlus } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import React from "react";

const accordionData = [
  {
    id: 1,
    title: "What is your return policy?",
    content: "We accept returns within 30 days of purchase. Items must be in original condition and packaging."
  },
  {
    id: 2,
    title: "Do you offer international shipping?",
    content: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by destination."
  },
  {
    id: 3,
    title: "How can I track my order?",
    content: "Once your order is shipped, we’ll send you a tracking link via email. You can also view it from your account dashboard."
  },
  {
    id: 4,
    title: "Can I change or cancel my order?",
    content: "Orders can be changed or canceled within 2 hours of placing them. After that, they are processed for shipping."
  },
  {
    id: 5,
    title: "Do you offer bulk discounts?",
    content: "Yes! For bulk or wholesale orders, please contact our sales team for custom pricing and terms."
  }
];


export function Accordion(){
    const [selected, setSelected] = React.useState<number | null>()

    function handleAccordion (id: number) {
        setSelected(id === selected ? null : id )
    }
    return(
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, ease: "easeInOut"}}
        className="flex flex-col gap-3">
        {accordionData.map((items) => (
            <div key={items.id} className="rounded-lg shadow-lg inset-shadow-2xs p-2 w-[30vw]"> 
                <span className=" flex items-center justify-between w-full" onClick={() => handleAccordion(items.id)}>{items.title} <IconPlus /></span>
                <AnimatePresence 
                initial={false}
                >
                    {selected === items.id && 
                    <motion.p 
                    initial={{height: 0, opacity: 0}}
                    animate={{height: "auto" ,opacity: 1}}
                    exit={{height: 0, opacity: 0}}
                    transition={{duration: 0.3, ease: "easeInOut"}}
                    className=" text-neutral-500 mt-2"
                    >{items.content}</motion.p>} 
                </AnimatePresence>
            </div>
        ))}
        </motion.div>
    )
}