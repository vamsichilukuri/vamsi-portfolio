"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import logo from "@/public/images/logo-bw.png";

const NAV_ITEMS = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Experience",
        href: "#experience",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "Recognition",
        href: "#recognition",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

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

                <div className="hidden items-center gap-10 md:flex">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group relative text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
                        >
                            {item.label}

                            <span
                                className="
                                    absolute
                                    -bottom-2
                                    left-1/2
                                    h-[2px]
                                    w-0
                                    -translate-x-1/2
                                    rounded-full
                                    bg-white
                                    transition-all
                                    duration-300
                                    group-hover:w-full
                                "
                            />
                        </Link>
                    ))}
                </div>

                {/* Resume */}

                <a
                    href="/resume/Vamsi_Chilukuri_Sr_Fullstack_Dev_Resume.pdf"
                    download
                    className="
                        hidden
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-white/20
                        hover:bg-white/10
                        hover:shadow-lg
                        md:flex
                    "
                >
                    Resume
                    <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </a>
            </nav>
        </header>
    );
}
