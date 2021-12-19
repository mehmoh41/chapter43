import Link from 'next/link'
import React from 'react'

export default function ToggleMenu() {
    const menuItems = [
        {title: 'Home' , url: '/home'},
        {title: 'About' , url: '/about'},
        {title: 'Works' , url: '/works'},
        {title: 'Contact' , url: '/contact'},
    ]
    return (
        <div className="">
                <ul>
                    {menuItems.map((item ) => {
                        return (
                            <li className="text-black">
                                <Link href={item.url}>
                                    <a>{item.title}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                {/* bg-gradient-to-b from-transparent */}
                <div className="absolute top-0 right-0 bottom-0 left-0  text-black"></div>
        </div>
    )
}
