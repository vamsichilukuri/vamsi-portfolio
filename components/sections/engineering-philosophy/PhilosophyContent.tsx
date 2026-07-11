/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PRINCIPLES = [
    "Solve real business problems",
    "Build scalable and maintainable systems",
    "Performance is a feature",
    "Learn continuously",
    "Build AI with measurable impact",
];

export default function PhilosophyContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
        >
            {/* Section Label */}
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                {/* The Engineer Behind the Work */}
                {/* Beyond the Code */}
                Engineering Principles
            </p>

            {/* Heading */}
            <h2 className="mt-6 lg:text-7xl font-bold leading-tight text-white lg:text-6xl">
                Building software
                <br />
                <span className="text-zinc-400">with purpose.</span>
            </h2>

            {/* Intro */}
            <p className="mt-8 text-lg leading-8 text-zinc-400">
                I believe great software isn't measured by the amount of code
                written, but by the real problems it solves.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
                Over the last 6+ years I've built enterprise platforms for
                financial services while continuously exploring AI, cloud-native
                architecture and intelligent automation.
            </p>

            <div className="mt-10">
                <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Principles
                </p>

                <div className="space-y-4">
                    {PRINCIPLES.map((principle) => (
                        <div
                            key={principle}
                            className="flex items-center gap-4"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                                <Check className="h-4 w-4 text-emerald-400" />
                            </div>

                            <span className="text-base text-zinc-300">
                                {principle}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
