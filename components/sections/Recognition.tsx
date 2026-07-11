/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Award, ArrowUpRight, X } from "lucide-react";

import trophy from "@/public/images/recognition/a-04-2021.png";
import cert1 from "@/public/images/recognition/a-02-2021.png";
import cert2 from "@/public/images/recognition/a-05-2021.png";
import { hr } from "framer-motion/client";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut" as const,
        },
    },
};

export default function Recognition() {
    const [selected, setSelected] = useState<StaticImageData | null>(null);

    const certificates = [
        {
            image: cert1,
            title: "Certificate of Appreciation",
            date: "February 2021",
            href: "https://drive.google.com/file/d/1ITK285M3t5KxGQK6e-xx4BEo9smXYUCH/view?usp=drive_link",
        },
        {
            image: cert2,
            title: "Certificate of Appreciation",
            date: "May 2021",
            href: "https://drive.google.com/file/d/1uS-iHtK08rzRuOOXm1lH-AXr-gYdtDud/view?usp=drive_link",
        },
    ];

    return (
        <>
            <section
                id="recognition"
                className="border-t border-white/5 bg-[#09090B] py-32"
            >
                <div className="mx-auto max-w-7xl px-8">
                    {/* Heading */}

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
                            Recognition & Achievements
                        </p>

                        <h2 className="text-5xl font-black tracking-[-0.05em] text-white md:text-6xl">
                            Awards earned through
                            <br />
                            <span className="text-zinc-400">
                                dedication and impact.
                            </span>
                        </h2>

                        <p className="mt-8 text-lg leading-8 text-zinc-400">
                            Recognition received for ownership, technical
                            excellence and consistently delivering measurable
                            business value through enterprise software.
                        </p>
                    </motion.div>

                    <div className="mt-20 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
                        {/* Trophy */}

                        <motion.div
                            whileHover={{
                                y: -10,
                                scale: 1.01,
                            }}
                            transition={{ duration: 0.35 }}
                            className="group relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-xl"
                        >
                            {/* Glow */}

                            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[160px]" />

                            {/* Shine */}

                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                            <div className="relative z-10 p-10">
                                <Image
                                    src={trophy}
                                    alt="Employee Appreciation Award"
                                    className="mx-auto h-[420px] w-auto object-contain"
                                />

                                <div className="mt-10 flex items-center gap-3">
                                    <Award
                                        size={24}
                                        className="text-yellow-400"
                                    />

                                    <span className="text-sm uppercase tracking-[0.3em] text-yellow-300">
                                        Employee Appreciation
                                    </span>
                                </div>

                                <h3 className="mt-5 text-4xl font-bold text-white">
                                    Outstanding Contribution Award
                                </h3>

                                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                                    Awarded for exceptional dedication,
                                    ownership and consistently delivering
                                    enterprise software that created measurable
                                    business impact.
                                </p>
                            </div>
                        </motion.div>

                        {/* Certificates */}

                        <div className="space-y-8">
                            {certificates.map((item) => (
                                <motion.button
                                    key={item.date}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setSelected(item.image)}
                                    className="group relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] text-left backdrop-blur-xl"
                                >
                                    {/* Shine */}

                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="aspect-[1.45] w-full object-cover"
                                    />

                                    <div className="relative z-10 p-6">
                                        <h4 className="text-xl font-semibold text-white">
                                            {item.title}
                                        </h4>

                                        <p className="mt-2 text-zinc-500">
                                            {item.date}
                                        </p>

                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={item.href}
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white"
                                        >
                                            View Certificate
                                            <ArrowUpRight size={16} />
                                        </a>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}

            {selected && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-8 backdrop-blur-md"
                    onClick={() => setSelected(null)}
                >
                    <button className="absolute right-8 top-8 rounded-full border border-white/20 p-3 text-white">
                        <X size={22} />
                    </button>

                    <Image
                        src={selected}
                        alt=""
                        className="max-h-[90vh] w-auto rounded-2xl shadow-2xl"
                    />
                </div>
            )}
        </>
    );
}
