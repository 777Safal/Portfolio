import React from 'react'
import {motion} from 'framer-motion'

function Motion() {
  return (
    <div className='flex justify-center items-center h-screen'>
        {/* <motion.h1 className='p-5'
        initial={{scale:10}}
        animate={{scale:1}}
        transition={{duration:5}}
        >Frmaer Motion</motion.h1> */}
        <motion.h2 className="p-5"
        whileHover={{scale:2 ,y:-10}}
        >Animation</motion.h2>
        <motion.h3 className=""
        animate={{ x: [null, 100, 0] }}>
          Yumna Rana Magar
        </motion.h3>
    </div>
  )
}

export default Motion