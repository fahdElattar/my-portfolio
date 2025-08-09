import Image from "next/image";
export const Experience = () => {
    return (
        <section id="Experience">
            <div className="section-heading pb-7 mb-7 border border-b-dark-10 border-dashed border-x-0 border-t-0">
                <div className="section-title mb-3">
                    <h1 className="heading-huge text-white flex items-center gap-2">
                        <Image src="/icons/bag-icon.svg" alt="icon" width={30} height={30}/>
                        My Experience
                    </h1>
                </div>
                <p className="section-description text-gray-60 text-lg">Navigating diverse environments with adaptability and expertise for holistic solutions.</p>
            </div>
            <div className="experience-items grid grid-cols-1 gap-3">
                <div className="exp-item grid grid-cols-1 gap-5 rounded-xl p-6 bg-dark-4 border border-dark-7">
                    <div className="exp-item-heading flex justify-between items-center">
                        <div className="right-exp-heading flex items-center gap-2">
                            <div className="exp-icon bg-dark-10 border border-dark-13 p-2 rounded-lg">
                                <Image src="/icons/vortex.svg" alt="icon" width={30} height={30}/>
                            </div>
                            <div className="company-details flex flex-col gap-[0.1rem] justify-center">
                                <h3 className="text-heading-md text-[1.13rem] text-gray-85">Vortex</h3>
                                <span className="text-md text-gray-60">Vortex.co</span>
                            </div>
                            <span className="company-type text-center text-gray-60 bg-dark-6 text-sm rounded-full px-2 py-1 border border-dark-10 self-start">Tech Firm</span>
                        </div>
                        <h1 className="left-exp-heading text-heading-lg text-gray-85">2023 - Present</h1>
                    </div>
                    <div className="exp-item-body bg-dark-2 p-4 rounded-xl border border-dark-7">
                        <h3 className="role-heading text-heading-xs text-gray-85 mb-1">Product Designer</h3>
                        <p className="role-description text-md text-gray-60">Headed product design initiatives, defined design strategy, and ensured alignment with business objectives for market-leading products.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}