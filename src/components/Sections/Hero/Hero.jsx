"use client";
import './Hero.css';
import { Achievement } from "@/components/Achievement/Achievement";
import { ScrambleButton } from "@/components/Buttons/ScrambleButton";
import { RunningItems } from '@/components/RunningItem/RunningItems';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const Hero = () => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setAnimated(true);
        }
    }, []);

    return (
        <main id="Hero">
            <section className="user-def-sec">
                <div className="profile-img">
                    <Image
                        src="/images/my-image-3.png"
                        alt="avatar"
                        width={232}
                        height={232}
                        priority
                    />
                </div>
                <div className="avatar-name">
                    <span>Hello I Am</span>
                    <h1>Fahd El Attar</h1>
                </div>
                <p className="avatar-desc">
                    Experienced full stack developer and AI Engineer from Safi, Morocco, with a passion for crafting seamless digital experiences and a proven track record.
                </p>
                <div className="usefull-buttons">
                    <ScrambleButton text={"Email Me"}>
                        <Image src="/icons/mail.svg" alt="icon" width={20} height={20} />
                    </ScrambleButton>
                    <ScrambleButton text={"Schedule Call"}>
                        <Image src="/icons/agenda.svg" alt="icon" width={20} height={20} />
                    </ScrambleButton>
                </div>
            </section>
            <section className="running-services">
                <div className="running-services-inner" data-animated={animated}>
                    <RunningItems />
                    <RunningItems />
                </div>
            </section>
            <section className="achievements">
                <Achievement score={"5"} title={"Happy Clients"} />
                <Achievement score={"6"} title={"Years of Experience"} />
                <Achievement score={"40"} title={"Completed Tasks"} />
                <Achievement score={"5"} title={"Certifications"} />
            </section>
        </main>
    );
};
