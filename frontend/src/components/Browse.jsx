
import Navbar from './shared/Navbar'
import Job from './JobsPage/Job'
import {  useDispatch, useSelector } from 'react-redux'


import { useEffect } from 'react'
import { setSearchedQuery as search } from '../redux/jobSlice'
import useGetAllJobs from '../hooks/useGetAllJobs'



const Browse = () => {
  useGetAllJobs()
   const{allJobs,setSearchedQuery}=useSelector(store=>store.job)
  const dispatch=useDispatch()
  console.log(setSearchedQuery)
 useEffect(()=>{
  return ()=>{
    dispatch(search(""))
  }
 })





  return (
    <div>
   <Navbar />
   <div className='max-w-7xl my-10 mx-auto '>
   <h1 className='font-bold text-lg my-10'>Search result {allJobs.length} </h1>
   
    <div className='grid grid-cols-3 gap-4'>
    {allJobs.map((job)=>(
        <Job key={job._id} job={job}/>
    ))}
    </div>
   


   </div>
    </div>
  )
}

export default Browse
