'use client'
import { ReactNode } from "react"

interface ButtonProps{
    name: string
    icon?: ReactNode
    onClick?: () => Promise<void> | void ;
}

export function Button({ name , icon, onClick} : ButtonProps){
    return(
        <button className="flex items-center justify-center w-full px-2 py-1 rounded shadow-[0_0.5px_1px_rgb(0,0,0,0.2)] border border-neutral-400/10 inset-shadow-2xs hover:bg-neutral-200/50 cursor-pointer gap-3" onClick={onClick}>{name}{icon}</button>
    )
}

export function DarkButton({ name, icon } : ButtonProps){
    return(
        <button className="flex items-center bg-neutral-800 text-white justify-center w-full px-2 py-1 rounded shadow-[0_0.5px_1px_rgb(0,0,0,0.2)] border border-neutral-400/10 inset-shadow-2xs hover:bg-neutral-900 cursor-pointer">{name}{icon}</button>
    )
}