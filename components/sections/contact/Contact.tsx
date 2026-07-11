"use client";

import ContactHeader from "@/components/sections/contact/ContactHeader";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import ContactLinks from "@/components/sections/contact/ContactLinks";
import Footer from "@/components/sections/contact/Footer";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#09090B] pt-44 pb-32"
        >
            <div className="mx-auto max-w-[1400px] px-8 lg:px-12 xl:px-16">
                <ContactHeader />

                <ContactCTA />

                <ContactLinks />

                <Footer />
            </div>
        </section>
    );
}
