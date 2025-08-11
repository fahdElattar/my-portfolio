import Link from "next/link"
import "./ProjectItem.css"
import Image from "next/image"

export const ProjectItem = ({projectImg, projectName, projectLink, projectType, projectPages, projectTheme, projectDesc}) => {
    return (
        <div className="project-item">
            <div className="project-img">
                <img src={`/images/${projectImg}`} />
            </div>
            <div className="project-details">
                <div className="project-heading">
                    <h2>{projectName}</h2>
                    <Link href='#' className="project-link">
                        <Image src="/icons/link.svg" width={20} height={20} alt="icon" />
                        <p>{projectLink}</p>
                    </Link>
                </div>
                <ul className="more-details">
                    <li>{projectType}</li>
                    <li>{projectPages}</li>
                    <li>{projectTheme}</li>
                </ul>
                <p className="project-desc">{projectDesc}</p>
            </div>
        </div>
    )
}
