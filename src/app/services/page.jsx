import { Layout } from "@/components/Layout/Layout";
import { SectionHead } from "@/components/SectionHead/SectionHead";
import { Projects } from "@/components/Sections/Projects/Projects";
import { Stacks } from "@/components/Sections/Stacks/Stacks";
import { Words } from "@/components/Sections/Words/Words";

export default function Services() {
    return (
        <Layout activeSidebarLink="services">
            <section id="Services">
                <SectionHead
                    title={"My Services"}
                    iconName={"thunder"}
                    description={"Formulating comprehensive strategies to meet your design goals and exceed expectations."}
                />
                <div className="services-list grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* <ServiceItem /> */}
                </div>
            </section>
            <Stacks />
            <Projects />
            <Words />
        </Layout>
    );
}