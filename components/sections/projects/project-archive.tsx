"use client";

import { motion } from "framer-motion";
import ProjectRow from "./project-row";
import { PROJECT_ARCHIVE } from "./project-data";

export default function ProjectArchive() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24"
        >
            <p className="mb-10 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
                Engineering Archive
            </p>

            <div>
                {PROJECT_ARCHIVE.map((project) => (
                    <ProjectRow key={project.title} {...project} />
                ))}
            </div>
        </motion.div>
    );
}
