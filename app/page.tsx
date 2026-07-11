import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/contact/Contact";
import EngineeringPhilosophy from "@/components/sections/engineering-philosophy";
import Experience from "@/components/sections/experience/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/projects/Projects";
import Recognition from "@/components/sections/Recognition";
import Skills from "@/components/sections/skills/Skills";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="bg-[#09090B] text-white">
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <EngineeringPhilosophy />
                <Recognition />
                <Contact />
            </main>
        </>
    );
}
