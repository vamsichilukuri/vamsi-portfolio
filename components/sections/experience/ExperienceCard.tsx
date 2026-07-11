"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { EXPERIENCE } from "./experience-data";

export default function ExperienceCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24 rounded-[32px] border border-white/5 bg-white/[0.02] p-10 lg:p-14"
        >
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
                {/* LEFT */}

                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                        Current Role
                    </p>

                    <h3 className="mt-6 text-4xl font-bold text-white">
                        {EXPERIENCE.role}
                    </h3>

                    <p className="mt-4 text-lg text-zinc-300">
                        {EXPERIENCE.company}
                    </p>

                    <p className="mt-2 text-zinc-500">{EXPERIENCE.client}</p>

                    <p className="mt-8 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
                        {EXPERIENCE.period}
                    </p>
                </div>

                {/* RIGHT */}

                <div>
                    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
                        Highlights
                    </p>

                    <div className="space-y-5">
                        {EXPERIENCE.highlights.map((item) => (
                            <div key={item} className="flex items-start gap-4">
                                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10">
                                    <Check
                                        size={14}
                                        className="text-emerald-400"
                                    />
                                </div>

                                <p className="leading-7 text-zinc-300">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex flex-wrap gap-3">
                        {EXPERIENCE.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
