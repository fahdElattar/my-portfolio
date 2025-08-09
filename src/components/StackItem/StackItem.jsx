import Image from "next/image";
import "./StackItem.css";

export const StackItem = ({link, iconName, stackName, stackDesc}) => {
    return (
        <a href={`${link}`} className="stack-item">
            <div className="item-left">
                <div className="stack-logo">
                    <Image src={`/icons/${iconName}.svg`} width={30} height={30} alt="icon" />
                </div>
                <div className="stack-details">
                    <h3 className="stack-name">{stackName}</h3>
                    <span className="stack-desc">{stackDesc}</span>
                </div>
            </div>
            <Image className="arrow-right" src={"/icons/arrow-right.svg"} width={24} height={24} alt="icon" />
        </a>
    )
}
