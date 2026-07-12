"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import logo from "@/public/images/logo-bw.png";

import { NAV_ITEMS } from "@/components/navigation/nav-items";
import MobileMenu from "@/components/navigation/MobileMenu";

export default function Navbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#09090B]/95 backdrop-blur-md">
            <nav
                aria-label="Primary Navigation"
                className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-8 lg:px-12 xl:px-16"
            >
                {/* Logo */}

                <Link
                    href="/"
                    aria-label="Go to Home"
                    className="group flex items-center gap-3 transition-opacity hover:opacity-90"
                >
                    <Image
                        src={logo}
                        alt="VC Logo"
                        width={42}
                        height={42}
                        priority
                        className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="leading-tight">
                        <span className="text-[17px] font-semibold tracking-[0.02em] text-white">
                            Vamsi{" "}
                            <span className="font-light text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                                Chilukuri
                            </span>
                        </span>

                        {/* <span className="text-lg font-medium tracking-[0.04em] text-white">
                            Vamsi Chilukuri
                        </span>
                         */}

                        {/* <span className="text-[17px] font-semibold tracking-tight text-white">
                            Vamsi&nbsp;
                            <span className="font-light text-zinc-400">
                                Chilukuri
                            </span>
                        </span> */}

                        {/* <p className="text-xs text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                            Senior Full Stack Engineer
                        </p> */}
                    </div>
                </Link>

                {/* Navigation */}
                {/* Desktop Navigation */}

                <div className="hidden items-center gap-12 md:flex">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative text-sm text-zinc-400 transition duration-300 hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Right Side */}

                <div className="flex items-center gap-3">
                    {/* Desktop Resume */}

                    <a
                        href="/resume/Vamsi_Chilukuri_Sr_Fullstack_Dev_Resume.pdf"
                        download
                        className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-white/20 hover:bg-white/10 md:flex"
                    >
                        Resume
                        <ArrowUpRight size={16} />
                    </a>

                    {/* Mobile Navigation */}

                    <MobileMenu />
                </div>
            </nav>
        </header>
    );
}
