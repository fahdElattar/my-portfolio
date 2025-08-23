import Image from "next/image"
import "./QueryItem.css";
import { useState } from "react";

export const QueryItem = ({className}) => {
    const [opened, setOpened] = useState(false)

    return (
        <div className={`query-item ${className}`} onClick={() => setOpened(!opened)}>
            <div className="query-question">
                <p className={`query-txt ${opened}`}>Can you work with clients remotely?</p>
                <span className="query-icon">
                    <Image src={"/icons/x.svg"} className={`query-img ${opened}`} alt="icon" width={33} height={33} />
                </span>
            </div>
            <p className={`query-response ${opened}`}>Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.</p>
        </div>
    )
}