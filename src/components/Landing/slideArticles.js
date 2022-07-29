import React from 'react';
import  {HiArrowNarrowLeft ,  HiArrowNarrowRight} from  "react-icons/hi"


const slideArticles = ({title}) => {
  return (
    <div className="container-fluid flex justify-center items-center">
        <div className="">
            <div className="py-3 px-3">
                <h3 className="text-gray-700 font-bold">A la une </h3>
            </div>
            {}
            <div className="container flex  flex-row transition duration-150 ease-in-out">
                <div className="py-1 px-1 border  flex flex-row ">
                    <button className="p-3 rounded-[50%]"><HiArrowNarrowLeft className="h-5 w-5"/></button>
                    <button className="p-3 rounded-[50%]"><HiArrowNarrowRight className="h-5 w-5"/></button>
                </div>
                <div>
                    {
                        
                    }

                </div>
            </div>
        </div>
    </div>
  )
}

export default slideArticles ;