import React from 'react'
import  {Link} from  "react-router-dom"
import  {FaFacebookF} from  "react-icons/fa";
import  {SiYoutube} from "react-icons/si";
import  {BsWhatsapp} from  "react-icons/bs";
import {AiFillLike}  from  "react-icons/ai";

const ArticleView = () => {
  const paragrphe =  [1,2,3,4,5] ;
  return (
    
    
        <div className="container-fluid bg-white mx-3 rounded-lg w-[100%] sm:w-[100%] md:w-[60%] lg:w-[70%]">
          <div className=" flex shadow rounded-lg mx-3 py-3 px-3">
            <img  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            className="rounded-[50%] h-20 w-20"/>
            <div className="flex-col justif-start mx-2">
              <h1 >Nom d'autheur</h1>
              <p>publié le <span>12/07/2022</span></p>
            </div>
            <div className="flex space-x-3">
              <Link to="#"> <div  className="m-2"><FaFacebookF  className ="h-10 w-10 p-1  text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700" /></div></Link>
              <Link to="#"> <div  className="m-2"><SiYoutube  className ="h-10 w-10 p-1  text-white bg-red-500 hover:bg-red-600 active:bg-red-700" /></div></Link>
              <Link to="#"> <div  className="m-2"><BsWhatsapp  className ="h-10 w-10 p-1  text-white bg-green-500 hover:bg-gren-600 active:bg-green-700" /></div></Link>
            </div>
          </div>
          {/* description de l'artciles */}
          <div className="container my-1  mt-5 text-gray-500">
            <p className="px-3 italic">L'intélligence articficielle articficielle , une révolutuon qui pourrait faire chager les conceptions qu'on a de notre monde </p>
          </div>
          {/* image de couverture d'article */}
            <div className="h-100 w-full pt-5 py-3" >
              <img  className="h-100 w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJY82_orZH-Uhffb4PttFzSq1em-X9ZAE2g&usqp=CAU" />
            </div>
            {/* proposition d'article  */}
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row mt-6 mb-5 pb-5 px-5  py-pt-3 border-b border-gray-400">
              <div className="my-2 py-2">
                <h2 className="text-xxl font-bold">Voir aussi </h2>
              </div>
              <div className="py-2 space-y-2 px-3 pl-6">
                 <p className=" font-bold text-gray-800 hover:text-blue-800 underline cursor-pointer">le sujet de proposiotion d'articles en question <span className=""></span> </p>
                 <p className=" font-bold text-gray-800 hover:text-blue-800 underline cursor-pointer">le sujet de proposiotion d'articles en question </p>
                 <p className=" font-bold text-gray-800 hover:text-blue-800 underline cursor-pointer">le sujet de proposiotion d'articles en question </p>
              </div>
            </div>

          {/* paragraphe */}
          <section className="container-fluid  py-3 px-3">
              {
                paragrphe.map((paragrphe)=>{
                  return(
                    <div>
                      <div className="titre title py-3 px-3">
                        <h2 className="text-2xl font-bold text-left mb-3">Titre de l'artile</h2>
                        <img className="h-100 w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-jvNXpQ9fP2l7Ly6w0abc6OScPDORK6XLg&usqp=CAU"/>
                      </div>
                      <div className="py-1">
                        <div className="py-5">
                          <p className="text-left">  La journaliste Marina Ovsiannikova, qui avait
                            interrompu le journal d’une chaîne d’Etat russe avec <span className=" remarque font-bold">remarque 1</span>
                            une affiche contre la guerre en Ukraine, a été condamnée,
                            <span className="underline italic ">jeudi 28 juillet, à une amende pour avoir à nouveau dénoncé </span>
                            le conflit. Un tribunal de Moscou lui a infligé une amende de 50 000 roubles <span className=" remarque font-bold">remarque 1</span>
                            (800 euros) pour « discréditation » des forces armées russes, a constaté un journaliste
                            de l’Agence France-Presse (AFP) sur place, une infraction introduite au début
                            du mois de mars pour étouffer les critiques.
                            <span className=" remarque font-bold">remarque 1</span>
                            <Link to="#" className="text-blue-600 hover:text-blue-700 underline">allert sur le site </Link>
                          </p>
                        </div>
                      </div>
                      </div>
                  )
                })
              }
              
            
          </section>

          {/* type d'article */}
          <section className="conatiner-fluid  ">
            <div className="">
              
            </div>
          </section>

          <div className=" flex-col justify-items-start text- py-3 pt-full mb-10">
            <h3 className="text-xl">Contenu créer par <span className="font-bold">In Studio</span></h3>
              <div className="text-start justify-items-start mt-10">
                {/* post commentaire */}
                <div className=" text-left">
                  <form>
                    <div className="my-2">
                      <div>
                          <label className="text-xl font-bold">votre commentaire</label>
                      </div>
                      <textarea className="text-xl w-full shadow-lg rounded-lg border border-b py-2 px-3" placeholder="votre commentaire ici ...">
                      </textarea>
                      <button className="bg-gray-700 py-1 px-3 text-white hover:bg-gray-800 active:bg-gray-900" > envoyer</button>
                    </div>
                  </form>
                </div>
                {/* bouton de chragement des commentaires */}
                <button type="button"  className=" bg-blue-500 text-white rounded mx-[7%]  text-2xl my-5 mt-2 py-3 px-4">charger les commentaires</button>
                <div className="container rounded py-3 my-3 px-3 shadow-lg bg-white flex-col justify-items-center">
                  <div classname="flex flex-col">
                     {/* espace commataire */}
                     <div className=" relative flex flex-row my-10 py-3 px-2 shadow mx-3  space-x-3 rounded-lg">
                        <img  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className="h-10 w-10" />
                        <div className="rounded-lg">
                          <div  className="py-1 space-y-1">
                            <h3 className="text-xl font-bold font-serif  mb-1 text-xl font-bold hover:text-blue-600 hover: ">Oliver Zemour</h3>
                          </div>
                          <div className="w-[80%] ">
                             <p className="pr-10  my-3"> 
                                Cet article m'a été vraiment utile
                                Cet article m'a été vraiment utile
                                Cet article m'a été vraiment utile
                             </p>
                          </div>
                          <div className="">
                           <button  className=" absolute z-1 bottom-0 right-0  m-2 p-2 h-15 bg-gray-900 hover:cursor-pointer rounded-lg"><AiFillLike className="text-white"/></button>
                        </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
          </div>

          {/* les autres articles */}

          <div className="container-fluid py-3 pt-4  mt-10  border-t border-double border-gray-700">
            <div className="py-3 px-3 ">
              <h3>autres contenus</h3>
            </div>
            <div className="py-2 px-1 grid grid-cols-2 divide-x gap-5">
                {
                  paragrphe.map(paragrph=>{
                    return(
                      <div className="">
                        <img className="w-full" src="https://th.bing.com/th/id/OIP.JhVsGkreCX4-QIcbbT8BmwHaEK?pid=ImgDet&rs=1" />
                        <div className="py-2 mt-1">
                          <h2 className="text-left text-xl font-bold">
                            {"<<Alerte Rouge >>"} l'un des film qui a le plus cartoné .
                          </h2>
                        </div>
                      </div>
                    )
                  })
                }
            </div>
          </div>



        </div>
  )
}

export default ArticleView ;