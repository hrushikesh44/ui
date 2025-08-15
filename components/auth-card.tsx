'use client'
import { motion } from "motion/react";
import { Input } from "./ui/input";
import { Button, DarkButton } from "./ui/button";
import { Label } from "./ui/label";

export default function AuthCard(){
    return(
        <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1}}
        transition={{duration: 0.5, ease: 'easeInOut'}}
        className="flex flex-col max-w-96 h-fit rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-8 py-10">
            <div className="mt-2">
                <h2 className="font-bold text-xl">Login to Example Inc</h2>
                <p className="text-sm mt-1 text-neutral-600 text-wrap">Enter your email below to login to your account.</p>
            </div>
            <div className="mt-5 gap-3 flex flex-col flex-1">
                <span>
                    <Label label="Email" />
                    <Input placeholder="me@example.com" />
                </span>
                <span>
                    <span className="flex items-center justify-between">
                        <Label label="Password" />
                        <a href="/" className="hover:underline text-sm">Forgot your password?</a>
                    </span>
                    <Input placeholder=""/>
                </span>
            </div>
            <div className="flex flex-1 flex-col mt-8 gap-4">
                <Button name="Login" />
                <DarkButton name="Login with Google" />
            </div>
            <span className="mx-auto text-sm text-neutral-500 mt-1">Don't have an account? <a href="/" className="hover:underline">Sign Up</a></span>
        </motion.div>
    )    
}