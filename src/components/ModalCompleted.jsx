import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import { ButtonCard } from './ButtonCard'

export const ModalCompleted = () => {
    const { openModalCompleted, closeModalCompleted } = useContext(AppContext)
    return (
        <div className={` absolute top-0 z-40 h-[2486px] md:h-[1783px] lg:h-[1854px] xl:h-[1970px] left-0 right-0   transition-transform backdrop-brightness-50  pt-28 px-8 ${openModalCompleted ? 'translate-x-0' : '-translate-y-[400%]'} md:pt-36 lg:pt-44`}>
            <section className='flex flex-col gap-6 bg-white  px-6 py-6 rounded-lg md:w-[400px] md:mx-auto  '>
                <div className='flex flex-col justify-between items-center gap-4'>
                    <img className="cursor-pointer" src="/images/icon-check.svg" alt="icon-check" />
                    <p className='font-bold text-lg'>Thanks for your support!</p>
                </div>
                <p className='text-sm text-darkGray text-center'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.</p>
                <ButtonCard toDo={closeModalCompleted} stock styles='w-max mx-auto px-7 py-3'>
                    Got it!
                </ButtonCard>
            </section>
        </div>
    )
}
