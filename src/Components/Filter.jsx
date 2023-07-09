import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { FaTag } from 'react-icons/fa'
import { GoMilestone } from 'react-icons/go'

const Filter = () => {
  return (
    <div className='text-slate-100 gap-y-5 flex flex-col-reverse lg:flex-row  justify-between lg:w-[80%] w-[95%] m-auto mt-10'>

    {/* fliter right side */} 
      <div className="flex border lg:w-[55%] rounded-lg  ">
        <div className="flex items-center border-r  px-4">
          <span>Filters</span>
          <span className="">
            <IoMdArrowDropdown size={20} />
          </span>
        </div>
        <div className="flex items-center gap-x-3 w-[100%]   px-4">
          <span className="">
            <FiSearch size={20} />
          </span>
          <div className="w-[100%] text-slate-800">
            <input
              className="w-[100%] bg-slate-900 outline-none"
              type="text"
              placeholder="is:issue is:open"
            />
          </div>
        </div>
      </div>

      {/* fliter left side */}
      <div className='flex  sm:gap-x-5 max-[400px]:text-[8px] sm:text-sm justify-between '>
     <div className='border flex rounded-lg'>
     <div className='flex items-center gap-x-2 px-2 border-r'>
     <span><FaTag size={20}/></span>
     <span>Labels</span>
     <span className='bg-slate-600 px-2 rounded-full'>9</span>
     </div>
     <div className='flex items-center gap-x-2 px-2 border-l ' >
     <span  ><GoMilestone size={20}/></span>
     <span >MileStones</span>
     <span  className='bg-slate-600 px-2 rounded-full '>5</span>
     </div>
     </div>

     <span className=' bg-green-600 px-3 py-1 rounded-lg'>New issue</span>

      </div>

    </div>
  )
}

export default Filter
