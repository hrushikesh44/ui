import Link from "next/link";

interface SidebarItemProps{
    href: string;
    item: string
}
export function SidebarItem({ href, item }: SidebarItemProps){
    return(
        <Link href={href} className="px-2 py-1 rounded-md text-lg w-full hover:bg-neutral-100">{item}</Link>
    )
}