import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
export const Experience = () => {
    return (
        <section id="Experience">
            <div className="section-heading pb-7 border border-b-dark-10 border-dashed border-x-0 border-t-0">
                <div className="section-title mb-3">
                    <h1 className="heading-huge text-white flex items-center gap-2">
                        <Image src="/icons/bag-icon.svg" alt="bag-icon" width={30} height={30}/>
                        My Experience
                    </h1>
                </div>
                <p className="section-description text-gray-60 text-lg">Navigating diverse environments with adaptability and expertise for holistic solutions.</p>
            </div>
        </section>
    )
}