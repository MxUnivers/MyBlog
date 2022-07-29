
import React , {useState ,  Useref} from 'react';
import { AiOutlineMessage, AiFillFacebook} from "react-icons/ai";
import {BsYoutube } from  "react-icons/bs" ;
import  {IoLogoWhatsapp} from  "react-icons/io"
import  {MdOutlineKeyboardBackspace} from "react-icons/md";




const Edit = () => {
    const [publish, setpublish] = useState(false);
    function ShowPublish(){
        setpublish(true);
    }
    function HidePublish(){
        setpublish(false);
    }

    var date =  new Date()
    var dateNow;
    dateNow = (date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
    
    return (
        <div className="container-fluid bg-orange-200 py-3 mt-3 shadow-lg" >

            <div className="container-fluid text-2xl">
                <h3 className="text-center text-2xl font-bold "> 
                  <button onClick={()=> window.history.back() } className="rounded-lg text-font-bold text-black bg-gray-400 py-2 px-3 flex flex-row">
                     <MdOutlineKeyboardBackspace className="h-10 w-10"/>
                      retour
                  </button>
                   Mofifier les Infomation sur ton article</h3>
                <p className="text-xl text-base">Modifier vos element<span className="font-bold">sans bruit ?</span></p>
            </div>

            <div className="mt-3 pt-1 border-t border-xl px-2 mx-3">
                <form>
                    {/* Coverpicture */}
                    <div className="border-b py-3 my-1">
                        <label className="text-xl">image de couverture</label>
                        <img src="https://images.pexels.com/photos/4751260/pexels-photo-4751260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="w-[100%] h-[30%]" />
                        <input required type="file" id="file_image" className="mt-3" ></input>
                    </div>
                    {/*  Name article */}
                    <div className="border-b py-3 my-1  text-left">
                        <label className="font-bold uppercase">Titre de l'article </label>
                        <div>
                            <input required type="text" className="text-xl px-2 py-1  border-black   border-b w-full h-10 rounded-lg " placeholder="MxUnivers à l'oeuvre" />
                            <div className="my-1  flex flex-row space-x-3">
                                <label classname="text-xl font-bold uppercase">Catégorie : </label>
                                <select className="rounded-lg shadow-lg border border-black">
                                    <option value="informatique" >Design </option>
                                    <option value="informatique" >Programmation</option>
                                    <option value="informatique" >Nature</option>
                                    <option value="informatique" >livres</option>
                                    <option value="informatique" >Gamming</option>
                                    <option value="informatique" >jeux vidéos</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Descption article */}
                    <div className="border-b py-3 my-1 text-left">
                        <label className="font-bold uppercase">Description de l'article</label>
                        <textarea type="text" className="text-black px-2 py-1 border-black border-b h-[100px]  border-b w-full h-10 font-bold py-1 rounded-lg "
                            placeholder="Il était une fois " />
                    </div>
                    <div className="border-b py-3 my-1 text-left">
                        <label className="font-bold uppercase">date de publication</label>
                        <input required type="date" className="text-black px-2 py-1 border-black border-b w-full h-10 font-bold py-1 rounded-lg "
                            placeholder="Il était une fois " />
                    </div>
                    <div className="container-fluid">
                        <div className="mx-1 py-1">
                            <h1 classname="text-2xl font-bold uppercase">Informations Supplémentaire</h1>
                        </div>
                        {/* autrs types de formulaire */}
                        <div>
                            <div className="border-b py-3 my-1 ">
                            <label className="font-bold uppercase">Nom d'auteur</label>
                            <input required type="text" className=" border-black border px-2 py-1 w-full h-10 py-1 rounded-lg " placeholder="Titre l'article" />
                           </div>
                           <div className="border-b py-3 my-1 ">
                            <label className="font-bold uppercase">photo d'auteur</label>
                            <input required type="file" className=" border-black border px-2 py-1 w-full h-10 py-1 rounded-lg " placeholder="Titre l'article" />
                           </div>

                            <div className="border-b py-3 my-1 ">
                                <label className="font-bold uppercase">Lien vers réseaux sociaux </label>
                                <div className=" flex flex-row mt-2 border-t pt-1">
                                    <div className="mx-2">
                                        <label className="flex flex-row justify-center items-center">facebook <AiFillFacebook className=" h-10 w-10 text-blue-500 px-2 py-2" /></label>
                                        <input required type="text" className=" border-black px-2 py-1 border-b w-full h-10  py-1 rounded-lg " placeholder="facebook" />
                                    </div>
                                    <div className="mx-2">
                                        <label className="flex flex-row justify-center items-center">youtbe <BsYoutube className=" h-10 w-10 text-red-500 px-2 py-2" /></label>
                                        <input required type="text" className=" border-black px-2 py-1 border-b w-full h-10  py-1 rounded-lg " placeholder="facebook" />
                                    </div>
                                    <div className="mx-2">
                                        <label className="flex flex-row justify-center items-center"> <IoLogoWhatsapp className=" h-10 w-10 text-green-500 px-2 py-2" /></label>
                                        <input required type="text" className=" border-black px-2 py-1 border-b w-full h-10  py-1 rounded-lg " placeholder="facebook" />
                                    </div>

                                </div>
                            </div>
                            <div className="border-b py-3 my-1 ">
                                <label className="font-bold uppercase">Lien vers articles supplémentaire</label>
                                <input required type="text" className=" border-black px-2 py-1 border-b w-full h-10  py-1 rounded-lg " placeholder="lien de redirecton" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 py-3 flex  text-left pl-5 bg-gray-200 space-x-10 ">
                        <button type="button" onClick={ShowPublish} className="bg-orange-700  w-full text-white rounded-lg py-2 px-3 text-xl hover:bg-orange-800 active:bg-orange-900">Modifier</button>
                    </div>

                    {/* Modal */}
                    <div style={{ visibility: publish == true ? "visible" : "hidden", opacity: publish == true ? "1" : "0" }}
                        className="fixed z-3 top-0 right-0 conatiner-fluid w-full h-full flex justify-center items-center p-3 bg-gradient-to-t from-black to-transparent transition duration-700 ease-in-out ">
                        <div className=" relative h-[40%] w-[50%]  bg-white rounded-lg shadow-6xl  border">
                            <div className="flex flex-row items-center justify-center space-x-10 py-3 border-b my-1 border-black">
                                <h1 className="text-2xl flex flex-row font-bold ">Modifer article ? </h1>
                                <h1 className="text-2xl flex flex-row " ><AiOutlineMessage className="text-blue-700 h-10 w-10" /></h1>
                            </div>
                            <div>
                                <p className="py-3 text-xl">Êtes vous sur de modifer cet article ?</p>
                            </div>
                            <div className="flex flex-row grid grid-cols-2 gap-4 mx-10 ">
                                <button type="button" onClick={HidePublish} className="py-1 px-3 bg-gray-400 rounded-lg text-black text-xl  hover:bg-gray-500 active:bg-gray-600" >Annuler</button>
                                <button className="py-1 px-3 bg-orange-500 rounded-lg text-black text-xl  hover:bg-orange-600 active:bg-orange-700" >Modifier</button>
                            </div>
                            <button type="button" onClick={HidePublish} className="absolute top-1 right-1 z-2 bg-gray-200 rounded-[50%] p-2 text-3xl uppercase">X</button>
                        </div>
                    </div>

                </form>
            </div>



        </div>
    )
}
export default Edit;