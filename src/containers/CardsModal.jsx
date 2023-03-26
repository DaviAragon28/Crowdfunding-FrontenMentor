import React from 'react'
import { CardModal } from '../components/CardModal'
import { CardProducts } from '../components/CardProducts'

export const CardsModal = () => {
  return (
    <ul className='flex flex-col gap-5'>
        <CardModal
          product='Pledge with no reward'
          // price='25'
          description="Choose to support us without a reward if you simply believe in our project. As a backer, 
          you will be signed up to receive product updates via email."
          // unity='101'
          id={1}
          />
        <CardModal
          product='Bamboo Stand'
          price='25'
          description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
          you’ll be added to a special Backer member list."
          unity='101'
          id={2}
          />
        <CardModal
          product='Black Edition Stand'
          price='75'
          description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
          member list. Shipping is included."
          unity='64'
          id={3}
          />
        <CardModal
          product='Mahogany Special Edition'
          price='200'
          description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
          to our Backer member list. Shipping is included."
          unity='0'
          stock={false}
          id={4}
        />
    </ul>
  )
}
