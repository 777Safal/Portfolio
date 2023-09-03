import React,{useState,useEffect} from 'react'

function Resume() {
    const tabledata=[
        {h1:'Work Experience', yr:'2023-present',
         status:'I am currently serving as a dedicated Frontend Developer intern at HUBIT, where I am actively contributing to web development projects. Throughout my internship, I have been honing my skills in building responsive and visually appealing user interfaces using modern web technologies. Collaborating with the development team, I have gained hands-on experience in translating design concepts into functional and interactive web applications. This opportunity at HUBIT has provided me with invaluable insights into the world of frontend development, helping me refine my coding proficiency and problem-solving abilities within a professional. environment'},
        {h1:'Education', yr:'2019-2024',
         status:'Currently studying Bachelor in Information Managment (BIM) 7th semaster at Lumbini city college.Passed +2 in 2019 '},
    ]
    const skills=[
      {h1:'HTML/CSS: Proficient in creating structured, semantically meaningful HTML and styling it with CSS, including responsive design.'},
      {h1:'HTML/CSS: Proficient in creating structured, semantically meaningful HTML and styling it with CSS, including responsive design.'},
      {h1:'HTML/CSS: Proficient in creating structured, semantically meaningful HTML and styling it with CSS, including responsive design.'},
      {h1:'HTML/CSS: Proficient in creating structured, semantically meaningful HTML and styling it with CSS, including responsive design.'},
      {h1:'HTML/CSS: Proficient in creating structured, semantically meaningful HTML and styling it with CSS, including responsive design.'},
    ]
    
  return (
    <div id='resume' className='w-10/12 mt-10 px-5 py-7 bg-slate-100 mx-auto'>
        <h1 className='text-2xl font-medium '>Resume</h1>
        <div className='mt-5'>
           {tabledata.map((val,i)=>{
            return <div key={i} className='md:grid md:grid-cols-3 border-b-2 border-amber-400 py-5'>
              <div className='md:font-normal font-semibold'>{val.h1}</div>
              <div className='md:text-base text-sm'>{val.yr}</div>
              <div>{val.status}</div>
            </div>
           })}
           <div className='md:grid md:grid-cols-3 py-7 border-b-2 border-amber-400'>
            <div><h1 className='md:font-normal font-semibold'>Skills</h1></div>
            <div></div>
            <ul>
            {skills.map((val,i)=>{
            return <li key={i} className='text-sm list-disc md:ml-0 ml-5'>
                {val.h1}
            </li>
           })}
            </ul>
           </div>
            {/* <table>
                {tabledata.map((val,i)=>{
                  return <tr key={i}>
                    <td>{val.h1}</td>
                    <td>{val.yr}</td>
                    <td>{val.status}</td>
                  </tr>
                })}
            </table> */}
        </div>
    </div>
  )
}

export default Resume