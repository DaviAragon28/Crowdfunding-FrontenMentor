import React from 'react'
import { CardProducts } from '../components/CardProducts'

export const Cards = () => {
  return (
    <>
        <CardProducts
          product='Bamboo Stand'
          price='25'
          description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
          you’ll be added to a special Backer member list."
          unity='101'
  
        />
        <CardProducts
          product='Black Edition Stand'
          price='75'
          description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
          member list. Shipping is included."
          unity='64'
  
        />
        <CardProducts
          product='Mahogany Special Edition'
          price='200'
          description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
          to our Backer member list. Shipping is included."
          unity='0'
          stock={false}
  
        />
    </>
  )
}
