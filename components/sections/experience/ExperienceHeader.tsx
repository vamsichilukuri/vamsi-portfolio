/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, Variants } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease,
        },
    },
};

export default function ExperienceHeader() {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl"
        >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
                Experience
            </p>

            <h2 className="text-5xl font-black leading-[1] tracking-[-0.05em] text-white md:text-6xl">
                A journey of building
                <br />
                <span className="text-zinc-400">
                    enterprise software at scale.
                </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                Since beginning my professional journey in{" "}
                <span className="font-semibold text-white">July 2020</span>,
                I've progressed from{" "}
                <span className="font-semibold text-white">
                    Junior Fullstack Developer
                </span>{" "}
                to{" "}
                <span className="font-semibold text-white">
                    Senior Software Developer
                </span>
                , delivering enterprise-grade solutions across authentication,
                configurable platforms, administration systems, reporting, and
                modern full-stack architecture for the financial services
                industry.
            </p>
        </motion.div>
    );
}
