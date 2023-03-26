import React from 'react'
import { Section } from './Section'

export const SectionTwo = () => {
  return (
    <Section styles='text-center pt-10 '>
      <div className='md:flex md:flex-row'>


        <div className='flex flex-col gap-1'>
          <p className='text-3xl font-bold'>$89,914</p>
          <span className='text-darkGray text-sm'>of $100,000 backed</span>
        </div>
        <div className='border-t  w-20 mx-auto bg-darkGray md:w-0 md:h-12 md:border-l md:border-t-0'></div>
        <div className='flex flex-col gap-2'>
          <p className='text-3xl font-bold'>5,007</p>
          <span className='text-darkGray text-sm'>total backers</span>
        </div>
        <div className='border-t  w-20 mx-auto bg-darkGray md:w-0 md:h-12 md:border-l'></div>
        <div className='flex flex-col gap-2'>
          <p className='text-3xl font-bold'>56</p>
          <span className='text-darkGray text-sm'>days left</span>
        </div>
      </div>
      <div className='bg-gray-200/40 h-3 rounded-full overflow-hidden mt-5'>
        <div className='w-[80%] bg-moderateCyan h-3 rounded-full'></div>
      </div>
    </Section>
  )
}
