/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import philosophyImage from "@/public/images/full.png"; // <-- Your second image

export default function PhilosophyImage() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
        >
            {/* Glow */}
            <div className="absolute inset-0 scale-110 rounded-[36px] bg-white/5 blur-3xl" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-zinc-900 max-w-lg">
                <Image
                    src={philosophyImage}
                    alt="Vamsi Chilukuri - Senior Full Stack Developer"
                    priority
                    className="h-auto w-full object-cover transition duration-700 hover:scale-105"
                />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                    <p className="text-xl font-semibold text-white">Business</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
                        Impact
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                    <p className="text-xl font-semibold text-white">Scalable</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
                        Systems
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                    <p className="text-xl font-semibold text-white">Growth</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
                        Mindset
                    </p>
                </div>
            </div>

            {/* Floating Quote Card */}
            {/* <div className="absolute -bottom-8 -left-8 max-w-xs rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
                <p className="text-sm leading-7 text-zinc-300">
                    "I enjoy solving engineering problems where software,
                    scalability and AI come together to create measurable
                    business value."
                </p>
            </div> */}
        </motion.div>
    );
}
