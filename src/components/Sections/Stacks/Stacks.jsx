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
            <div className="stacks-list grid grid-cols-1 md:grid-cols-3 gap-3">
                <StackItem
                    link="https://laravel.com/"
                    iconName="laravel"
                    stackName="Laravel"
                    stackDesc="PHP Framework"
                />
                <StackItem
                    link="https://react.dev/"
                    iconName="react"
                    stackName="React"
                    stackDesc="JS framework"
                />
                <StackItem
                    link="https://nextjs.org/"
                    iconName="nextjs"
                    stackName="Next js"
                    stackDesc="JS framework"
                />
                <StackItem
                    link="https://nodejs.org/fr"
                    iconName="nodejs"
                    stackName="Node js"
                    stackDesc="JS runtime env"
                />
                <StackItem
                    link="https://expressjs.com/"
                    iconName="expressjs"
                    stackName="Express js"
                    stackDesc="Js Framework"
                />
                <StackItem
                    link="https://www.mongodb.com/"
                    iconName="mongodb"
                    stackName="Mongodb"
                    stackDesc="NoSQL database"
                />
                <StackItem
                    link="https://www.python.org/"
                    iconName="python"
                    stackName="Python"
                    stackDesc="Programming language"
                />
                <StackItem
                    link="http://php.net/"
                    iconName="php"
                    stackName="PHP"
                    stackDesc="Programming language"
                />
                <StackItem
                    link="http://java.com/fr/"
                    iconName="java"
                    stackName="Java"
                    stackDesc="Programming language"
                />
                <StackItem
                    link="https://html.com/"
                    iconName="html"
                    stackName="Html"
                    stackDesc="markup language"
                />
                <StackItem
                    link="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    iconName="css"
                    stackName="Css"
                    stackDesc="style sheet language"
                />
                <StackItem
                    link="https://www.javascript.com/"
                    iconName="javascript"
                    stackName="Javascript"
                    stackDesc="Programming language"
                />
                <StackItem
                    link="https://getbootstrap.com/"
                    iconName="bootstrap"
                    stackName="Bootstrap"
                    stackDesc="CSS framework"
                />
                <StackItem
                    link="https://tailwindcss.com/"
                    iconName="tailwind"
                    stackName="Tailwind"
                    stackDesc="CSS framework"
                />
                <StackItem
                    link="https://www.mysql.com/"
                    iconName="mysql"
                    stackName="MySQL"
                    stackDesc="database management system"
                />
                <StackItem
                    link="https://www.postgresql.org/"
                    iconName="postgresql"
                    stackName="PostgreSQL"
                    stackDesc="database management system"
                />
                <StackItem
                    link="https://graphql.org/"
                    iconName="graphql"
                    stackName="GraphQL"
                    stackDesc="API query language"
                />
                <StackItem
                    link="https://www.figma.com/"
                    iconName="figma"
                    stackName="Figma"
                    stackDesc="Interface design Tool"
                />
            </div>
        </section>
    )
}