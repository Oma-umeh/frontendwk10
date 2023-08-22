import React from 'react'

export const metadata = {
    title: 'frontend information',
    description: 'more about frontend',
}

export default function layout({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}