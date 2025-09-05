import Image from "next/image"
import "./RunningItem.css"

export const RunningItem = ({ name }) => {
    return (
        <div className="running-item">
            <Image src="/icons/check.svg" alt="service" width={22} height={22} />
            <p>{name}</p>
        </div>
    )
}
