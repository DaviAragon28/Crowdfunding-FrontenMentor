import React from 'react'
import { ButtonCard } from '../components/ButtonCard'

export const CardProducts = ({ product, price, description, unity, stock = true, }) => {
    return (
        <div className={`flex flex-col gap-4 border rounded-md px-5 py-6 ${!stock && 'opacity-50'} md:gap-6`}>
            <div className='flex flex-col gap-4 md:flex md:flex-row md:justify-between'>
                {/* <div className='md:flex md:flex-row md:justify-between'> */}
                <p className='font-bold'>{product}</p>
                <p className='font-medium text-moderateCyan'>Pledge ${price} or more</p>
                {/* </div> */}
            </div>
            <p className='text-sm text-darkGray'>
                {description}
            </p>
            <div className='flex flex-col gap-3 md:flex-row md:justify-between'>
                <div className='flex gap-3 items-center'>
                    <p className='text-3xl font-bold'>{unity}</p>
                    <span className='text-darkGray '>left</span>
                </div>
                <ButtonCard stock={stock} styles={`w-max px-7 py-3  text-sm`}>
                    {
                        stock
                            ? 'Select Reward'
                            : 'Out of Stock'
                    }

                </ButtonCard>
            </div>
        </div>
    )
}
