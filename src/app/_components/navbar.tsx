import React from "react";
import { cn } from "~/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Navbar = React.forwardRef<HTMLElement>(() => {
    return <nav className={cn("flex items-center h-20 bg-gray-900", "sticky", "top-0")}>
        <Link href="/" className={"pr-5"}>
            <Image src={"/pfp_nobg.svg"} alt="pfp" width={"48"} height={"48"} className="size-20 aspect-square" />
        </Link>
        <Link href="/projects" className="text-white bg-[#192441] hover:bg-[#3F51B5] font-medium rounded-lg text-sm mx-5 px-8 py-2.5 mr-2">Projekter</Link>
        {/* <Link href="/blog" className="text-white bg-[#192441] hover:bg-[#3F51B5] font-medium rounded-lg text-sm mx-5 px-8 py-2.5 mr-2">blog</Link> */}
    </nav>
})

Navbar.displayName = "Navbar"
export default Navbar;
