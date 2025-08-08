import { Sidebar } from "@/components/docs-sidebar";
import { ReactNode } from "react";

export default function Layout({
    children
    }: {
    children: ReactNode}){
    return(
        <div className="flex items-center mx-auto max-w-5xl">
            <div className="flex gap-40">
                <Sidebar />
                {children}
            </div>
        </div>
    )
}