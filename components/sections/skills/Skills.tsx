import SectionHeader from "./SectionHeader";
import SkillCard from "./SkillCard";
import { SKILLS } from "./skills-data";

export default function Skills() {
    return (
        <section id="skills" className="bg-[#09090B] py-32">
            <div className="mx-auto max-w-[1400px] px-8 lg:px-12 xl:px-16">
                <SectionHeader />

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {SKILLS.map((skill) => (
                        <SkillCard
                            key={skill.title}
                            title={skill.title}
                            description={skill.description}
                            items={skill.items}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
