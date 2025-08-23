import { SectionHead } from "@/components/SectionHead/SectionHead"
import { WordItem } from "@/components/WordItem/WordItem"
import Image from "next/image"

export const Words = () => {
    return (
        <section id="Words">
            <SectionHead
                title={"Words From Happy Clients"}
                iconName={"shooting-star"}
                description={"Discover what satisfied clients have to say about their experiences working with me."}
            />
            <div className="words-list grid grid-cols-1 md:grid-cols-2 gap-2">
                <WordItem 
                    avatarImg="woman-1"
                    avatarName="Sarah Thompson"
                    avatarLocation="New York City, USA."
                    avatarAccount="https://www.google.com"
                    comment="I am thrilled with the website for my business. His ability to translate my vision into a visually stunning..."
                />
                <WordItem 
                    avatarImg="man-1"
                    avatarName="John Anderson"
                    avatarLocation="Sydney, Australia."
                    avatarAccount="https://www.google.com"
                    comment="Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional."
                />
                <WordItem 
                    avatarImg="man-2"
                    avatarName="Mark Davis"
                    avatarLocation="London, UK."
                    avatarAccount="https://www.google.com"
                    comment="Pragadesh’s creativity and technical expertise transformed our website into a visually stunning platform."
                />
                <WordItem 
                    avatarImg="woman-2"
                    avatarName="Laura Adams"
                    avatarLocation="Madrid, Spain."
                    avatarAccount="https://www.google.com"
                    comment="Pragadesh is a artist when it comes to website. He transformed my outdated website into a modern masterpiece."
                />
            </div>
        </section>
    )
}
