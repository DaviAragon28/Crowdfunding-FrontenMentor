import React from 'react'

export const Section = ({ children, styles}) => {
  return (
    <section className={`${styles} flex flex-col  gap-4 px-6 pb-9 border bg-white  rounded-lg`}>
        {children}
    </section>
  )
}
