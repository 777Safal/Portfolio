import React,
{useRef} from 'react'
import ReactToPrint from 'react-to-print';
import CV from './CV';

function Portfolio() {
  const refdata=useRef()
    const data=[
        {h1:'My name is Safal Thapa.'},
        {h1:'In the journey to be a good coder.'}
    ]
  return (
    <div id='#' className='h-[80vh] flex justify-center'>
        <div className='w-10/12 bg-slate-100 flex'>
            <div className='w-3/5 px-5 h-full flex items-center'>
                <div className='text-zinc-800'>
                  <h1 className='uppercase text-3xl font-medium'>hello</h1>
                  <p className='text-3xl'>{data[0].h1}</p>
                  <p className='text-2xl w-72'>{data[1].h1}</p>

                  <ReactToPrint
        documentTitle="Safal_CV"
        trigger={() => <button className='mt-10 w-48 py-2 bg-yellow-300 hover:bg-zinc-700 hover:text-yellow-300'>Downlad CV</button>}
        content={() => refdata.current}/>
       <div className='hidden'>
       <CV ref={refdata} />
       </div>

                  <div className='w-10 h-10 '>
                    <img src="" alt="" />
                  </div>
                </div>
            </div>
            <div className='w-2/5 pr-5 flex justify-center items-center'>
                {/* <img className='w' style={{
                }}/> */}
                <div className='w-[400px] h-[61vh] rounded-full bg-cover
                bg-no-repeat drop-shadow-2xl bg-red-400 bg-center
                bg-[url(https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/274978817_3219675714918831_630412150615376665_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=1UPh1ShAuLgAX9UvRKB&_nc_ht=scontent.fktm18-1.fna&oh=00_AfD2XC19yyUF4gXAKBht8nAOzzT44JwrecKUaty1xHvc7w&oe=64EC6D5E)]
                '>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio