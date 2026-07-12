"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

import logo from "@/public/images/logo-bw.png";
import { NAV_ITEMS } from "./nav-items";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* Menu Button */}

            <button
                onClick={() => setIsOpen(true)}
                aria-label="Open navigation menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            >
                <Menu size={20} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={closeMenu}
                            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
                        />

                        {/* Drawer */}

                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="fixed right-0 top-0 z-50 flex h-screen w-[86%] max-w-sm flex-col border-l border-white/10 bg-[#09090B] px-8 py-6"
                        >
                            {/* Header */}

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={logo}
                                        alt="VC Logo"
                                        width={40}
                                        height={40}
                                        className="rounded-md"
                                    />

                                    <div>
                                        <p className="font-semibold text-white">
                                            Vamsi Chilukuri
                                        </p>

                                        <p className="text-xs text-zinc-500">
                                            Senior Full Stack Developer
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={closeMenu}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Divider */}

                            <div className="my-8 h-px bg-white/10" />

                            {/* Navigation */}

                            <nav className="flex flex-col gap-1">
                                {NAV_ITEMS.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{
                                            opacity: 0,
                                            x: 30,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            delay: 0.08 * index,
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="block rounded-xl px-4 py-4 text-lg font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Bottom */}

                            <div className="mt-auto pt-8">
                                <a
                                    href="/resume/Vamsi_Chilukuri_Sr_Fullstack_Dev_Resume.pdf"
                                    download
                                    className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-medium text-black transition hover:bg-zinc-200"
                                >
                                    Download Resume
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
