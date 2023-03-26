import React from 'react'
import { ButtonCard } from '../components/ButtonCard'
import { SectionOne } from './SectionOne'
import { SectionThree } from './SectionThree'
import { SectionTwo } from './SectionTwo'

export const MenuContent = () => {
    return (
        <main className='px-8 relative flex flex-col gap-5 pb-10 md:w-[600px] md:mx-auto'>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </main>
    )
}
