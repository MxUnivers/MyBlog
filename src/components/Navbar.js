import React from 'react';
import {Link  } from  "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid flex items-center justify-center py-1 my-1 border-b ">
        <nav className="flex justify-center items-center bg-white space-x-3 ">
            <Link to="/"><div className="flex items-center justify-center font-bold px-2 py-3 bg-gray-100 mx-1 hover:bg-gray-300">Accueil</div></Link>
            <Link to="/detail/id:"><div className="flex items-center justify-center font-bold px-2 py-3 bg-gray-100 mx-1 hover:bg-gray-300" >details article</div></Link>
            <Link to="/list-articles"><div className="flex items-center justify-center px-2 font-bold py-3 bg-gray-100 mx-1 hover:bg-gray-300 "  >list des articlest</div></Link>
        </nav>
    </div>
  )
}

export default Navbar