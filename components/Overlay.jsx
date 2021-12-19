import Link from 'next/link';
import React from 'react'

export default function Overlay({className}) {
    const navs = [
        {title: "Home" , url: '/'},
        {title: "About" , url: '/about'},
        {title: "Work" , url: '/work'},
        {title: "Contact" , url: '/contact'},
        
    ]
  function OpenNav() {
    document.getElementById("myNav").style.width = "100%";
    
  }

  function CloseNav() {
    document.getElementById("myNav").style.width = "0";
  }
    return (
        <>
        <div id="myNav" className={"overlay "+className}>
        <a
          className="closebtn cursor-pointer"
          onClick={CloseNav}
        >
          &times;
        </a>
        <div className="overlay-content">
            {navs.map((nav,index) => {
                return (
                    <Link href={nav.url} key={index}>
                        <a onClick={() => CloseNav()}>{nav.title}</a>              
                    </Link>
                )
            })}
          
          
        </div>
      </div>
      <svg
            className="cursor-pointer my-6 mx-12"
            onClick={OpenNav}
            width="48px"
            height="48px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="#000"/>
            <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="#000" />
            <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="#000" />
          </svg>
      </>
    )
}
