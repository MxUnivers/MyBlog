import React from 'react';
import {Link} from  "react-router-dom" ;


const  articles = [
    {
        id:"#artitle1" , category:"nature "  ,  description :"tout savoir sur la nautre",
        imageSrc:"https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:"#artitle1" , category:"developpemnt personnel "  ,  description :"Vire en paix aves soi même",
        imageSrc:"https://images.pexels.com/photos/40192/woman-happiness-sunrise-silhouette-40192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:"#artitle1" , category:"nature"  ,  description :"Le jardin le plus beau du monde",
        imageSrc:"https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:"#artitle1" , category:"Nature "  ,  description :"tout savoir sur la nautre",
        imageSrc:"https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]


const  articles2 = [
    {
        id:"#artitle1" , date:"12/07/2022", category:"site web ",title:"Les cryptomonaies en 2022"  ,  description :"La place des Cryptomonaies deviennent le moyen de painement le plus utilisé",
        imageSrc:"https://images.pexels.com/photos/7947959/pexels-photo-7947959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:"#artitle1" , date:"12/07/2022", category:"Site web",title:"Les cryptomonaies en 2022"  ,  description :"La place des Cryptomonaies deviennent le moyen de painement le plus utilisé",
        imageSrc:"https://images.pexels.com/photos/7947959/pexels-photo-7947959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]

const  articles3 = [
    {
        id:"#artitle1" , date:"12/07/2022", title:"Les cryptomonaies en 2022"  ,
        imageSrc:"https://images.pexels.com/photos/7947959/pexels-photo-7947959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:"#artitle1" , date:"12/07/2022", title:"Les cryptomonaies en 2022"  ,
        imageSrc:"https://images.pexels.com/photos/7947959/pexels-photo-7947959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:"#artitle1" , date:"12/07/2022", title:"Les cryptomonaies en 2022"  ,
        imageSrc:"https://images.pexels.com/photos/7947959/pexels-photo-7947959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:"#artitle1" , date:"12/07/2022", title:"Les cryptomonaies en 2022"  ,
        imageSrc:"https://images.pexels.com/photos/7947959/pexels-photo-7947959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]


const  articles4 = [
    {
        id:"#4" , title:"La place des applicaions mobile dans notre quotidien  ",date:"12/07/2022", category:"Techologies " ,description: "Il est très probable de ne pas passer une journée dans orendre son téléphone main" ,
        imageSrc:"https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]

const  articles5 = [
    {
        id:"#1" , title:"La place des applicaions mobile dans notre quotidien  ",date:"12/07/2022" ,
        imageSrc:"https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:"#1" , title:"La place des applicaions mobile dans notre quotidien  ",date:"12/07/2022" ,
        imageSrc:"https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:"#1" , title:"La place des applicaions mobile dans notre quotidien  ",date:"12/07/2022" ,
        imageSrc:"https://images.pexels.com/photos/4099095/pexels-photo-4099095.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:"#1" , title:"La place des applicaions mobile dans notre quotidien  ",date:"12/07/2022" ,
        imageSrc:"https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
]


const  articles6 = [
    {
        id:"#1" , title:"La place des applicaions mobile dans notre quotidien  ",date:"12/07/2022" ,
        imageSrc:"https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:"#1" , title:"La place des applicaions mobile dans notre quotidien  ",date:"12/07/2022" ,
        imageSrc:"https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:"#1" , title:"La place des applicaions mobile dans notre quotidien  ",date:"12/07/2022" ,
        imageSrc:"https://images.pexels.com/photos/4099095/pexels-photo-4099095.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:"#1" , title:"La place des applicaions mobile dans notre quotidien  ",date:"12/07/2022" ,
        imageSrc:"https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:"#1" , title:"La place des applicaions mobile dans notre quotidien  ",date:"12/07/2022" ,
        imageSrc:"https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
]


const ListArticles = () => {
    var nbre= 0;
    /*  fontion carrouselle */
function CarouselleRight (){
    
    var nbre2 =  200;
    var carouselle = document.getElementById("carouselle"); 
    carouselle.style.transform = "translateX("+nbre-nbre2+"px)";
}
function CarouselleLeft (){
    var nbre3 =  200;
    var carouselle = document.getElementById("carouselle"); 
    carouselle.style.transform = "translateX("+nbre+nbre3+"px)";
    
    
}



  return (
      <div className="constainer flex items-center justfy-center">

          <div className="container-fluid flex flex-col items-center justify-center">

              <div classNaeme="my-5">
                  <h2 className="text-4xl font-bold my-5">Listes des articles</h2>
              </div>



              <div className="conatiner-fluid flex flex-row items-center  justify-center">
                  <div className="container mx-1  p-4 ">
                      <div className="flex flex-col space-y-2 space-y-2 md:space-y-2 lg:space-y-2 sm:flex-col md:flex-col lg:flex-row justify-center items-center border-t ml-2  border-b my-2 py-1 sm:visible md:visible lg:visible">
                          {/* Article Header */}
                          <div className="w-50% h-[50%] flex justify-center items-center">
                              <Link to="/detail/id:"><div className='relative z-1 '>
                                  <img src="https://images.pexels.com/photos/3133685/pexels-photo-3133685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                      className="w-full  bg-gradient-to-t  from-black to-transparent" />
                                  <div className="flex flex-col justify-items-start  absolute z-3 left-0 bottom-2 p-2">
                                      <div className="text-left">
                                          <button type="button" className="bg-gray-500 py-1 px-2   text-white uppercase">conseils & astuces</button>
                                      </div>
                                      <div className="my-1 mx-1">
                                          <h1 className="text-white font-bold text-xl text-left uppercase">Tout savoir sur les accrobates </h1>
                                          <p className="text-base text-white font-bold text-left mt-2">12/07/2022</p>
                                      </div>
                                  </div>
                              </div>
                              </Link>
                          </div>
                          {/*Other article */}
                          <div className="container-fluid flex flex justify-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[90%]  mx-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                              {
                                  articles.map((article) =>
                                      <Link to="/detail/id:"><div className='relative z-1 w-full '>
                                          <img src={article.imageSrc}
                                              className="w-full bg-gradient-to-t  from-black to-transparent" />
                                          <div className="flex flex-col justify-items-start  absolute z-3 left-0 top-2 p-2">
                                              <div className="text-left">
                                                  <button type="button" className="bg-gray-500 py-1 px-2   text-white uppercase">{article.description}</button>
                                              </div>
                                              <div className="my-1 mx-1">
                                                  <h1 className="text-white font-bold text-xl text-left uppercase">{article.description}</h1>
                                                  <p className="text-base text-white font-bold text-left mt-2">12/07/2022</p>
                                              </div>
                                          </div>
                                      </div>
                                      </Link>
                                  )
                              }
                          </div>
                          
                      </div>
                      <div>
                      </div>
                  </div>
              </div>


              {/* Other article catégories */}
              <div className="conatiner flex flex-row items-center  justify-center">
                  <div className="container mx-5  p-4 ">

                       <div className="py-3">
                           <h3 className="text-xl text-left font-bold font-serif ">Site web</h3>
                       </div>

                      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col">
                      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center border-t  border-b my-2 py-1">
                         {/** first content */}
                        {
                            articles2.map((article)=>
                                <Link to="/detail/id:"><div className="w-[100%] p-3 rounded-lg shadow flex  flex-row  justify-center  items-center ">
                                    <div className="flex-col ">
                                        <div className="relative">
                                            <img src={article.imageSrc}
                                                className="w-full" />
                                            <button type="button" className=" absolute z-2 bottom-2 left-1 bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
                                                {article.category}
                                            </button>
                                        </div>
                                        <div className="my-2 w-[100%] flex flex-col  justify-items-start overflow-hidden">
                                            <h2 className="py-2 text-left text-2xl font-bold ">{article.title}</h2>
                                            <div className="mt-3 ">
                                                <p className="my-1 text-left">publié le <span className="bg-gray-200 ">{article.date}</span></p>
                                                <p className="text-xl text-left">{article.description} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            )
                        }
                      </div>

                      <div className="flex flex-wrap grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-center items-center border-t mt-9  border-b my-2 py-1 py-2 pt-5">

                        {
                            articles3.map((article)=>
                                 
                                <Link to="/detail/id:"><div class=" w-full lg:w-[100%] flex flex-row sm:flex-row md:flex-row lg:flex-row border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 ">
                                    <div class="bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Mountain">
                                        <img src="https://images.pexels.com/photos/7947707/pexels-photo-7947707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        className=" h-20 lg:h-auto lg:w-28 flex-none " alt="" />
                                    </div>
                                    <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div class="mb-8">
                                            <div class="text-gray-900 font-bold text-xl mb-2 text-left">{article.title}</div>
                                            <p class="text-gray-700 text-base text-left">{article.date}</p>
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


              {/* block 3 */}
              <div className="container flex flex-col items-center justify-center py-1  pl-9">
                  <div className="flex-col">
                      <div className="text-left mt-1 py-1 ">
                          <h3 className="text-xl font-bold font-serif ">Marketing</h3>
                      </div>
                      {/* container */}
                      <div className="flex-items justify-center grid grid-cols-2 border-t mt-1  border-b my-2 py-1 py-2 pt-1">
                        
                        {/*first content*/}
                          {
                            articles4.map((article)=>
                                <Link to="/detail/id:"><div className="w-full  rounded-lg shadow flex  flex-row  justify-center  items-center ">
                                    <div className="flex-col ">
                                        <div className="">
                                            <img src={article.imageSrc}
                                                className="w-full h-[100%]" />
                                            
                                        </div>
                                        <div className="my-2 w-[100%] flex flex-col  justify-items-start overflow-hidden">
                                            <h2 className="py-2 text-left text-2xl font-bold ">{article.title}</h2>
                                            <div className="mt-3 ">
                                                <p className="my-1 text-left">publié le <span className="bg-gray-200 ">{article.date}</span></p>
                                                <p className="text-xl text-left">{article.description} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            )
                          }
                        {/* second content */}
                        <div className="w-.full] grid grid-cols-2 flex flex-row items-center justify-center ">
                            {
                                articles5.map((article)=>
                                    <Link to="/detail/id:"><div className="flex  flex-col items-center justify-center rounded-lg shadow p-1">
                                        
                                            <div className="flex justify-center items-center">
                                            <img src={article.imageSrc}
                                               className="w-[100%] " />
                                            </div>
                                       
                                        <div className="my-1">
                                            <h1 className=" font-bold text-left">{article.title}</h1>
                                            <div className="mt-2 pt-2 py-1 text-left" >
                                                <p classname="text-xl text-left">publié <span className="bg-gray-300 rounded-lg ">{article.date}</span></p>
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

              {/* block 4 */}

              <div className=" mt-2 container-fluid justify-center items-center">
                

                  <div className="py-2 mt-1 text-left px-2 flex border-b my-2">
                      <h3 className="text-xl font-bold font-mono uppercase">Conseil et astuces</h3>
                      <div className="flex-end">
                          <h3 className="text-right space-x-2">
                              <button type="button" id="btn-left" onClick={CarouselleLeft} className="bg-gray-300 rounded-lg py-1 px-2 text-xl font-extrabold mx-1 hover:bg-gray-400 active:bg-gray-500">{"<"}</button>
                              <button type="button" id="btn-right" onClick={CarouselleRight} className="bg-gray-300 rounded-lg py-1 px-2  text-xl font-extrabold mx-1 hover:bg-gray-400 active:bg-gray-500">{">"}</button>
                          </h3>
                      </div>
                  </div>
                  

                <div className="relative z-4  container-fluid w-[660px] h-[300px] overflow-hidden pt-2 py-1 "> 
                    <div id="carouselle" className="transition ease-in-out 10s  absolute z-2 top-0 left-0 flex flex-row items-center justify-center">
                          {
                              articles6.map((article) =>
                                  <Link to="/detail/id:"><div className="w-[200px] mx-2  flex  flex-col items-center justify-center rounded-lg shadow p-1">
                                      
                                          <img src={article.imageSrc}
                                              className="[400px]" />
                                      
                                      <div className="my-1">
                                          <h1 className=" font-bold text-left">{article.title}</h1>
                                          <div className="mt-2 pt-2 py-1 text-left" >
                                              <p classname="text-xl text-left">publié <span className="bg-gray-300 rounded-lg ">{article.date}</span></p>
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
      </div>

      
  )
}

export default ListArticles ;