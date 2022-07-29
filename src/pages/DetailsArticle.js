import React from 'react'
import ArticleView from '../components/DetailsArticle/ArticleView';
import MoreArticles from '../components/DetailsArticle/MoreArticles';



const DetailsArticle = () => {
  return (
    <div className="flex-start justify-center mt-7 ">
      <div className="flex-start items-center ">
        {/* title Article */}
        <div className="flex">
          <h3 className="mx-5 text-4xl font-extrabold ">
            Comment bien structurer son blog ?
          </h3>
          <div className="border-gray-900 h-2 "></div>
        </div>
        {
          /* articles */
        }

        <div className="mt-4 container-fluid flex flex-col md:flex-row sm:flex-col lg:flex-row ">
          <ArticleView/>
          <MoreArticles/>
        </div>
        



      </div>
    </div>
  )
}

export default DetailsArticle;