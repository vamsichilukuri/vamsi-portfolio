"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CONTACT_LINKS } from "./contact.data";

export default function ContactLinks() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-24 border-t border-white/10 pt-12"
        >
            <div className="grid gap-10 md:grid-cols-4">
                {CONTACT_LINKS.map((link) =>
                    link?.label === "Resume" ? (
                        <a
                            key={link.label}
                            href={link.href}
                            download
                            className="group rounded-2xl p-4 transition-all duration-300 hover:bg-white/[0.03] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(255,255,255,0.18)]"
                        >
                            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                                {link.label}
                            </p>

                            <p className="mt-3 text-base text-zinc-400 transition-colors duration-300 group-hover:text-white">
                                {link.value}
                            </p>
                        </a>
                    ) : (
                        <Link
                            key={link.label}
                            href={link.href}
                            target={
                                link.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                            }
                            className="group rounded-2xl p-4 transition-all duration-300 hover:bg-white/[0.03] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(255,255,255,0.18)]"
                        >
                            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                                {link.label}
                            </p>

                            <p className="mt-3 text-base text-zinc-400 transition-colors duration-300 group-hover:text-white">
                                {link.value}
                            </p>
                        </Link>
                    ),
                )}
            </div>
        </motion.div>
    );
}
