"use client";
import { useEffect, useState } from "react";
import Button from "../Buttons/Button"
import './Header.css';
import { fetchTime } from "@/lib/fetchTime";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = async () => {
            const time = await fetchTime();
            setTime(time);
        }
        updateTime();
        const interval = setInterval(updateTime, 30000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <header id="Header">
            <Button className="rounded-full px-6 text-gray-80 cursor-text border border-dark-16 capitalize hidden lg:flex">
                <span className="circle-pulse green-pulse"></span>
                Available For Work
            </Button>
            <div className="grid grid-cols-3 gap-1 sm:gap-3 xl:hidden w-full">
                <Link href={"/"}>
                    <Button className="rounded-lg w-full">
                        <Image src="/icons/user.svg" alt="icon" width={20} height={20}/>
                        <p className="text-text-xs">Home</p>
                    </Button>
                </Link>
                <Link href={"services"}>
                    <Button className="rounded-lg w-full">
                        <Image src="/icons/thunder.svg" alt="icon" width={20} height={20}/>
                        <p className="text-text-xs">Services</p>
                    </Button>
                </Link>
                <Link href={"contact"}>
                    <Button className="rounded-lg w-full">
                        <Image src="/icons/mail.svg" alt="icon" width={20} height={20}/>
                        <p className="text-text-xs">Contact</p>
                    </Button>
                </Link>
            </div>
            <div className="time-update flex justify-center items-center gap-6 invisible-xl">
                <div className="time-title text-md text-gray-60">Local Time ( IST )</div>
                <span className="time text-[1.1rem] font-semibold text-gray-300">{time}</span>
            </div>
        </header>
    )
}
