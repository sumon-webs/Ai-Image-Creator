'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
    const pathName = usePathname()
    return (
        <div>
            <Link
            className={pathName === href ? ' border-b-2 border-black' : ""}
                href={href} >{children}
            </Link>
        </div>
    );
};

export default NavLink;