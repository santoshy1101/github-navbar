import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import {
  FiSearch,
  FiPlus,
  FiCode,
  FiBookOpen,
  FiSettings,
} from 'react-icons/fi'
import { GoCommandPalette, GoProjectSymlink } from 'react-icons/go'
import { IoMdArrowDropdown } from 'react-icons/io'
import { GoIssueOpened } from 'react-icons/go'
import { AiOutlinePullRequest } from 'react-icons/ai'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { MdOutlineSecurity } from 'react-icons/md'
import { CgInsights } from 'react-icons/cg'

// FiMenu FaCirclePlay

const Issue = () => {
  return (
    <div className="bg-[#24292f] pt-2 text-slate-100 flex flex-col gap-5">
      {/*    header top */}
      <div className="bg-[#24292f]  flex justify-between items-center px-2   py-[2px] ">
        {/*    header top  left*/}
        <div className="flex gap-3  items-center  ">
          {/* p1 for size */}
          <span className="flex border rounded-md border-slate-400 items-center p-1  justify-around">
            <FiMenu size={17} />
          </span>
          <span>
            <FaGithub size={20} />
          </span>
          <span className="text-ellipsis overflow-hidden ">
            santoshy1101 / question-milk-2296
          </span>
        </div>

        {/*    header top right */}

        <div className="flex gap-x-3 px-2 ">
          <span className="min-[1024px]:border-r border-slate-200 min-[1024px]:px-4 flex  ">
            <span className="flex border rounded-md border-slate-200  items-center px-1 ">
              <span className="flex items-center gap-2 ">
                <FiSearch size={20} />
                <span className="min-w-[200px] border-r mr-1 hidden md:block">
                  Type{' '}
                  <span className="border  border-slate-200 px-1 rounded-[3px]">
                    /
                  </span>{' '}
                  to search
                </span>
              </span>
              <GoCommandPalette className="hidden md:block" size={20} />
            </span>
          </span>
          <span className="flex border  rounded-md border-slate-400 items-center p-1 justify-around max-[1024px]:hidden">
            <FiPlus size={17} /> <IoMdArrowDropdown size={20} />
          </span>
          <span className="flex border rounded-md border-slate-400 items-center p-1 justify-around max-[1024px]:hidden">
            <GoIssueOpened size={17} />
          </span>
          <span className="flex border rounded-md border-slate-400 items-center p-1 justify-around">
            <AiOutlinePullRequest size={17} />
          </span>
          <span className="w-[30px] flex border-[1.5px] rounded-[50px]  border-slate-400 items-center   justify-around">
            <img
              src="https://avatars.githubusercontent.com/u/107991675?v=4"
              alt="santosh"
              className="w-[100%] rounded-full bg-slate-300"
            />
          </span>
        </div>
      </div>

      {/*       header bottom*/}
      <div className="flex items-center gap-x-8 px-3  overflow-auto">
        <span className="flex items-center gap-x-2">
          {' '}
          <FiCode size={17} /> Code
        </span>
        <span className="flex items-center gap-x-2 border-b-2 py-2 px-2 border-orange-500">
          <GoIssueOpened size={17} /> Issues{' '}
        </span>
        <span className="flex flex-row  items-center gap-x-2">
          {' '}
          <AiOutlinePullRequest size={17} />
          <p className="whitespace-nowrap text-ellipsis overflow-hidden">
            Pull Requests
          </p>
        </span>
        <span className="flex items-center gap-x-2">
          <BsFillPlayCircleFill size={17} /> Actions
        </span>
        <span className="flex items-center gap-x-2">
          <GoProjectSymlink size={17} /> Projects
        </span>
        <span className="flex items-center gap-x-2">
          <FiBookOpen size={17} /> Wiki
        </span>
        <span className="flex items-center gap-x-2">
          <MdOutlineSecurity size={17} /> Security
        </span>
        <span className="flex items-center gap-x-2">
          <CgInsights size={17} /> Insight
        </span>
        <span className="flex items-center gap-x-2">
          <FiSettings size={17} /> Setting
        </span>
      </div>
    </div>
  )
}

export default Issue
