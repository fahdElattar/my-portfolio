import { TooltipButton } from "../Buttons/TooltipButton"
import './Sidebars.css';
import Image from "next/image";

export const LeftSidebar = () => {
    return (
        <aside className="top-0 left-0 pr-7 pt-6 pb-10 flex flex-col items-end justify-between">
            <div className="avatar block w-14 h-14 rounded-full border-4 border-dark-16"></div>
            <div className="navigation flex flex-col gap-6">
                <TooltipButton tooltip="Home" className="active">
                    <Image src="/icons/user.svg" alt="icon" width={28} height={28}/>
                </TooltipButton>
                <TooltipButton tooltip="Services">
                    <Image src="/icons/thunder.svg" alt="icon" width={28} height={28}/>
                </TooltipButton>
                <TooltipButton tooltip="Contact">
                    <Image src="/icons/mail.svg" alt="icon" width={28} height={28}/>
                </TooltipButton>
            </div>
            <TooltipButton tooltip="Go Top" direction="up">
                <Image src="/icons/arrow-up.svg" alt="icon" width={24} height={24}/>
            </TooltipButton>
        </aside>
    )
}
