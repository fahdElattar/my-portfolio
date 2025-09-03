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
                    companyName={"LAPSSII"}
                    companyLink={"ests.uca.ma"}
                    companyType={"Research lab"}
                    date={"2024"}
                    role={"Full stack developer / Machine Learning Engineer"}
                    roleDesc={"Engineered an AI-powered learning platform that analyzes student feedback to provide educators with actionable insights for course improvement."}
                />
                <ExperienceItem
                    iconName={"pixel"}
                    companyName={"Boukari Cabinet"}
                    companyLink={"website unavailable"}
                    companyType={"Medical Cabinet"}
                    date={"2023"}
                    role={"Full stack developer"}
                    roleDesc={"Developed and deployed a secure medical management application, centralizing patient records and appointments, to significantly improve office efficiency for healthcare professionals."}
                />
                <ExperienceItem
                    iconName={"athon"}
                    companyName={"Ciments Maroc"}
                    companyLink={"cimentsdumaroc.com"}
                    companyType={"Industrial company"}
                    date={"2022"}
                    role={"Full stack developer"}
                    roleDesc={"Developed a PHP-based scheduling web app that optimized resource planning and cross-sector coordination, enabling smoother operations and informed decision-making."}
                />
            </div>
        </section>
    )
}