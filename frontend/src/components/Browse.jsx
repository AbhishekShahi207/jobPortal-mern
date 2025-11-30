import React from 'react'
import Navbar from './shared/Navbar'
import Job from './JobsPage/Job'
const randomJobs =[1,2,3,4,4,5,6]

const Browse = () => {
  return (
    <div>
   <Navbar />
   <div className='max-w-7xl my-10 mx-auto '>
   <h1 className='font-bold text-lg my-10'>Search result {randomJobs.length} </h1>
   
    <div className='grid grid-cols-3 gap-4'>
    {randomJobs.map(()=>(
        <Job/>
    ))}
    </div>
   


   </div>
    </div>
  )
}

export default Browse
