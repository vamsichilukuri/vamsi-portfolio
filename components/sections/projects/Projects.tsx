import SectionHeader from "@/components/sections/projects/section-header";
import FeaturedProject from "@/components/sections/projects/FeaturedProject";
import ProjectArchive from "@/components/sections/projects/project-archive";

export default function Projects() {
    return (
        <section id="projects" className="bg-[#09090B] py-32">
            <div className="mx-auto max-w-[1400px] px-8 lg:px-12 xl:px-16">
                <SectionHeader />

                <FeaturedProject />

                <ProjectArchive />
            </div>
        </section>
    );
}
