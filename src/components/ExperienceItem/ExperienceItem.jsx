import Image from "next/image"
import "./ExperienceItem.css"

export const ExperienceItem = ({iconName, companyName, companyLink, companyType, date, role, roleDesc}) => {
    return (
        <div className="exp-item">
            <div className="exp-item-heading">
                <div className="left-exp-heading">
                    <div className="company-main">
                        <div className="exp-icon">
                            <Image src={`/icons/${iconName}.svg`} alt="icon" width={30} height={30}/>
                        </div>
                        <div className="company-details">
                            <h3>{companyName}</h3>
                            <span>{companyLink}</span>
                        </div>
                    </div>
                    <span className="company-type">{companyType}</span>
                </div>
                <h1 className="right-exp-heading">{date}</h1>
            </div>
            <div className="exp-item-body">
                <h3 className="role-heading">{role}</h3>
                <p className="role-description">{roleDesc}</p>
            </div>
        </div>
    )
}
