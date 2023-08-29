import React from 'react'

function Project() {
    const data=[
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
    <div id='project' className='w-10/12 pt-7 mt-10 pb-5 mx-auto bg-slate-100'>
        <div className='pl-5'><h1 className='text-2xl font-medium mt-7'>Project</h1></div>
        <div className='pl-8 mt-2'><p>Some of the sample of my work.</p></div>
       <div className='px-10'>
       <div className='my-5 flex justify-between'>
            {data.map((val,i)=>{
                return <div key={i} className='bg-blue-300 w-80 h-96 rounded-md overflow-y-scroll'>
                    <div className='w-60 h-72 mx-auto'
                     style={{ 
                        backgroundImage: `url(${val.name})`,
                         backgroundSize: 'cover',
                         backgroundPosition:'center'}}>
                    </div>
                    <div className='px-5'>
                        <h1 className='text-center text-lg my-3 font-medium'>{val.h1}</h1>
                        <p className='text-center text-sm'>{val.p}</p>
                    </div>
                </div>
            })}
        </div>
       </div>
    </div>
  )
}

export default Project