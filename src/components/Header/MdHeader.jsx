"use client";
import { useEffect, useState } from "react";
import { fetchTime } from "@/lib/fetchTime";
import Button from "../Buttons/Button";
import Image from "next/image";
export const MdHeader = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const time = fetchTime();
            setTime(time);
        }
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="lg:hidden flex flex-col md:flex-row justify-between items-center gap-6 py-5 border sm:border-0 border-dark-8 border-x-0 border-b-0 max-w-[750px] mx-auto">
            <div className="time-update flex flex-col sm:flex-row justify-center items-center gap-4">
                <div className="time-title text-md text-gray-60">Local Time ( IST )</div>
                <span className="time text-text-md px-4 py-3 bg-dark-7 text-gray-300 rounded-lg border border-dark-10">{time}</span>
            </div>
            <div className="md-screen-links flex items-center justify-center gap-2">
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
            </div>
        </div>
    )
}
