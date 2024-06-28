import React from 'react'

const Education = () => {
  return (
    <section className='md:px-36 max-md:px-14 py-28'> 
        <h1 className='text-4xl text-center font-bold text-indigo-950 pb-14'>Education and Qualifications</h1>
        <div className='flex flex-col md:flex-row-reverse max-md:space-y-14 text-gray-700'>
            <div className='w-1/3 max-md:w-full md:space-y-3 shadow-xl p-14 max-md:p-8 bg-slate-50 hover:bg-white rounded-lg'>
                    <h3 className='text-indigo-500'><strong>Bachelor's Degree - Mechanical Engineering</strong></h3>
                    <p>Bannari Amman Institute of Technology</p>
                    <h5>Year of passing out: 2025</h5>
            </div>
            <div className='w-1/3 max-md:w-full md:space-y-3 shadow-lg p-14 max-md:p-8 md:mx-14 bg-slate-50 hover:bg-white rounded-lg'>
                    <h3 className='text-indigo-500'><strong>HSC - Tamil Nadu State Board</strong></h3>
                    <p>Studied at R.G Matric HR SEC School</p>
                    <h5>Passed out at 2021</h5>
            </div>
            <div className='w-1/3 max-md:w-full md:space-y-3 shadow-md max-md:p-8 p-14 bg-slate-50 hover:bg-white rounded-lg'>
                    <h3 className='text-indigo-500'><strong>SSLC - Tamil Nadu State Board</strong></h3>
                    <p>Studied at R.G Matric HR SEC School</p>
                    <h5>Passed out at 2019</h5>
            </div>
        </div>
    </section>
  )
}

export default Education