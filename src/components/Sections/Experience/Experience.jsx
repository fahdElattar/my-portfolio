import { ExperienceItem } from "@/components/ExperienceItem/ExperienceItem";
import { SectionHead } from "@/components/SectionHead/SectionHead";

export const Experience = () => {
    return (
        <section id="Experience">
            <SectionHead 
                title={"My Experience"}
                iconName={"bag-icon"}
                description={"Navigating diverse environments with adaptability and expertise for holistic solutions."}
            />
            <div className="experience-items grid grid-cols-1 gap-3">
                <ExperienceItem
                    iconName={"vortex"}
                    companyName={"Vortex"}
                    companyLink={"Vortex.co"}
                    companyType={"Tech Firm"}
                    startDate={"2023"}
                    endDate={"Present"}
                    role={"Product Designer"}
                    roleDesc={"Headed product design initiatives, defined design strategy, and ensured alignment with business objectives for market-leading products."}
                />
                <ExperienceItem
                    iconName={"pixel"}
                    companyName={"PixelWorks"}
                    companyLink={"pixelWorks.io"}
                    companyType={"Design Studio"}
                    startDate={"2022"}
                    endDate={"2023"}
                    role={"Senior UI/UX Designer"}
                    roleDesc={"Provided leadership in UI/UX design, mentored junior designers, and collaborated with cross-functional teams for product excellence."}
                />
            </div>
        </section>
    )
}