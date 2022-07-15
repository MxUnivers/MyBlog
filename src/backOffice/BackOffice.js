import React from 'react'
import  {Link} from  "react-router-dom"
import { Outlet } from 'react-router-dom';
import  {AiOutlineFileAdd} from  "react-icons/ai";
import {HiOutlineStatusOffline , HiOutlineStatusOnline} from  "react-icons/hi"

const BackOffice = () => {
  return (
    <div className="constainer flex flex-col items-center justfy-center">

          <div className="container-fluid flex flex-col items-center justify-center">
              <div className="my-2">
                  <h2 className="text-4xl font-bold my-2 border-b py-1">BackOffice </h2>
              </div>
          </div>
          <div className="flex items-center justify-center  space-x-3">
              <div className="py-2 ">
                <Link to="post" >
                   <button className="flex flex-row text-xl py-2 px-3 bg-blue-600 text-white">
                      Créer article <AiOutlineFileAdd className="h-6 w-6" />
                   </button>
                </Link>
              </div>

              <div className="py-2 ">
                <Link to="online" >
                   <button className="flex flex-row text-xl py-2 px-3 bg-green-600 text-white">
                      article en ligne <HiOutlineStatusOnline className="h-6 w-6" />
                   </button>
                </Link>
              </div>

              <div className="py-2 ">
                <Link to="" >
                   <button className="flex flex-row text-xl py-2 px-3 bg-red-600 text-white">
                      article bloqués <HiOutlineStatusOffline className="h-6 w-6" />
                   </button>
                </Link>
              </div>
          </div>
          <Outlet/>

    </div>

  )
}

export default BackOffice ;