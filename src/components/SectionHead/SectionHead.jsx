import "./SectionHead.css"
import Image from "next/image"

export const SectionHead = ({title, iconName, description, children}) => {
    return (
        <div className="section-heading">
            <div className="section-title">
                <h1>
                    <Image src={`/icons/${iconName}.svg`} alt="icon" width={30} height={30}/>
                    <span className="truncate">{title}</span>
                </h1>
            </div>
            <p className="section-description">{description}</p>
            {children}
        </div>
    )
}
