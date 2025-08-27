import { Layout } from "@/components/Layout/Layout";
import { Projects } from "@/components/Sections/Projects/Projects";
import { Stacks } from "@/components/Sections/Stacks/Stacks";
import { Words } from "@/components/Sections/Words/Words";
import { Services as ServicesSection } from "@/components/Sections/Services/Services";

export default function Services() {
    return (
        <Layout activeSidebarLink="services">
            <ServicesSection />
            <Stacks />
            <Projects />
            <Words />
        </Layout>
    );
}