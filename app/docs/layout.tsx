import { Sidebar } from "@/components/docs-sidebar";
import { ReactNode } from "react";

export default function Layout({
    children
    }: {
    children: ReactNode}){
    return(
        <div className="flex items-center justify-center">
            <Sidebar />
            {children}
        </div>
    )
}