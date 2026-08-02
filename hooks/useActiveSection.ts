"use client";

import { useEffect, useState } from "react";

export function useActiveSection(defaultSection = "about") {
    const [activeSection, setActiveSection] = useState(defaultSection);

    useEffect(() => {
        const sections = Array.from(
            document.querySelectorAll<HTMLElement>("section[id]"),
        );

        if (!sections.length) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 120; // navbar offset

            let currentSection = defaultSection;

            sections.forEach((section) => {
                if (scrollPosition >= section.offsetTop) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [defaultSection]);

    return {
        activeSection,
        setActiveSection,
    };
}
