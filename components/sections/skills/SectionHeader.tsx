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
                Technical Expertise
            </p>

            <h2 className="text-5xl font-black leading-[1] tracking-[-0.05em] text-white md:text-6xl">
                Engineering skills
                <br />
                <span className="text-zinc-400">
                    built through real-world experience.
                </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                From enterprise frontend development to cloud-native
                infrastructure and AI engineering, I focus on building scalable,
                maintainable, and high-performance software systems.
            </p>
        </motion.div>
    );
}
