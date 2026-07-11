"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
    title: string;
    category: string;
    year: string;
    description: string;
    technologies: string[];
    href: string;
};

export default function ProjectRow({
    title,
    category,
    year,
    description,
    technologies,
    href,
}: Props) {
    return (
        <Link
            href={href}
            className="group block border-b border-white/5 py-10 transition-all duration-300 hover:border-white/20"
        >
            <div className="grid gap-8 lg:grid-cols-[280px_1fr_auto] lg:items-start">
                {/* Left */}
                <div>
                    <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-zinc-100">
                        {title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                        <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-zinc-300">
                            {category}
                        </span>

                        <span className="text-zinc-500">{year}</span>
                    </div>
                </div>

                {/* Center */}

                <div>
                    <p className="max-w-3xl text-[17px] leading-8 text-zinc-400">
                        {description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400 transition-colors group-hover:border-white/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right */}

                {/* <div className="flex items-center justify-end">
                    <ArrowUpRight
                        size={22}
                        className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                </div> */}
            </div>
        </Link>
    );
}
