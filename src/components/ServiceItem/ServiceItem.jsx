import Image from "next/image";
import "./ServiceItem.css";

export const ServiceItem = ({iconName, ServiceName, ServiceDesc}) => {
    return (
        <a href={`Services`} className="service-item">
            <div className="service-heading">
                <div className="left-heading">
                    <div className="service-logo">
                        <Image src={`/icons/${iconName}.svg`} width={30} height={30} alt="icon" />
                    </div>
                    <h3 className="service-name">{ServiceName}</h3>
                </div>
                <div className="right-heading">
                    <Image className="arrow-right" src={"/icons/arrow-right.svg"} width={30} height={30} alt="icon" />
                </div>
            </div>
            <div className="service-body">
                <span className="service-desc">{ServiceDesc}</span>
            </div>
        </a>
    )
}
