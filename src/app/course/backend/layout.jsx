import React from 'react'

export const metadata = {
    title: 'backend information',
    description: 'more about our backend',
}

export default function layout({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}