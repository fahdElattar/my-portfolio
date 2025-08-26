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
                    ServiceName="Web Design"
                    ServiceDesc="Crafting visually captivating and user-friendly websites for online success."
                />
                <ServiceItem
                    iconName="web"
                    ServiceName="Web Development"
                    ServiceDesc="Bringing ideas to life with robust and scalable web solutions."
                />
                <ServiceItem
                    iconName="palette"
                    ServiceName="Graphic Design"
                    ServiceDesc="Creating visually stunning designs that captivate and engage audiences."
                />
                <ServiceItem
                    iconName="speed"
                    ServiceName="SEO Optimization"
                    ServiceDesc="Elevating online visibility and driving organic traffic through strategies."
                />
            </div>
        </section>
    )
}
