import ExperienceHeader from "@/components/sections/experience/ExperienceHeader";
import ImpactStats from "@/components/sections/experience/ImpactStats";
import ExperienceCard from "@/components/sections/experience/ExperienceCard";

export default function Experience() {
    return (
        <section id="experience" className="bg-[#09090B] pt-24 pb-28">
            <div className="mx-auto max-w-[1400px] px-8 lg:px-12 xl:px-16">
                <ExperienceHeader />

                <ImpactStats />

                <ExperienceCard />
            </div>
        </section>
    );
}
