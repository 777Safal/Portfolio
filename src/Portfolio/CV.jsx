import React from 'react'
import {GiSmartphone} from 'react-icons/gi'
import {MdEmail} from 'react-icons/md'
import {MdLocationPin}from 'react-icons/md'
import {BiLogoFacebook} from 'react-icons/bi'
import {BsGithub} from 'react-icons/bs'

function CV() {
    const data=[
      {h1:"9866694728",h2:'98007622436',icon:<GiSmartphone/>},
      {h1:"tsafal06@gmail.com",icon:<MdEmail/>},
      {h1:"kalikanagar-11,Butwal Rupandehi",icon:<MdLocationPin/>},
      {h1:"https://www.facebook.com/",icon:<BiLogoFacebook/>},
      {h1:"https://github.com/777Safal",icon:<BsGithub/>},
    ]
    const education=[
      {h1:'Higher Secondary Eduacation',
      p:'AIMS College / Butwal, Nepal / june, 2017-August, 2019',
      p2:'Managment (Finance) with grade B'}
    ]
    const skills=[
      {h1:'HTML / CSS '},
      {h1:'ReactJS '},
      {h1:'Javascript'},
    ]
  return (
    <div className='flex'>
{/* left side */}
        <div className='w-1/4 pt-7 pl-12 pr-8 text-zinc-900 bg-amber-400'>
  {/* contact */}
          <div className=''>
          <div ><h1 className='uppercase text-xl font-bold pb-1 border-b-2 border-zinc-900'>contact</h1></div>
          <div className='mt-2 text-base'>
          {data.map((val,i)=>{
            return <div key={i} className='mb-2 flex items-center'>
              <div className='bg-red-500 w-7 h-7 mr-2 text-lg rounded-full flex items-center justify-center'>{val.icon}</div>
              <h1 className='text-sm font-medium'>{val.h1}</h1>              
            </div>
          })}
          </div>
          </div>
  {/* Education */}
          <div className='my-6'>
            <div><h1 className='uppercase text-xl font-bold pb-1 border-b-2 border-zinc-900'>Education</h1></div>
            <div className='mt-2'>
              {education.map((val,i)=>{
                return <div key={i}>
                  <h1 className='text-lg font-medium leading-5'>{val.h1}</h1>
                  <p className='text-sm my-1 font-medium leading-5'>{val.p}</p>
                  <ul className='pl-4'>
                    <li className='text-sm font-medium list-disc'>{val.p2}</li>
                  </ul>
                </div>
              })}
            </div>
          </div>
  {/* Skills */}
          <div className='my-6'>
            <div><h1 className='uppercase text-xl font-bold pb-1 border-b-2 border-zinc-900'>Skills</h1></div>
            <ul className='mt-2 pl-4'>
              {skills.map((val,i)=>{
                return <li key={i} className='text-sm font-medium list-disc'>
                  {val.h1}
                </li>
              })}
            </ul>
          </div>
        </div>
{/* right side */}
        <div className='w-3/4 bg-zinc-900 text-amber-400'>
          jakaj
        </div>
    </div>
  )
}

export default CV