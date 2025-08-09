"use client";
import { useEffect, useState } from "react";
import Button from "../Buttons/Button"
import './Header.css';
import { fetchTime } from "@/lib/fetchTime";

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
        <header>
            <Button className="rounded-full px-6 text-gray-80 cursor-text border border-dark-16 capitalize" type="button">
                <span className="circle-pulse green-pulse"></span>
                Available For Work
            </Button>
            <div className="time-update flex justify-content-center items-center gap-6">
                <div className="time-title text-md text-gray-60">Local Time ( IST )</div>
                <span className="time text-[1.1rem] font-semibold text-gray-300">{time}</span>
            </div>
        </header>
    )
}
