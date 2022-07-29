import React from 'react'

const Article = ({coverPicture ,  title ,  description}) => {
  return (
    <div className="">
        <img clasName="" src={coverPicture} alt="image"></img>
        <div className="mt-2 py-3">
            <h2 className="text-left text-xl font-bold">
                {title}
            </h2>
            <div className="text-left pt-2 py-1">
                <p  className="hidden text-left">
                    {description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Article