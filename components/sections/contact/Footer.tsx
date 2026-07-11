"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-28 border-t border-white/10 pt-10"
        >
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                <p className="text-sm text-zinc-600">
                    © {new Date().getFullYear()} Vamsi Chilukuri. All rights
                    reserved.
                </p>

                <p className="text-sm text-zinc-600">
                    Designed & Engineered with{" "}
                    <span className="text-zinc-400 hover:text-zinc-300">
                        Next.js • TypeScript • Tailwind CSS • Framer Motion
                    </span>
                </p>
            </div>
        </motion.footer>
    );
}
