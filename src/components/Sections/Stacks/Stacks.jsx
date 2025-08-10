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
                <StackItem
                    link="https://www.notion.com"
                    iconName="notion"
                    stackName="notion"
                    stackDesc="productivity Tool"
                />
                <StackItem
                    link="https://www.webflow.com"
                    iconName="webflow"
                    stackName="webflow"
                    stackDesc="No code design Tool"
                />
                <StackItem
                    link="https://www.framer.com"
                    iconName="framer"
                    stackName="framer"
                    stackDesc="No code design Tool"
                />
                <StackItem
                    link="https://www.slack.com"
                    iconName="slack"
                    stackName="slack"
                    stackDesc="productivity Tool"
                />
                <StackItem
                    link="https://www.asana.com"
                    iconName="asana"
                    stackName="asana"
                    stackDesc="Productivity Tool"
                />
            </div>
        </section>
    )
}