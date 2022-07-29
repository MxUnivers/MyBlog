import React from 'react';
import  {Link} from "react-router-dom";
import {GrView} from "react-icons/gr" ;

const  articles = [
    {
        id:"1",
        name:"Les Magsines de made in china",
        category :"Sport",
        date:"12/07/2022",
        ImageSrc:"https://images.pexels.com/photos/4467632/pexels-photo-4467632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:"1",
        name:"Les Magsines de made in china",
        category :"Sport",
        date:"12/07/2022",
        ImageSrc:"https://images.pexels.com/photos/4467632/pexels-photo-4467632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:"1",
        name:"Les Magsines de made in china",
        category :"Sport",
        date:"12/07/2022",
        ImageSrc:"https://images.pexels.com/photos/4467632/pexels-photo-4467632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    
]

const MoreArticles = () => {
  return (
      
          <div className="flex-col justify-center items-center py-3 w-[100%] sm:w-[100%] md:w-[40%] lg:w-[30%] ">
              {/* Lire aussi */}
              <div className="mx-2 py-2">
                  <h3 className="text-3xl font-bold">Vous aimerez aussi</h3>
              </div>
              
              <div class="container mx-auto">
                      <div className=" flex flex-wrap grid-cols-3 md:grid-cols-1 sm:grid-ols-1  lg:grid-cols-1">
                          {
                              articles.map((article) =>
                              <div className="w-full sm:w-full md:w-[1/2] lg:w-full  mx-5 p-4">
                              <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                  <div className="relative pb-48 overflow-hidden">
                                      <img className="absolute h-full w-full object-cover" src={article.ImageSrc}  alt="" />
                                  </div>
                                  <div className="p-4 text-left">
                                      <span className="text-left inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded font-semibold uppercase  ">Highlight</span>
                                      <h2 className="mt-2 mb-2  font-bold">Purus Ullamcorper Inceptos Nibh</h2>
                                  </div>
                                  <div className=" relative flex p-4 border-t border-b text-xs text-gray-700">
                                      <span className="flex items-center mb-1">
                                          <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 
                                      </span>
                                      <span className="absolute z-1 top-3 right-1 flex items-center mb-1">
                                          <button className="bg-blue-600 text-white py-1 px-3 rounded-2xl"> aller</button>
                                      </span>
                                  </div>

                              </a>
                          </div>
                              )
                          }
                          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-full  mx-5 p-4">
                                      <Link to="/list-articles" className="flex items-center jusitify-center bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                          <h3 className=" flex text-center text-2xl font-bold hover:text-blue-500 ">
                                            Voir plus
                                          </h3>
                                      </Link>
                                  </div>
                      </div>
                  </div>

                  {/* santé */}
                  <div className="border-b border-bold-3xl ">
                    
                  </div>

              </div>

        
     
  )
}

export default MoreArticles