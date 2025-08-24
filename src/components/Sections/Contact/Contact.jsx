import Button from '@/components/Buttons/Button'
import { ScrambleButton } from '@/components/Buttons/ScrambleButton'
import { SectionHead } from '@/components/SectionHead/SectionHead'
import { StackItem } from '@/components/StackItem/StackItem'
import Image from 'next/image'
import React from 'react'

export const Contact = () => {
    return (
        <section id='contact'>
            <SectionHead
                title={"I Love to here from you."}
                iconName={"envelope"}
                description={"Connect with Me Today. Let's Create Something Amazing Together!"}
            >
                <div className="flex items-center gap-4 mt-4">
                    <ScrambleButton text={"Email Me"} className='w-36'>
                        <Image src="/icons/mail.svg" alt="icon" width={20} height={20} className='opacity-80'/>
                    </ScrambleButton>
                    <ScrambleButton text={"Schedule Call"}>
                        <Image src="/icons/agenda.svg" alt="icon" width={20} height={20} className='opacity-80'/>
                    </ScrambleButton>
                </div>
            </SectionHead>
            <div className="contact grid grid-cols-1 md:grid-cols-[60%_40%] gap-4 gap-y-6 items-center">
                <form className="contact-form grid grid-cols-2 gap-3 md:order-none order-1">
                    <input type="text" className='border-0 text-white text-text-sm bg-dark-6 rounded-lg p-4 focus:outline-none placeholder:text-gray-46 placeholder:font-semibold' placeholder='Name' />
                    <input type="email" className='border-0 text-white text-text-sm bg-dark-6 rounded-lg p-4 focus:outline-none placeholder:text-gray-46 placeholder:font-semibold' placeholder='Email' />
                    <textarea className="form-textarea col-span-2 border-0 text-text-sm text-white bg-dark-6 rounded-lg p-4 focus:outline-none placeholder:text-gray-46 placeholder:font-semibold" rows="7" placeholder='Message'></textarea>
                    <Button className='col-span-2 rounded-lg capitalize text-text-sm py-4 hover:opacity-70 transition-all duration-500 ease-in-out' type="submit">Send your Message</Button>
                </form>
                <div className="social-media-links grid grid-cols-1 gap-2">
                    <StackItem
                        link="mailto:fahdbusiness24@gmail.com"
                        iconName="mail"
                        stackName="Gmail"
                        stackDesc="fahdbusiness24@gmail.com"
                    />
                    <StackItem
                        link="https://www.instagram.com/fahdcoding/"
                        iconName="instagram"
                        stackName="Instagram"
                        stackDesc="@fahdcoding"
                    />
                    <StackItem
                        link="https://www.linkedin.com/in/fahd-elattar"
                        iconName="linkedin"
                        stackName="Linkedin"
                        stackDesc="fahd-elattar"
                    />
                </div>
            </div>
        </section>
    )
}
