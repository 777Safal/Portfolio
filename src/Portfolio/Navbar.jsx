import React,{useEffect, useState, useRef} from 'react'
import {LuMenu} from 'react-icons/lu'
import Menu from './CV/Menu'

function Navbar() {

    const [showScroll,setShowScroll]=useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll',actioning)
    
      return () => {
        window.removeEventListener('scroll',actioning)
      }
    }, []);

    const actioning=()=>{
        if(window.scrollY > 100){
            setShowScroll(true);
        }
        else {
            setShowScroll(false);
        }
    };

    const data=[
        {h1:'Home'},
        {h1:'Contact'},
        {h1:'Project'},
        {h1:'Resume'},
    ]
    const href=[
        '#',
        '#contact',
        '#project',
        '#resume',
    ]

    
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className={`${showScroll? 'fixed top-0 z-50 w-10/12 left-0 right-0 border  border-slate-200':'relative  w-10/12'} mx-auto  `}>
        <nav className='w-full bg-slate-100  h-16 flex items-center justify-end'>
            <ul className='flex md:visible invisible'>
                {data.map((val,i)=>{
                    return <li key={i} className='mx-8 text-center 
                  font-light'>
                        <a href={href[i]} 
                        className='px-3 py-2 text-center rounded-lg
                         hover:bg-amber-400 hover:text-slate-50'>{val.h1}</a>
                    </li>
                })}
            </ul>
            <div className='md:invisible '>
                <button className='w-10 h-10 flex items-center justify-center text-lg'   onClick={toggleMenu}>
                    <LuMenu/>
                </button>
            </div>
        </nav>
        {isMenuOpen && <Menu />} 
    </div>
  )
}

export default Navbar