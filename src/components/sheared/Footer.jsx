"use client"

import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" border-t mt-10">
            <div className="container mx-auto px-4 py-10">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Logo + About */}
                    <div>
                        <h1 className="text-xl font-bold mb-3">
                            ☽ IMAGE ☽ LAB ☽
                        </h1>
                        <p className="text-gray-600 text-sm">
                            AI powered image generation platform. Create, explore and download stunning visuals easily.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h2 className="font-semibold mb-3">Quick Links</h2>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/about" className="hover:text-black">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-black">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h2 className="font-semibold mb-3">Follow Us</h2>
                        <div className="flex gap-4 text-gray-600 text-sm">
                            <Link href="#" className="hover:text-black">Facebook</Link>
                            <Link href="#" className="hover:text-black">Twitter</Link>
                            <Link href="#" className="hover:text-black">Instagram</Link>
                            <Link href="#" className="hover:text-black">GitHub</Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t mt-8 pt-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} IMAGE LAB. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;