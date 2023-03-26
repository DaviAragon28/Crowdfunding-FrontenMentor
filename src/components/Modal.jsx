import React, { useContext, useEffect } from 'react'
import { CardsModal } from '../containers/CardsModal'
import { AppContext } from '../context/context'

export const Modal = () => {
    const { openModal, onHandleModal } = useContext(AppContext)
    const height = document.querySelector('body').clientHeight.toString()
    console.log(height);
   

    return (
        <div className={` absolute top-0 z-40 h-[2486px] md:h-[1783px] lg:h-[1854px] xl:h-[1970px] left-0 right-0   transition-transform backdrop-brightness-50  pt-20 px-8 ${openModal ? 'translate-x-0' : '-translate-y-[400%]'} md:pt-36 lg:pt-44`}>
            <section className='flex flex-col gap-6 bg-white  px-6 py-6 rounded-lg md:w-[600px] md:mx-auto  '>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-lg'>Back this project</p>
                    <img className="cursor-pointer" onClick={onHandleModal} src="/images/icon-close-modal.svg" alt="icon-close-modal" />
                </div>
                <p className='text-sm text-darkGray'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <CardsModal />
            </section>
        </div>
    )
}
