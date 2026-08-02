"use client";

import { motion } from "framer-motion";
import { IMPACT_STATS } from "@/components/sections/experience/experience-data";

export default function ImpactStats() {
    return (
        <div className="mt-20 grid gap-6 md:grid-cols-3">
            {IMPACT_STATS.map((item) => (
                <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        ease: "easeOut",
                    }}
                    // whileHover={{
                    //     y: -2,
                    // }}
                    className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
                >
                    <h3 className="text-5xl font-black tracking-tight text-white">
                        {item.value}
                    </h3>

                    <p className="mt-3 text-zinc-400">{item.label}</p>
                </motion.div>
            ))}
        </div>
    );
}
