"use client";
import './Hero.css';
import { Achievement } from "@/components/Achievement/Achievement";
import { ScrambleButton } from "@/components/Buttons/ScrambleButton";
import { RunningItem } from '@/components/RunningItem/RunningItem';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const Hero = () => {
    // const [animated, setAnimated] = useState(false);

    // useEffect(() => {
    //     if (typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    //         setAnimated(true);
    //     }
    // }, []);

    return (
        <main id="Hero">
            <section className="grid grid-cols-[8rem_1fr] md:grid-cols-[16rem_1fr] gap-5 gap-y-0">
                <div className="profile-img row-span-1 md:row-span-4 max-h-[16rem] h-[128px] md:h-auto bg-dark-7 border-dark-22 rounded-xl relative overflow-hidden">
                    <Image
                        src="/images/my-image-3.png"
                        alt="avatar"
                        width={232}
                        height={232}
                        className="absolute bottom-0 left-3 md:left-5 w-28 md:w-[232px]"
                        priority
                    />
                </div>
                <div className="self-center">
                    <span className="flex items-center gap-2 whitespace-nowrap text-gray-60 heading-md mb-1">
                        Hello I Am
                    </span>
                    <h1 className="heading-huge text-white">Fahd El Attar</h1>
                </div>
                <p className="description text-[15px] font-medium text-gray-60 col-span-2 md:col-span-1 my-4">
                    Experienced full stack developer and AI Engineer from Safi, Morocco, with a passion for crafting seamless digital experiences and a proven track record.
                </p>
                <div className="usefull-buttons grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-2 w-full col-span-2 md:col-span-1">
                    <ScrambleButton text={"Email Me"} className='text-[13px] font-semibold'>
                        <Image src="/icons/mail.svg" alt="icon" width={20} height={20} />
                    </ScrambleButton>
                    <ScrambleButton text={"Schedule Call"} className='text-[15px] font-semibold'>
                        <Image src="/icons/agenda.svg" alt="icon" width={20} height={20} />
                    </ScrambleButton>
                </div>
            </section>
            {/* <section className="running-services">
                <div className="running-services-inner" data-animated={animated}>
                    <RunningItem name="Exceptional Quality" />
                    <RunningItem name="Transparent Communication" />
                    <RunningItem name="Speed Delivery" />
                    <RunningItem name="Custom Solutions" />
                    <RunningItem name="Continuous Improvement" />
                    <RunningItem name="Responsive Support" />
                    <RunningItem name="Always in Sync" />
                    <RunningItem name="Exceptional Quality" />
                    <RunningItem name="Transparent Communication" />
                    <RunningItem name="Speed Delivery" />
                    <RunningItem name="Custom Solutions" />
                    <RunningItem name="Continuous Improvement" />
                    <RunningItem name="Responsive Support" />
                    <RunningItem name="Always in Sync" />
                </div>
            </section> */}
            <section className="achievements">
                <Achievement score={"5"} title={"Happy Clients"} />
                <Achievement score={"6"} title={"Years of Experience"} />
                <Achievement score={"40"} title={"Completed Tasks"} />
                <Achievement score={"5"} title={"Certifications"} />
            </section>
        </main>
    );
};
