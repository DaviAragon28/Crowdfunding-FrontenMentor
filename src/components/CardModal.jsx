import React, { useContext, useState } from 'react'
import { ButtonCard } from '../components/ButtonCard'
import { AppContext } from '../context/context'

export const CardModal = ({ product, price, description, unity, stock = true, id }) => {
    const [show, setShow] = useState(0)
    const { onModalCompleted } = useContext(AppContext)
    // const [cardOne, setCardOne] = useState(false)
    // const [cardTwo, setCardTwo] = useState(false)
    // const [cardThree, setCardThree] = useState(false)

    const on = (idCard) => {
        setShow(idCard)
    }

    return (
        <li >
            <input type="radio" id={id} name='modal-card' value="" className="hidden peer" required="" />
            <label onClick={() => on(id)} htmlFor={id} name='modal-card' className={`flex flex-col justify-between w-full  text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-moderateCyan hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 ${!stock && 'opacity-50'}`}>
                <div className={`flex flex-col gap-4  rounded-md p-6  `}>
                    <div className='flex flex-col md:md:justify-between md:flex-row  '>
                        <div className='flex flex-col md:flex-row md:gap-4 md:items-center'>
                            <p className='font-bold hover:text-moderateCyan'>{product}</p>
                            {
                                price &&
                                <p className='font-medium text-moderateCyan'>Pledge ${price} or more</p>
                            }

                        </div>
                        {
                            unity &&
                            <div className='hidden md:flex gap-2 items-center'>
                                <p className='text-xl font-bold'>{unity}</p>
                                <span className='text-darkGray '>left</span>
                            </div>
                        }

                    </div>
                    <p className='text-sm text-darkGray'>
                        {description}
                    </p>
                    {
                        unity &&
                        <div className='flex gap-3 items-center md:hidden'>
                            <p className='text-3xl font-bold'>{unity}</p>
                            <span className='text-darkGray '>left</span>
                        </div>
                    }

                </div>
                {
                    id === 1 && show === 1 && (
                        <div className={`${show === 1 ? 'block' : 'hidden'}`} >
                            <div className='w-full border-b border-darkGray opacity-50'></div>
                            <div className={` flex-col md:flex-row justify-center gap-4   rounded-md p-6 items-center  flex opacity-100 transition-opacity' 'opacity-0'`} >

                                <ButtonCard toDo={onModalCompleted} stock styles='px-5 py-2'>
                                    Continue
                                </ButtonCard>

                            </div>
                        </div>
                    )
                }

                {
                    id === 2 && show === 2 && (
                        <>
                            <div className='w-full border-b border-darkGray opacity-50'></div>
                            <div className={`flex flex-col md:flex-row justify-between gap-4   rounded-md p-6 items-center    `}>
                                <p>Enter your pladge</p>
                                <div className='flex gap-2'>
                                    <div className='relative'>
                                        <input className='w-24 py-1 px-5 rounded-full border outline-none font-bold' placeholder={price} type="number" name="" id="" />
                                        <span className='absolute top-[50%] left-2 translate-y-[-50%] text-sm text-darkGray opacity-50'>$</span>
                                    </div>
                                    <ButtonCard toDo={onModalCompleted} stock styles='px-5'>
                                        Continue
                                    </ButtonCard>
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    id === 3 && show === 3 && (
                        <>
                            <div className='w-full border-b border-darkGray opacity-50'></div>
                            <div className={`flex flex-col md:flex-row justify-between gap-4   rounded-md p-6 items-center   `}>
                                <p>Enter your pladge</p>
                                <div className='flex gap-2'>
                                    <div className='relative'>
                                        <input className='w-24 py-1 px-5 rounded-full border outline-none font-bold' placeholder={price} type="number" name="" id="" />
                                        <span className='absolute top-[50%] left-2 translate-y-[-50%] text-sm text-darkGray opacity-50'>$</span>
                                    </div>
                                    <ButtonCard toDo={onModalCompleted} stock styles='px-5'>
                                        Continue
                                    </ButtonCard>
                                </div>
                            </div>
                        </>
                    )
                }


            </label>
        </li>

    )
}
