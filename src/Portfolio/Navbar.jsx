import React from 'react'

function Navbar() {
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
  return (
    <div className='w-full flex justify-center'>
        <nav className='w-10/12 h-16 flex items-center justify-end'>
            <ul className='flex'>
                {data.map((val,i)=>{
                    return <li key={i} className='mx-8 text-center 
                 text-sm font-light'>
                        <a href={href[i]} className='px-3 py-2 text-center rounded-lg hover:bg-amber-400 hover:text-white'>{val.h1}</a>
                    </li>
                })}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar