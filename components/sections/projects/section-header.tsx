"use client";

import { motion } from "framer-motion";

export default function SectionHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
        >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
                Selected Engineering Work
            </p>

            <h2 className="text-5xl font-black leading-[1] tracking-[-0.05em] text-white md:text-6xl">
                Building systems
                <br />
                <span className="text-zinc-400">
                    that solve real-world problems.
                </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                A collection of engineering work focused on solving complex
                business problems through scalable software, AI systems and
                cloud-native architecture.
            </p>
        </motion.div>
    );
}
