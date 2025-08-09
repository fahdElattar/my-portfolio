import { SectionHead } from "@/components/SectionHead/SectionHead"
import { StackItem } from "@/components/StackItem/StackItem"

export const Stacks = () => {
    return (
        <section id="Stacks">
            <SectionHead 
                title={"My Stacks"}
                iconName={"stacks"}
                description={"Commitment to staying updated with the latest design trends and techniques."}
            />
            <div className="stacks-list grid grid-cols-2 gap-3">
                <StackItem
                    link="https://www.figma.com"
                    iconName="figma"
                    stackName="Figma"
                    stackDesc="Interface Design Tool"
                />
            </div>
        </section>
    )
}