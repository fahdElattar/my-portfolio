import Button from "../Buttons/Button";
import './Sidebars.css';
import Image from "next/image";

export const RightSidebar = () => {
    return (
        <aside className="right-sidebar invisible-xl">
            <a href="https://www.instagram.com/fahdcoding/">
                <Button className="tooltip-btn active">
                    <Image src="/icons/instagram.svg" alt="icon" width={24} height={24}/>
                </Button>
            </a>
            <a href="mailto:fahdbusiness24@gmail.com">
                <Button className="tooltip-btn active">
                    <Image src="/icons/mail.svg" alt="icon" width={24} height={24}/>
                </Button>
            </a>
            <a href="https://www.linkedin.com/in/fahd-elattar">
                <Button className="tooltip-btn active">
                    <Image src="/icons/linkedin.svg" alt="icon" width={24} height={24}/>
                </Button>
            </a>
        </aside>
    )
}
