import './Hero.css'
import { Achievement } from "@/components/Achievement/Achievement";
import { ScrambleButton } from "@/components/Buttons/ScrambleButton";
import Image from 'next/image';
export const Hero = () => {
    return (
        <main id="Hero">
            <section className="grid grid-cols-[8rem_1fr] md:grid-cols-[16rem_1fr] gap-5 gap-y-0">
                <div className="profile-img row-span-1 md:row-span-4 max-h-[16rem] h-[128px] md:h-auto bg-dark-7 border-dark-22 rounded-xl relative overflow-hidden">
                    <img src="/images/my-image-3.png" alt="avatar" className="absolute bottom-0 left-3 md:left-5 w-28 md:w-[232px]"/>
                </div>
                <div className="self-center">
                    <span className="flex items-center gap-2 whitespace-nowrap text-gray-60 heading-md mb-1">
                        Hello I Am
                    </span>
                    <h1 className="heading-huge text-white">Fahd El Attar</h1>
                </div>
                <p className="description text-[15px] font-medium text-gray-60 col-span-2 md:col-span-1 my-4">Experienced full stack developer and AI Engineer from Safi, Morocco, with a passion for crafting seamless digital experiences and a proven track record.</p>
                <div className="usefull-buttons grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-2 w-full col-span-2 md:col-span-1">
                    <ScrambleButton text={"Email Me"} className='text-[13px] font-semibold'>
                        <Image src="/icons/mail.svg" alt="icon" width={20} height={20} />
                    </ScrambleButton>
                    <ScrambleButton text={"Schedule Call"} className='text-[15px] font-semibold'>
                        <Image src="/icons/agenda.svg" alt="icon" width={20} height={20} />
                    </ScrambleButton>
                </div>
            </section>
            <section className="running-logos">
                <img src="https://framerusercontent.com/images/huw175xWveIcdZeU1dBh8Wys.svg" alt="social-media-icon"></img>
                <img src="https://framerusercontent.com/images/3Z3CcdQ8VZwPePQoipsJe76tkE.svg" alt="social-media-icon"></img>
                <img src="https://framerusercontent.com/images/Q7jndL1WNZEBxI1f06dOtC1EPEU.svg" alt="social-media-icon"></img>
                <img src="https://framerusercontent.com/images/UdbiS3tDM333AXZG0ineh95v4.svg" alt="social-media-icon"></img>
                <img src="https://framerusercontent.com/images/7wAZJGWCBioEg37bROiHpyDQPuA.svg" alt="social-media-icon"></img>
                <img src="https://framerusercontent.com/images/huw175xWveIcdZeU1dBh8Wys.svg" alt="social-media-icon"></img>
            </section>
            <section className="achievements">
                <Achievement score={"5"} title={"Happy clients"} />
                <Achievement score={"6"} title={"Years of Experience"} />
                <Achievement score={"40"} title={"Complated Tasks"} />
                <Achievement score={"5"} title={"Certifications"} />
            </section>
        </main>
    )
}
