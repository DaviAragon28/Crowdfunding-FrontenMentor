import React from 'react'
import { ButtonCard } from '../components/ButtonCard'
import { Cards } from './Cards'
import { Section } from './Section'

export const SectionThree = () => {
    return (
        <Section styles='pt-10 gap-7 '>
            <h5 className='font-bold text-lg'>About this project</h5>
            <p className='text-sm text-darkGray'>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p className='text-sm text-darkGray'>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            <Cards />
        </Section>
    )
}
