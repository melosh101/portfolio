import React from "react";
import pfpImage from "../../public/pfp.png"
import { cn } from "~/lib/utils";
import Link from "next/link";

interface navBarProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{

}


const Navbar = React.forwardRef<HTMLElement, navBarProps>(({className}, ref) => {
    return <nav className={cn("flex items-center h-20 bg-gray-900", className)} ref={ref}>
    <Link href="/" className={"pr-5"}>
        <img src="pfp_nobg.svg" alt="pfp" className="size-20 aspect-square"/>
    </Link>
    <Link href="/about" className="text-white bg-[#192441] hover:bg-[#3F51B5] font-medium rounded-lg text-sm mx-5 px-8 py-2.5 mr-2">About</Link>
    <Link href="/projects" className="text-white bg-[#192441] hover:bg-[#3F51B5] font-medium rounded-lg text-sm mx-5 px-8 py-2.5 mr-2">Projects</Link>
</nav>
})

Navbar.displayName = "Navbar"
export default Navbar;
