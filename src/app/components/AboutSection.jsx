import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/about-image.png' width={500} height={500} alt='about image'/>
            <div>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base md:text-lg'>
                    I'm a full stack web developer with an interest in learning new things. I have experience with JavaScript, React, Node.js, Express, MySql, HTML/CSS, and Git. I am a fast learner looking to expand my skill set. I love to work on teams.
                </p>
                <div className='flex flex-row mt-8'>
                    <span>Skills</span>
                    <span>Education</span>
                    <span>Experience</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection