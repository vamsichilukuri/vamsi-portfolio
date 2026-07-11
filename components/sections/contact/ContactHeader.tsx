/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";

export default function ContactHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-4xl text-center"
        >
            {/* Background Glow */}
            <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
                Let's Connect
            </p>

            <h2 className="text-5xl font-black leading-[1] tracking-[-0.05em] text-white md:text-6xl">
                Let's build
                <br />
                <span className="text-zinc-400">something meaningful.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                I'm always interested in discussing enterprise software,
                AI-powered products, scalable systems and opportunities to solve
                meaningful engineering challenges.
            </p>
        </motion.div>
    );
}
