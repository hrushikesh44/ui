'use client'
import { Modal } from "@/components/modal";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Home(){
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);

    React.useEffect(() => {
        console.log(modalOpen)
    }, [modalOpen])
    return(
        <div className="flex items-center justify-center">
            <Button name="Click here" onClick={() => setModalOpen(true)}/>
            <div>
                <Modal open={modalOpen} onClose={() => setModalOpen(false)}/>
            </div>
        </div>
    )
}