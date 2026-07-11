"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-14 flex justify-center"
        >
            <Link
                href="mailto:vamsifullstackdev@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
            >
                Get In Touch
                <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />
            </Link>
        </motion.div>
    );
}
