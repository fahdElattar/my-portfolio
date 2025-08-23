import './Hero.css'
import { Achievement } from "@/components/Achievement/Achievement";
import { ScrambleButton } from "@/components/Buttons/ScrambleButton";
import Image from 'next/image';
export const Hero = () => {
    return (
        <main id="Hero">
            <section className="grid grid-cols-[35%_1fr] gap-5">
                <div className="profile-img bg-dark-7 border-dark-22 rounded-xl relative overflow-hidden">
                    <Image src="/images/my-image-3.png" alt="avatar" width={230} height={230} className="absolute bottom-0 left-5"/>
                </div>
                <div className="flex justify-center items-start flex-col gap-3">
                    <span className="flex items-center gap-2 whitespace-nowrap text-gray-60 heading-md">
                        Hello I Am
                    </span>
                    <h1 className="heading-huge text-white">Fahd El Attar</h1>
                    <p className="description text-lg text-gray-60">Experienced web developer from Safi, Morocco, with a passion for crafting seamless digital experiences and a proven track record.</p>
                    <div className="usefull-buttons grid grid-cols-2 gap-6 w-full">
                        <ScrambleButton text={"Email Me"}>
                            <Image src="/icons/mail.svg" alt="icon" width={20} height={20} className='opacity-80'/>
                        </ScrambleButton>
                        <ScrambleButton text={"Schedule Call"}>
                            <Image src="/icons/agenda.svg" alt="icon" width={20} height={20} className='opacity-80'/>
                        </ScrambleButton>
                    </div>
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
                <Achievement score={"56"} title={"Happy clients"} />
                <Achievement score={"6"} title={"Years of Experience"} />
                <Achievement score={"40"} title={"Complated Tasks"} />
                <Achievement score={"10"} title={"Awards Received"} />
            </section>
        </main>
    )
}
