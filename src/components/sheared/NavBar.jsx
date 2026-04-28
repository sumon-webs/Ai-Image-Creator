"use client"

import { Button } from "@heroui/react";
import NavLink from "../NavLink";
import { useState } from "react";
import { ThemeSwitch } from "../ThemeSwich";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="shadow">
            <nav className="container mx-auto sticky top-0 z-40 w-full">

                {/* Top Bar */}
                <header className="flex h-16 items-center justify-between px-4 md:px-6">

                    {/* Logo */}
                    <h1 className="text-lg md:text-xl font-semibold">
                        ☽ IMAGE ☽ LAB ☽
                    </h1>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6 font-medium">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/all-photos">All Photos</NavLink></li>
                        <li><NavLink href="/profile">Profile</NavLink></li>
                    </ul>

                    {/* Right Side (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeSwitch />
                        <Button size="sm">Sign in</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-2xl"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </header>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden px-4 pb-4">
                        <ul className="flex flex-col gap-4 font-medium">
                            <li><NavLink href="/">Home</NavLink></li>
                            <li><NavLink href="/all-photos">All Photos</NavLink></li>
                            <li><NavLink href="/profile">Profile</NavLink></li>
                        </ul>

                        {/* Mobile Actions */}
                        <div className="mt-4 flex items-center gap-3">
                            <ThemeSwitch />
                            <Button fullWidth size="sm">Sign in</Button>
                        </div>
                    </div>
                )}

            </nav>
        </div>
    );
};

export default NavBar;