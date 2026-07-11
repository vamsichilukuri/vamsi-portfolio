"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { EXPERIENCES } from "./experience-data";

export default function ExperienceCard() {
    return (
        <div className="mt-24 space-y-10">
            {EXPERIENCES.map((experience, index) => (
                <motion.div
                    key={experience?.period}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: index * 0.15,
                    }}
                    className="relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.02] p-10 lg:p-14"
                >
                    {/* Timeline Indicator */}

                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 via-emerald-500 to-transparent" />

                    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
                        {/* LEFT */}

                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                                {index === 0 ? "Current Role" : "Previous Role"}
                            </p>

                            <h3 className="mt-6 text-4xl font-bold text-white">
                                {experience?.role}
                            </h3>

                            <p className="mt-4 text-lg text-zinc-300">
                                {experience?.company}
                            </p>

                            <p className="mt-2 text-zinc-500">
                                {experience?.client}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300">
                                    {experience?.period}
                                </span>

                                {index === 0 && (
                                    <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                                        Current
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* RIGHT */}

                        <div>
                            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
                                Key Highlights
                            </p>

                            <div className="space-y-5">
                                {experience?.highlights?.map((item) => (
                                    <div
                                        className="flex items-start gap-4"
                                        key={item}
                                    >
                                        <div className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                                            <Check
                                                size={14}
                                                strokeWidth={2.5}
                                                className="text-emerald-400"
                                            />
                                        </div>

                                        <p className="flex-1 leading-7 text-zinc-300">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 flex flex-wrap gap-3">
                                {experience?.technologies?.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-white/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
