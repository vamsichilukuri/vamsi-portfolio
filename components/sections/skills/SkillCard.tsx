"use client";

import { motion } from "framer-motion";

type SkillCardProps = {
    title: string;
    description: string;
    items: string[];
};

export default function SkillCard({
    title,
    description,
    items,
}: SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
                group
                relative
                min-h-[340px]
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-10
                transition-all
                duration-500
                hover:border-white/20
                hover:bg-white/[0.05]
                hover:shadow-[0_0_60px_rgba(255,255,255,0.05)]
            "
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {title}
                </h3>

                <p className="mt-5 text-[15px] leading-8 text-zinc-400">
                    {description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {items.map((item) => (
                        <span
                            key={item}
                            className="
                                rounded-full
                                border
                                border-white/10
                                bg-white/[0.03]
                                px-3
                                py-1.5
                                text-xs
                                font-medium
                                text-zinc-300
                                transition-all
                                duration-300
                                hover:border-white/20
                                hover:bg-white/10
                                hover:text-white
                            "
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
