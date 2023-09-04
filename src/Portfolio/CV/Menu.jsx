import React from 'react'

function Menu() {
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
    <div className='absolute top-6 right-0 w-fit grid grid-row-4 rounded-sm overflow-hidden'>
        {data.map((val,i)=>{
            return <h1 key={i} className='bg-slate-100 hover:bg-amber-400 hover:text-slate-50 px-2 py-1 rounded-sm'>
                <a href={href[i]}>{val.h1}</a>
            </h1>
        })}

    </div>
  )
}

export default Menu