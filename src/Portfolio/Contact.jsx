import React from 'react'
import {Form,Field,ErrorMessage,Formik} from 'formik'
import {MdOutlinePhoneAndroid} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {FaFacebookF} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import * as yup from 'yup'

const schema=yup.object().shape({
    firstname:yup.string().required('First Name is required'),
    lastname:yup.string().required('Last Name is required'),
    email:yup.string().required('Email is required'),
    subject:yup.string().required('Subject is required'),
    message:yup.string().required('Type a message'),
})

function Contact() {
    const listdata=[
        {h1:'tsafal06@gmail.com',textcolor:'text-slate-700',icon:<MdEmail/>},
        {h1:'+9779866694728',textcolor:'text-red-400',icon:<MdOutlinePhoneAndroid/>},
        {h1:'https://www.facebook.com/',textcolor:'text-blue-600',icon:<FaFacebookF/>},
        {h1:'https://github.com/777Safal' ,textcolor:'text-zinc-800',icon:<BsGithub/>},
    ]
    const formdata=[
        {label:'First Name',
        type:'text',
        identiy:'firstname'},
        {label:'Last Name',
        type:'text',
        identiy:'lastname'},
        {label:'Email',
        type:'email',
        identiy:'email'},
        {label:'Subject',
        type:'text',
        identiy:'subject'},
        {label:'Message',
        type:'text',
        identiy:'message'},
    ]
  return (
    <div id='contact' className='lg:h-[70vh] my-10'>
        <div className='w-10/12 h-full mx-auto lg:flex bg-slate-100'>
            <div className='lg:w-2/5  w-full pl-5'>
                <h1 className='text-2xl font-medium mt-7 pt-2'>Contact</h1>
                <p className='mt-3 md:mb-5 mb-3 text-sm md:text-base'>Looking forward to hear from you.</p>
                <div className='w-fit mx-auto grid grid-rows-4 sm:grid sm:grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-0 lg:mb-0 mb-2'>
                    {
                        listdata.map((val,i)=>{
                            return <div key={i} className='flex lg:my-2  items-center md:text-base text-sm'>
                                <div className='bg-amber-400 md:w-8 w-5 md:h-8 h-5 flex justify-center items-center rounded-full md:text-xl text-sm mr-2'>{val.icon}</div>
                            <h1 className='text-sm'>{val.h1}</h1>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='lg:w-3/5 w-full bg-amber-400'>
                <Formik
                initialValues={{
                    firstname:'',
                    lastname:'',
                    email:'',
                    subject:'',
                    message:'',
                }}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
                >
                    {({handleSubmit})=>{
                        return <Form onSubmit={handleSubmit}>
                            <div className='w-11/12 lg:pt-7 pt-5 md:flex md:flex-wrap mx-auto'>
                                {formdata.map((val,i)=>{
                                    if (val.identiy==='message'){
                                        return <div key={i} className='px-2 my-3 w-full flex flex-col'>
                                            <label className='text-sm md:text-base'>{val.label}</label>
                                            <textarea type={val.type} name={val.name} className='h-24 mt-1 outline-none pl-1 py-2 rounded-sm text-sm md:text-base'/>
                                        </div>
                                    }
                                    else {
                                        return <div key={i} className='px-2 md:my-3 my-1 flex flex-col md:w-2/4'>
                                            <label className='text-sm md:text-base'>{val.label}</label>
                                            <Field type={val.type} name={val.identiy}
                                            className='mt-1 text-sm md:text-base outline-none pl-1 md:py-2 py-1 rounded-sm'/>
                                        </div>
                                    }
                                })}
                            </div>
                            <div className='md:ml-9 ml-6 mt-3'>
                                <button type='submit' className='lg:px-8 lg:mb-0 mb-3 lg:py-3 px-3 py-2 text-amber-400 md:text-lg text-base font-medium bg-slate-100 rounded-sm border border-slate-100 hover:bg-amber-400 hover:text-slate-100'>Submit</button>
                            </div>
                        </Form>
                    }}
                </Formik>
            </div>
        </div>
    </div>
  )
}

export default Contact