import Link from "next/link";
import { TooltipButton } from "../Buttons/TooltipButton"
import './Sidebars.css';
import Image from "next/image";

export const LeftSidebar = () => {
    return (
        <aside className="left-sidebar">
            <div className="avatar block w-14 h-14 rounded-full border-4 border-dark-16 overflow-hidden relative">
                <Image src="/images/my-image-3.png" alt="avatar" width={46} height={46} className="my-image"/>
            </div>
            <div className="navigation flex flex-col gap-6">
                <Link href={"/"}>
                    <TooltipButton tooltip="Home" className="active">
                        <Image src="/icons/user.svg" alt="icon" width={28} height={28}/>
                    </TooltipButton>
                </Link>
                <Link href={"services"}>
                    <TooltipButton tooltip="Services">
                        <Image src="/icons/thunder.svg" alt="icon" width={28} height={28}/>
                    </TooltipButton>
                </Link>
                <Link href={"contact"}>
                    <TooltipButton tooltip="Contact">
                        <Image src="/icons/mail.svg" alt="icon" width={28} height={28}/>
                    </TooltipButton>
                </Link>
            </div>
            <a href="#Header">
                <TooltipButton tooltip="Go Top" direction="up">
                    <Image src="/icons/arrow-up.svg" alt="icon" width={24} height={24}/>
                </TooltipButton>
            </a>
        </aside>
    )
}
