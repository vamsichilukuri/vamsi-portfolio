/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

// import heroImage from "@/public/images/hero-removebg-preview.png";
import heroImage from "@/public/images/hero.jpeg";
// import heroImage from "@/public/images/hero-1.png";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay,
            ease: "easeOut" as const,
        },
    }),
};

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden bg-[#09090B]">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[-220px] h-[850px] w-[850px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[180px]" />
            </div>

            <div className="mx-auto flex min-h-screen items-center max-w-[1400px] px-8 pt-24 lg:px-12 lg:pt-28 xl:px-16">
                <div className="grid w-full items-center gap-24 lg:grid-cols-[1fr_0.9fr]">
                    <div>
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-5 py-2.5 text-sm text-zinc-300 backdrop-blur"
                        >
                            <span className="h-2 w-2 rounded-full rounded-full bg-emerald-400" />
                            Available for opportunities
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.1}
                            className="mt-10 max-w-4xl text-6xl font-black tracking-[-0.06em] leading-[0.88] text-white md:text-7xl xl:text-[7rem]"
                        >
                            Building
                            <br />
                            the future of
                            <br />
                            <span className="text-zinc-400">
                                enterprise software
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.2}
                            className="mt-8 max-w-lg text-lg leading-8 text-zinc-400"
                        >
                            I'm{" "}
                            <span className="font-semibold text-white">
                                Vamsi Chilukuri
                            </span>
                            , a Senior Full Stack Developer with experience
                            building enterprise platforms, cloud-native
                            applications, and AI-powered solutions. I focus on
                            creating scalable software that solves real business
                            problems with clean architecture and modern
                            engineering practices.
                            {/* , a Senior Frontend Engineer with 6+ years of
                            experience building enterprise applications and
                            modern AI-powered products with a strong focus on
                            performance, scalability, and user experience. */}
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.3}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <motion.div
                                whileHover={{ y: -3, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    href="#projects"
                                    className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-black shadow-lg transition"
                                >
                                    View Projects
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -3, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <a
                                    // href="https://docs.google.com/document/d/1PQvo2DfERVKx131PxJ003A8av64tyROR/edit"
                                    href="/resume/Vamsi_Chilukuri_Sr_Fullstack_Dev_Resume.pdf"
                                    download
                                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-7 py-4 font-medium text-white transition hover:border-white hover:bg-zinc-900"
                                >
                                    Resume
                                    <Download size={18} />
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.4}
                            className="mt-12 flex gap-10"
                        >
                            {[
                                ["6+", "Years"],
                                ["15+", "Projects"],
                                ["AI", "Focused"],
                            ].map(([value, label]) => (
                                <div key={label}>
                                    <p className="text-3xl font-bold text-white">
                                        {value}
                                    </p>
                                    <p className="mt-1 text-sm text-zinc-500">
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center"
                    >
                        {/* Large background glow */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="h-[750px] w-[750px] rounded-full bg-white/[0.03] blur-[150px]" />
                        </div>

                        {/* Floating portrait */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{
                                y: -4,
                                scale: 1.02,
                            }}
                            className="relative z-10"
                        >
                            <figure>
                                <Image
                                    src={heroImage}
                                    alt="Vamsi Chilukuri - Senior Full Stack Developer"
                                    priority
                                    className="relative z-10 w-[560px] xl:w-[650px] object-contain select-none pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_60%,rgba(0,0,0,0.96)_75%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_60%,rgba(0,0,0,0.96)_75%,transparent_100%)]"
                                />
                            </figure>

                            {/* Left fade */}
                            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#09090B] to-transparent" />

                            {/* Right fade */}
                            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#09090B] to-transparent" />

                            {/* Bottom fade */}
                            <div className="pointer-events-none absolute bottom-0 left-0 h-52 w-full bg-gradient-to-t from-[#09090B] via-[#09090B]/70 to-transparent" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500"
            >
                ↓
            </motion.div>
        </section>
    );
}
