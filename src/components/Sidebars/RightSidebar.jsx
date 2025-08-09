import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Button from "../Buttons/Button";
import './Sidebars.css';
import Image from "next/image";

export const RightSidebar = () => {
    return (
        <aside className="top-0 right-0 pl-7 pt-6 pb-10 flex flex-col items-start justify-center gap-6">
            <Button className="tooltip-btn active">
                <Image src="/icons/instagram.svg" alt="icon" width={24} height={24}/>
            </Button>
            <Button className="tooltip-btn active">
                <Image src="/icons/mail.svg" alt="icon" width={24} height={24}/>
            </Button>
            <Button className="tooltip-btn active">
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </Button>
        </aside>
    )
}
