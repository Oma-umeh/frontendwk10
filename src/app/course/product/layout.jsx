import React from 'react'

export const metadata = {
    title: 'product design information',
    description: 'more about product design',
}

export default function layout({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}