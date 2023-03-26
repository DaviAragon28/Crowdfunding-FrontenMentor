import React from 'react'

export const ButtonCard = ({ children, styles, toDo, stock }) => {
    return (
        <button
            onClick={toDo}
            className={`text-white font-medium rounded-full transition-colors ${stock ? 'bg-moderateCyan hover:bg-darkCyan' : 'bg-darkGray cursor-not-allowed'}  ${styles}`}>
            {children}
        </button>
    )
}
