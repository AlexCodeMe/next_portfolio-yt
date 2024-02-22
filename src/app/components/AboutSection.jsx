'use client'

import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Kotlin</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul>
                <li>Temple University, Philadelphia</li>
                <li>fullstackopen.com</li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul>
                <li>none :/</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/about-image.png' width={500} height={500} alt='about image'/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base md:text-lg'>
                    I&apos;m a full stack web developer with an interest in learning new things. I have experience with JavaScript, React, Node.js, Express, MySql, HTML/CSS, and Git. I am a fast learner looking to expand my skill set. I love to work on teams.
                </p>
                <div className='flex flex-row mt-8 justify-start'>
                    <TabButton 
                        selectTab={() => handleTabChange('skills')} 
                        active={tab === 'skills'} 
                    >
                        Skills
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange('education')} 
                        active={tab === 'education'} 
                    >
                        Education
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange('experience')} 
                        active={tab === 'experience'} 
                    >
                        Experience
                    </TabButton>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab)?.content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection