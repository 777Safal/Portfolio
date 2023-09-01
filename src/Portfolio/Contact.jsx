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
    <div id='contact' className='h-[70vh] my-10'>
        <div className='w-10/12 h-full mx-auto flex bg-slate-100'>
            <div className='w-2/5 pl-5'>
                <h1 className='text-2xl font-medium mt-7'>Contact</h1>
                <p className='mt-3 mb-5'>Looking forward to hear from you.</p>
                <div className='pl-10 grid grid-rows-5 gap-2'>
                    {
                        listdata.map((val,i)=>{
                            return <div key={i} className='flex items-center text-base'>
                                <div className='bg-amber-400 w-8 h-8 flex justify-center items-center rounded-full text-xl mr-2'>{val.icon}</div>
                            <h1>{val.h1}</h1>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='w-3/5 bg-amber-400'>
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
                            <div className='w-11/12 pt-7 flex flex-wrap m-auto'>
                                {formdata.map((val,i)=>{
                                    if (val.identiy==='message'){
                                        return <div key={i} className='px-2 my-3 w-full flex flex-col'>
                                            <label>{val.label}</label>
                                            <textarea type={val.type} name={val.name} className='h-24 mt-1 outline-none pl-1 py-2 rounded-sm'/>
                                        </div>
                                    }
                                    else {
                                        return <div key={i} className='px-2 my-3 flex flex-col w-2/4'>
                                            <label>{val.label}</label>
                                            <Field type={val.type} name={val.identiy}
                                            className='mt-1 outline-none pl-1 py-2 rounded-sm'/>
                                        </div>
                                    }
                                })}
                            </div>
                            <div className='ml-9'>
                                <button type='submit' className='px-8 py-3 text-amber-400 text-lg font-medium bg-slate-100 rounded-sm border border-slate-100 hover:bg-amber-400 hover:text-slate-100'>Submit</button>
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