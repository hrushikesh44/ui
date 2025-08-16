"use client";
import Link from "next/link";
import React from "react";
import { SidebarItem } from "./ui/sidebarItem";

export function Sidebar(){

    return(
        <div className="border-r border-neutral-300 h-screen w-[16rem] p-2 mt-10 overflow-auto fixed top-0 left-[10vw]">
            {/* Sidebar Header*/}
            <div className="flex items-center justify-between">
                <h1 className="text-lg text-neutral-900">Components</h1>
            </div>
            {/* Sidebar Body*/}
            <div className="flex flex-col text-neutral-600 pt-5">
                <SidebarItem href="/docs/accordion" item="Accordion"/>
                <SidebarItem href="/docs/tooltip" item="Tool Tip"/>
                <SidebarItem href="/docs/card-auth" item="Auth Card"/>
                <SidebarItem href="/docs/modal" item="Modal" />
                <SidebarItem href="/docs/toast" item="Toast" />
            </div>
            {/* Sidebar Footer*/}
            <div>

            </div>
        </div>
    )
}