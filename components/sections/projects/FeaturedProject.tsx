"use client";

import { motion } from "framer-motion";
import { FEATURED_PROJECT } from "./project-data";

export default function FeaturedProject() {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4 }}
            className="mt-20 overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.02]"
        >
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                {/* LEFT */}

                <div className="flex flex-col justify-between p-10 lg:p-14">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
                            Featured Engineering Work
                        </p>

                        <h3 className="mt-6 text-5xl font-black tracking-tight text-white">
                            {FEATURED_PROJECT.title}
                        </h3>

                        <p className="mt-3 text-lg font-medium text-zinc-400">
                            {FEATURED_PROJECT.category}
                        </p>

                        <div className="mt-10 space-y-8">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                                    Problem
                                </p>

                                <p className="mt-3 leading-8 text-zinc-400">
                                    {FEATURED_PROJECT.problem}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                                    Solution
                                </p>

                                <p className="mt-3 leading-8 text-zinc-400">
                                    {FEATURED_PROJECT.solution}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                                    Impact
                                </p>

                                <p className="mt-3 leading-8 text-zinc-400">
                                    {FEATURED_PROJECT.impact}
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-3">
                            {FEATURED_PROJECT.technologies.map((tech) => (
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

                {/* RIGHT */}

                <div className="relative hidden items-center justify-center border-l border-white/5 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 lg:flex">
                    <div className="text-center">
                        <div className="text-8xl">🚀</div>

                        <p className="mt-8 text-xs uppercase tracking-[0.45em] text-zinc-500">
                            Industrial AI
                        </p>

                        <h4 className="mt-4 text-3xl font-bold text-white">
                            Project TITAN
                        </h4>

                        <div className="mx-auto mt-10 h-px w-32 bg-white/10" />

                        <p className="mt-8 max-w-xs text-sm leading-7 text-zinc-500">
                            Building the next generation of enterprise AI
                            platforms for intelligent manufacturing and
                            autonomous industrial operations.
                        </p>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
