import "./ProjectItem.css"
import Image from "next/image"

export const ProjectItem = ({projectImg, projectName, projectLink, projectSmallDesc, projectFrameworks, projectDesc}) => {
    return (
        <div className="project-item">
            <div className="project-img">
                <img src={`/images/${projectImg}`} />
            </div>
            <div className="project-details">
                <div className="project-heading">
                    <h2>{projectName}</h2>
                    <a href={projectLink} className="project-link">
                        <Image src="/icons/link.svg" width={20} height={20} alt="icon" />
                        <p>Check it out</p>
                    </a>
                </div>
                <ul className="more-details">
                    <li>{projectSmallDesc}</li>
                    <li>{projectFrameworks}</li>
                </ul>
                <p className="project-desc">{projectDesc}</p>
            </div>
        </div>
    )
}
