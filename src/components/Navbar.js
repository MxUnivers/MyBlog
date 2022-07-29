import React from 'react';
import {FaUserCircle} from  "react-icons/fa";
import {Link  } from  "react-router-dom";
import {BsSearch} from  "react-icons/bs"

const Navbar = () => {
  return (
    <div className="container-fluid flex items-center justify-center py-1 my-1 border-b  bg-gray-900">
      <nav className="flex justify-between items-center bg-white space-x-3 text-white bg-gray-900 ">
        {/* logo du site  */}
        <div className="">
          <img
            className="rounded-[50%] h-10 w-10"
            src="https://elementsdesign.com/wp-content/uploads/2016/10/blog-logo-black-css.jpg"
            alt=""
          />
        </div>
        <div className="flex -items-center ">
          <Link to="/home">
            <div className="flex items-center justify-center  px-2 py-3 hover:text-gray-900 px-3 hover:bg-gray-100">
              Accueil
            </div>
          </Link>
          <Link to="/detail/id:">
            <div className="flex items-center justify-center  px-2 py-3 hover:text-gray-900 px-3 hover:bg-gray-100">
              details article
            </div>
          </Link>
          <Link to="/list-articles">
            <div className="flex items-center justify-center px-2  py-3 hover:text-gray-900 px-3 hover:bg-gray-100 ">
              list des articlest
            </div>
          </Link>
          <Link to="/back-office">
            <div className="flex items-center justify-center px-2  py-3 hover:text-gray-900 px-3 hover:bg-gray-100 ">
              backoffie
            </div>
          </Link>
        </div>
        {/* barre de recherche  */}
        <div className="flex items-center justify-center">
          <form className="flex items-center justify-center">
          <input
            type="text"
            placeholder="rechercher un article"
            className=" text-gray-900 py-2 pl-2 mr-0 rouunded-lg border-b w-full"
          />
          <button
            type="submit"
            className=" bg-blue-500 text-white p-3 hover:bg-blue-600 active:bg-blue-700"
          >
            <BsSearch className="h-5 w-4" />
          </button>
          </form>
        </div>

        {/* Button de créer tion de compte  */}
        <div>
          <Link to="/back-office">
            <div className="flex items-center justify-center px-2 bg-blue-700  py-3 hover:text-gray-900 px-3 hover:bg-gray-100 ">
              Créer un compte{" "}
            </div>
          </Link>
        </div>
        <div className="mx-1 px-1 py-3">
          <FaUserCircle className="h-10 w-10 text-red-400 hover:text-red-700 cursor-pointer " />
        </div>
      </nav>
    </div>
  );
}

export default Navbar ;