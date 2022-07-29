import React from 'react';
import  {Link} from  "react-router-dom";
import  {BsSearch ,BsArrowRight} from  "react-icons/bs";

const articles = [
    {
        id :"#1" , autheur:"John Kenendy", title:"Pouquoi les caméléon on t la capacité de couleur", date:"14/072022",
        imageSrc:"https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id :"#1" , autheur:"John Kenendy",  title:"Pouquoi les caméléon on t la capacité de couleur", date:"14/072022",
        imageSrc:"https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id :"#1" , autheur:"John Kenendy",  title:"Pouquoi les caméléon on t la capacité de couleur", date:"14/072022",
        imageSrc:"https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id :"#1" , autheur:"John Kenendy",  title:"Pouquoi les caméléon on t la capacité de couleur", date:"14/072022",
        imageSrc:"https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
]


const ListArticles = () => {
  return (
    <div className="container-fluid flex-items-center justify-center">
        <div  classname="flex  flex-col justify-center p-1 px-3 items-center">
            {/**  page title */}
            <div className="flex flex-row justify-center py-2 border-b my-1">
                <h2 className="text-center text-3xl font-bold ">
                    Listes des articles
                </h2>
            </div>
            
            {/*  search bar */}
              <div className="conatiner-fluid flex justify-center transition ease-in-out 300s" >
                  <div className="flex items-center justify-center">                     
                        <input type="text" placeholder="rechercher un article"  
                        className="py-2 pl-2 mr-0 rouunded-lg border-b w-full"
                         />
                        <button type="button" className=" bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600 active:bg-blue-700">
                            <BsSearch  className="h-5 w-4" />
                        </button>
                  </div>
              </div>

            {/*  container */}
              <div className="conatiner-fluid flex justif-center transition ease-in-out 300s">
                  <div className="">
                      <h2 className="text-2xl font-bold py-2 px-1 mx-2">
                          Catégories  :  <span className="text-xl font-serif">développement</span>
                      </h2>
                  </div>
              </div>

                <div className="flex items-center justify-center px-4">
                    <div className="container grid grid-cols-1 sm:grid-cols-2 px-3 py-2 md:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-items-center py-1 mx-1">
                        {
                            articles.map((article)=>
                                <Link to="/detail/id:" >
                                    <div className=" w-[100%] flex-items-center  border-b rounded justify-center p-1 shadow-lg hover:shadow-2xl cursor-pointer">
                                        <div classname="w-[100%]">
                                            <img src={article.imageSrc} className="w-[100%]" />
                                        </div>
                                        <div className=" border-t my-1">
                                            <div className="py- flex  text-left hover:text-indigo-700">
                                                <h2 className="font-bold text-xl uppercase">{article.title}</h2>
                                            </div>
                                            <div className="mt-2 text-left  flex py-1 px-2">
                                                <p className="text-left"> publié
                                                    <span className="bg-gray-200 rounded-xl">
                                                        {article.date}
                                                    </span>
                                                    <span className="font-bold" >
                                                        par
                                                    </span>
                                                    <div className="pt-1  flex space-x-2">
                                                        <img src={article.imageSrc} className="h-10 w-10  rounded-[50%]" />
                                                        <h2 className="font-bold">{article.autheur}</h2>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )

                        }
                    </div>
                </div>

            </div>
        </div>
   
  )
}

export default ListArticles ; 
