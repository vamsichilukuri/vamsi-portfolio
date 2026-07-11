import PhilosophyContent from "@/components/sections/engineering-philosophy/PhilosophyContent";
import PhilosophyImage from "@/components/sections/engineering-philosophy/PhilosophyImage";

export default function EngineeringPhilosophy() {
    return (
        <section id="about" className="mx-auto max-w-7xl px-6 py-40">
            <div className="grid items-center gap-28 lg:grid-cols-2">
                <PhilosophyContent />
                <PhilosophyImage />
            </div>
        </section>
    );
}
