import { SectionHead } from "@/components/SectionHead/SectionHead"
import { ServiceItem } from "@/components/ServiceItem/ServiceItem"

export const Services = () => {
    return (
        <section id="Services">
            <SectionHead 
                title={"My Services"}
                iconName={"thunder"}
                description={"Formulating comprehensive strategies to meet your design goals and exceed expectations."}
            />
            <div className="services-list grid grid-cols-1 md:grid-cols-2 gap-3">
                <ServiceItem
                    iconName="layout"
                    ServiceName="Front-End Development"
                    ServiceDesc="Building responsive, modern, and user-friendly interfaces."
                />
                <ServiceItem
                    iconName="web"
                    ServiceName="Back-End Development"
                    ServiceDesc="Developing secure, scalable, and efficient server-side solutions."
                />
                <ServiceItem
                    iconName="brain"
                    ServiceName="AI & ML Engineering"
                    ServiceDesc="Designing intelligent models to power data-driven applications."
                />
                <ServiceItem
                    iconName="bar-chart"
                    ServiceName="Business Intelligence"
                    ServiceDesc="Transforming data into insights for smarter decision-making."
                />
            </div>
        </section>
    )
}
