import React from 'react'
import Slideshow from '../components/Landing/Slideshow';


const LandingPage = () => {
  return (
    <div className="container-fluid flex-col jusitfy-center px-5 ">
        <div className="container ">
          {/* slideShow */}
            <div className="">
              <Slideshow   />
            </div>
            <div className="">

            </div>

        </div>

    </div>
  )
}

export default LandingPage ;