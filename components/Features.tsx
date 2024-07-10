import React from 'react'
import { FEATURES } from '../constants'

const Features = () => {
 
  return (
    <section className=" [border-2 border-red-500 flex-col flexCenter
    overflow bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full
      justify-end grid grid-cols-2">
       <div className="flex flex-1 lg:min-h-[900px]">
        <img 
        src="/phone.png" 
        alt="phone"
        width={440}
        height={1000}
        className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex 3xl:left-20" />
       </div>
       <div className="">
        <div className="relative">
           <img src="/camp.svg" alt="camp" 
           width={50}
           height={50}
           className="absolute left-[5px] top-[-28px] w-10 lg:w-[50px]"
           />
           <h2 className="bold-40 lg:bold-64 m-10">Our Features</h2>
        </div>
        <div className=" grid grid-cols-2 gap-24">
          {
            FEATURES.map(feature =>(
              <div>
                <div className="space-y-6">
                 <div className=" w-[80px] h-[80px] bg-green-50 flex items-center justify-center rounded-full">
                 <img src={feature.icon} alt="" className=" w-[40px] h-[40px] rounded-full"/>
                 </div>
                  <div>
                    <h1 className="bold-16 lg:bold-32">{feature.title}</h1>
                    <p>{feature.discription}</p>
                  </div>
                  
                </div>
              </div>
            ))
          }
        </div>
       </div>
      </div>
    </section>
  )
}

export default Features;