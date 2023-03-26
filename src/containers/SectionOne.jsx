import React, { useContext, useState } from 'react'
import { ButtonCard } from '../components/ButtonCard'
import { AppContext } from '../context/context'
import { Section } from './Section'

export const SectionOne = () => {
    const { onHandleModal } = useContext(AppContext)
    const [bookmark, setBookmark] = useState(false)

    const onHandleBook = () => {
        setBookmark(!bookmark)
    }
    return (
        <Section styles='pt-12 relative -mt-12 text-center '>
            <img className='absolute -top-7 left-0 right-0 mx-auto' src="/images/logo-mastercraft.svg" alt="logo-mastercraft" />
            <h5 className='font-bold text-xl '>Mastercraft Bamboo Monitor Riser</h5>
            <p className='text-sm text-darkGray t'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className='flex justify-between mt-3 cursor-pointer'>
                <ButtonCard stock toDo={onHandleModal} styles='px-9 text-sm'>Back this project</ButtonCard>
                <div onClick={onHandleBook} className='flex items-center'>
                    {
                        bookmark 
                            ? <img src="/images/icon-bookmarked.svg " className='z-20' alt="icon-bookmarked" />
                            : <img src="/images/icon-bookmark.svg " className='z-20' alt="icon-bookmark" />

                    }
                    <p className={`hidden md:block z-10 md:px-4 md:pl-5 md:py-4 md:rounded-r-full text-darkGray font-bold  md:bg-gray-200/40 md:-ml-3 ${bookmark && 'text-darkCyan'} `}>
                        {
                            bookmark
                                ? 'Bookmarked'
                                : 'Bookmark'
                        }
                    </p>
                </div>
            </div>
        </Section>
    )
}
