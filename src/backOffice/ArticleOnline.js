
import React , {useState} from "react";
import  {Link} from  "react-router-dom";
import {FiDelete} from  "react-icons/fi";
import {BiSearchAlt2} from  "react-icons/bi";
import {AiOutlineWarning} from  "react-icons/ai";



const ArticleOnline = () => {
 var articleEdit;
 var articleDelete ;

 const [del , setdel] = useState(false);

 function ShowDelete(){
    setdel(true);
 }
 function HideDelete(){
    setdel(false);
 }


 /* api de l'articles */
 const  articles = [
    {
        id :"#13767367837" ,title:"Les oiseaux qui chantent"  , description :"l'oiseau qui chante le matin est très beau comme , il peut être même le plus beau de tout .",
        category :"informatique",statut:"actif",
        coverPicture:"https://images.pexels.com/photos/4559592/pexels-photo-4559592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id :"#286827878387" ,title:"Les oiseaux qui chantent"  , description :"l'oiseau qui chante le matin est très beau comme , il peut être même le plus beau de tout .",
        category :"informatique",statut:"actif",
        coverPicture:"https://images.pexels.com/photos/4559592/pexels-photo-4559592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
 ]

 

 
  return (
      <div className=" container-fluid " >
          <div className="container-fluid" >

              <div className="flex  flex-row justify-center border-t pt-3 my-1 border-b ">
                  <div className=" grid grid-cols-3 gap-1 content-start text-2xl font-extrabold uppercase  text-left">
                      <h3 className="">Article en ligne</h3>
                  </div>
                  <div className="bg-white mt-2 py-1 border-t">
                      <div className="bg-gray-100  flex flex-row">
                          <input type="text" className="border-b rounded-3xl text-gray-800 py-1 px-2" placeholder="rechercher un article" />
                          <button className="bg-blue-900 text-white px-2"> <BiSearchAlt2 className="text-white h-10 w-10" /></button>
                      </div>
                  </div>
              </div>

              
              <div className="bg-white mt-2 py-1 border-t">
                  <div className="bg-gray-100  flex flex-row space-x-3">
                      <button type="" className="bg-blue-900 text-white px-3 py-2"> Actualiser </button>
                      <button type="submit" className="bg-blue-900 text-white px-3 py-2"> Supprimer </button>
                  </div>
              </div>


              {/*  */}
              <div className="container-fluid flex flex-col mt-3 h-[500px] w-full mx-2">
                  <table className="rounded-lg bg-blue-700 w-full">

                      <thead className="py-5 ">
                          <tr className="rounded text-white py-3">
                              <th className="py-5 "><input type="checkbox" className="text-blue-600 bg-blue-500 h-5 w-5" /></th>
                              <th className=""><label className="text-xl font-bold">Image</label></th>
                              <th className=""><label className="text-xl font-bold">Nom</label></th>
                              <th className=""><label className="text-xl font-bold">Description</label></th>
                              <th className=""><label className="text-xl font-bold">Catégorie</label></th>
                              <th className=""><label className="text-xl font-bold">statut</label></th>
                          </tr>
                      </thead>

                      <tbody className="pt-4 border py-1 space-y-1 ">
                          {
                              articles.map((article) =>
                                  <tr className="rounded bg-white  hover:bg-gray-200 text-gray-900 py-3 space-y-1 border-b border-gray-900">
                                      <th className="px-3 py-5 mx-2 text-xl"><input type="checkbox" className="text-blue-600 bg-blue-500 h-5 w-5" /></th>
                                      <th className="px-3 py-5 mx-2 text-xl"><label className=""><img className=" w-full " src={article.coverPicture} /></label></th>
                                      <th className="px-3 py-5 mx-2 text-xl"><label className="">{article.title}</label></th>
                                      <th className="px-3 py-5 mxs-2 text-xl"><p className="">{article.description}</p></th>
                                      <th className="px-3 py-5 mx-2 text-xl"><label className="">{article.category}</label></th>
                                      <th className="px-3 py-5 mx-2 text-xl"><label className="">{article.statut}</label></th>
                                      <th className="px-3 py-5 mx-2 flex flex-row">
                                          <Link to={"/back-office/edit-article/id:"+article.id} > 
                                           <button onClick={() => {
                                              articleEdit = article.coverPicture + "," + article.nom + "," + article.description + "," + article.category + "," + article.statut +
                                                  localStorage.setItem("articleEdit", articleEdit)
                                          }} className="mx-2 py-2 rounded bg-orange-600 text-white hover:bg-orange-700 active:bg-red-800 py-1 px-2">
                                              modifier 
                                            </button>
                                          </Link>

                                          <button onClick={ShowDelete} className="mx-2 py-2 rounded bg-red-600 text-white hover:bg-red-700 active:bg-red-800 py-1 px-2"> 
                                             Supprimer 
                                          </button>
                                          

                                          {/* Modal Delete */}
                                          <div style={{visibility:del == true ? "visible" : "hidden" ,  opacity: del == true ?"1" : "0" }} className="fixed z-3 top-0 right-0 conatiner-fluid w-full h-full flex justify-center items-center p-3 bg-gradient-to-t from-black to-transparent transition duration-700 ease-in-out ">
                                            <div className="relative bg-white px-3 py-3 rounded-lg">
                                            <div className=" shafow-4xl  flex flex-col justify-center border-b border-gray-500 py-2">
                                                  <h3 className="text-2xl flex justify-center items-center "><AiOutlineWarning className="h-10 w-10 text-red-700 font-bold" /> Suppresion d'article en question ?</h3>
                                                  <p  className="text-sm font-light">Ce article ne sera forcément supprimer de ton blog ais plus tôt mis comme inactif</p>
                                              </div>
                                              <div className="flex flex-col justify-center ">
                                                 <div className=" w-full flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center ">
                                                          <div className="w-full flex  justify-center">
                                                              <img src={article.coverPicture} className="h-[20%] w-[50%]" />
                                                          </div>
                                                          <div className="w-full h-[300px] overflow-y-scroll px-3 border ">
                                                              <div className="w-full ">
                                                                  <label>id</label>
                                                                  <input readOnly type="text" className=" px-2 py-1 h-10 w-full bg-gray-100" />
                                                              </div>
                                                              <div>
                                                                  <label>Nom</label>
                                                                  <input readOnly type="text" className=" px-2 py-1 h-10 w-full bg-gray-200 rounded-lg" value={article.title} />
                                                              </div>
                                                              <div className="py-2 ">
                                                                  <label>Catégorie</label>
                                                                  <input readOnly type="text" className=" px-2 py-1 h-10 w-full bg-gray-100" value={article.category} />
                                                              </div>
                                                              <div className="w-full">
                                                                  <label>description</label>
                                                                  <textarea readOnly type="text"  className="px-2 py-1 h-20  w-full bg-gray-100" value={article.description} />
                                                              </div>
                                                              <div>
                                                                  <label>statut</label>
                                                                  <input readOnly type="text" className=" px-2 py-1 h-10 w-full bg-gray-200 rounded-lg" value={article.statut} />
                                                              </div>                                                              
                                                          </div>
                                                      </div>

                                              </div>
                                              <div className="py-2 space-x-6">
                                                  <button type="button" onClick={HideDelete} className="bg-gray-400 py-2 px-3 rounded-lg text-black text-xl hover:bg-gray-500 ">annuler</button>
                                                  <button type="submit" className="bg-red-700 px-3 py-2 rounded-lg text-white text-xl hover:bg-red-800 ">Supprimer</button>
                                              </div>
                                              <button type="button" onClick={HideDelete} className="absolute z-2 top-0 right-0 bg-gray-200 rounded p-3 rounded-[50%]"><FiDelete className="h-8 w-8 text-gray-900"/></button>
                                            </div>
                                          </div>


                                      </th>
                                  </tr>
                              )
                          }
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  )
}

export default ArticleOnline ; 