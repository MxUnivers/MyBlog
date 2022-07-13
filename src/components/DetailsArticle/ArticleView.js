import React from 'react'
import  {Link} from  "react-router-dom"
import  {FaFacebookF} from  "react-icons/fa";
import  {SiYoutube} from "react-icons/si";
import  {BsWhatsapp} from  "react-icons/bs";
import {AiFillLike}  from  "react-icons/ai";

const ArticleView = () => {
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

          {/* type d'article */}
          <div className="container ml-3 mx-3">
              <div className="py-2 my-3">
                <img src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="h-[400px] w-full" />
              </div>
              <div className="flex ">
                <p className=" flex text-left text-xl leading-9 justify-items-start font-serif ">
                  Voyager est lune des meilleur option
                  de nos ,jour voyager decouvrir de nouveaux
                  a est vraiment facinant surtout tou pour vious
                  qui rêver de voyager de nos jour en avion ou en bateua
                  . le gout du voyage et de lk'avanture de verse dans notre
                   tête aprémière impression .
                   Voyager est lune des meilleur option
                  de nos ,jour voyager decouvrir de nouveaux
                  a est vraiment facinant surtout tou pour vious
                  qui rêver de voyager de nos jour en avion ou en bateua
                  . le gout du voyage et de lk'avanture de verse dans notre
                   tête aprémière impression .
                   Voyager est lune des meilleur option
                  de nos ,jour voyager decouvrir de nouveaux
                  a est vraiment facinant surtout tou pour vious
                  qui rêver de voyager de nos jour en avion ou en bateua
                  . le gout du voyage et de lk'avanture de verse dans notre
                   tête aprémière impression .
                   Voyager est lune des meilleur option
                  de nos ,jour voyager decouvrir de nouveaux
                  a est vraiment facinant surtout tou pour vious
                  qui rêver de voyager de nos jour en avion ou en bateua
                  . le gout du voyage et de lk'avanture de verse dans notre
                   tête aprémière impression 
                </p>
              </div>
          </div>
          <section className="container ml-3 mx-3">
              <div className="py-2 my-3">
                <img src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="h-[400px] w-full" />
              </div>
              <div className="flex ">
                <p className=" flex text-left text-xl leading-9 justify-items-start font-serif ">
                  Voyager est lune des meilleur option
                  de nos ,jour voyager decouvrir de nouveaux
                  a est vraiment facinant surtout tou pour vious
                  qui rêver de voyager de nos jour en avion ou en bateua
                  . le gout du voyage et de lk'avanture de verse dans notre
                   tête aprémière impression .
                   Voyager est lune des meilleur option
                  de nos ,jour voyager decouvrir de nouveaux
                  a est vraiment facinant surtout tou pour vious
                  qui rêver de voyager de nos jour en avion ou en bateua
                  . le gout du voyage et de lk'avanture de verse dans notre
                   tête aprémière impression .
                   Voyager est lune des meilleur option
                  de nos ,jour voyager decouvrir de nouveaux
                  a est vraiment facinant surtout tou pour vious
                  qui rêver de voyager de nos jour en avion ou en bateua
                  . le gout du voyage et de lk'avanture de verse dans notre
                   tête aprémière impression .
                   Voyager est lune des meilleur option
                  de nos ,jour voyager decouvrir de nouveaux
                  a est vraiment facinant surtout tou pour vious
                  qui rêver de voyager de nos jour en avion ou en bateua
                  . le gout du voyage et de lk'avanture de verse dans notre
                   tête aprémière impression 
                </p>
                <Link to="#" className="text-xl text-blue-500 hover:text-blue-600 hover:underline">Aller vers</Link>
              </div>
          </section>

          <div className=" flex-col justify-items-start text- py-3 pt-full mb-10">
            <h3 className="text-xl">Contenu créer par <span className="font-bold">In Studio</span></h3>

              <div className="text-start justify-items-start mt-10">
                
                

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
        </div>
  )
}

export default ArticleView ;