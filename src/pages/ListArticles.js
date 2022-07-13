import React from 'react'

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
            {/*  container */}
            <div classname="conatiner-fluid flex justif-center transition ease-in-out 300s">

                <div className=" flex items-center jsutify-center">
                    <h2 className="text-2xl font-bold py-2 px-1 mx-2">
                        Catégories  :  <span className="text-xl font-serif">developpement</span>
                    </h2>
                </div>

                <div className="flex items-center justify-center">
                    <div className="container-fluid flex-items-center py-1 mx-1"></div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ListArticles
