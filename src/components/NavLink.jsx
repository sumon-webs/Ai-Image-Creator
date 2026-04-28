'use client'
import Link from "next/link";

const NavLink = ({ children, href }) => {

    return (
        <div>
            <Link
                href={href} >{children}
            </Link>
        </div>
    );
};

export default NavLink;