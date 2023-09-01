import * as React from 'react'
import {GiSmartphone} from 'react-icons/gi';
import {MdEmail} from 'react-icons/md';
import {MdLocationPin}from 'react-icons/md';
import {BiLogoFacebook} from 'react-icons/bi';
import {BsGithub} from 'react-icons/bs';

const CV=React.forwardRef(({}, ref)=> {
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
      p2:'Managment (Finance) with grade B'},
      {h1:'Degree of Bachelor',
      p:"Lumbini city college / Butwal, Nepal / August, 2019- ongoing",
      p2:'Bachelor in Information Managament (BIM)'}
    ]
    const skills=[
      {h1:'HTML / CSS '},
      {h1:'ReactJS '},
      {h1:'Javascript'},
    ]
    const intro={p:'Innovative Full-stack developer eligible for building and maintaining responsive design, Proficient in HTML, Tailwind CSS, JavaScript,React Js.'}
    const experience=[
      {status:'I am currently serving as a dedicated Frontend Developer intern at HUBIT, where I am actively contributing to web development projects. Throughout my internship, I have been honing my skills in building responsive and visually appealing user interfaces using modern web technologies. Collaborating with the development team, I have gained hands-on experience in translating design concepts into functional and interactive web applications. This opportunity at HUBIT has provided me with invaluable insights into the world of frontend development, helping me refine my coding proficiency and problem-solving abilities within a professional. environment'}
    ]
    const project=[
      {h1:' Futsal Booking',
        p:'An online futsal booking website project revolved around designing a user-friendly interface, implementing efficient booking processes.',
        name:'https://img.freepik.com/free-vector/abstract-soccer-tournament-background-grunge-style_1017-14108.jpg?w=740&t=st=1693069753~exp=1693070353~hmac=e779b4da8054d48bfe522de618e4ab42eb791d3a44f923f52723b4e9bd1ba6d6'},
        {h1:' Pizza Delivery',
        p:'An online futsal booking website project revolved around designing a user-friendly interface, implementing efficient booking processes.',
        name:'https://img.freepik.com/premium-vector/twenty-four-hours-pizza-delivery-cartoon-flyer_82574-11249.jpg?w=740'},
        {h1:' Airway ticket booking',
        p:'An online futsal booking website project revolved around designing a user-friendly interface, implementing efficient booking processes.',
        name:'https://img.freepik.com/free-psd/flat-design-travel-agency-template_23-2149611339.jpg?w=740&t=st=1693071276~exp=1693071876~hmac=7bd8ed7b4942292f7e68fe81f5529119e890417e7e67489ddbdf0f76a51f150a'},
    ]
  return (
    <div ref={ref} id='cv' className='flex'>
{/* left side */}
        <div className='w-1/4 pt-7 pl-12 pr-8 text-slate-100 bg-zinc-900'>
  {/* contact */}
          <div className=''>
          <div ><h1 className='uppercase text-xl font-bold pb-1 border-b-2 border-slate-100'>contact</h1></div>
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
            <div><h1 className='uppercase text-xl font-bold pb-1 border-b-2 border-slate-100'>Education</h1></div>
            <div className='mt-2'>
              {education.map((val,i)=>{
                return <div key={i} className='my-5'>
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
            <div><h1 className='uppercase text-xl font-bold pb-1 border-b-2 border-slate-100'>Skills</h1></div>
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
        <div className='w-3/4 pt-7 bg-slate-100 text-zinc-900'>
      {/* Intro */}
          <div className='pl-16 py-6'>
            <h1 className='text-5xl font-bold'>Safal Thapa</h1>
            <p className='text-lg font-medium'>Full-stack Developer</p>
          </div>
          <div className='pl-16 pr-24 my-3'>
              <p className='text-base font-medium'>{intro.p}</p>
          </div>
  {/* another section */}
          <div className='pl-16 pr-24'>
            {/* Experience */}
            <div>
              <h1 className='pb-1 border-b-2 border-zinc-900 uppercase text-xl font-bold mb-5'>Experience</h1>
              <div className='pl-6'>
                <p className='max-w-[85ch] text-justify'>{experience[0].status}</p>
              </div>
            </div>
            {/* Projects */}
            <div className='my-5'>
              <h1 className='pb-1 border-b-2 border-zinc-900 uppercase text-xl font-bold mb-5'>Projects</h1>
              {project.map((val,i)=>{
                return <div key={i} className='my-3'>
                  <h1 className='font-medium'>{val.h1}</h1>
                  <ul className='ml-24'>
                    <li className='max-w-[80ch] list-disc leading-5 tracking-wide'>{val.p}</li>
                  </ul>
                </div>
              })}
            </div>
          </div>
        </div>
    </div>
  )
})

export default CV