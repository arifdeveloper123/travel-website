import React from 'react'
import Image from 'next/image'

const Guide = () => {
  return (
   <section className="flexCenter flex-col">
     <div className="
     padding-container max-container w-full pb-24">
     <img src="/camp.svg" alt="camp" width={50} height={50} />
     <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
       We are here for you
     </p>
     <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
      <h2 className="bold-4 lg:bold-64 xl:max-w-[390px]">Guide You To Easy Path</h2>
      <p className="regular-16 text-gray-50 xl:max-w-[502px]">
        Only with the hilink application you will no longer 
        get lost and get lost again, because we already support 
        offline maps when there is no internet connection in the field. 
        Invite your friends, relatives and friends 
        to have fun in the wilderness 
        through the valley and reach the top of the mountain</p>
     </div>
     </div>
     <div className="FlexCenter max-container relative w-full">
      <img src="/boat.png"
       alt="boat"
      width={1440} 
      height={500}
      className="w-full object-cover object-center 2xl:rounded-5xl"
      />
      <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3
      rounded-3xl border md:left-[5%] lg:top-20">
        <img src="/meter.svg" 
        alt="meter" 
        width={16}
        height={158}
        />
        <div className="flexBetween flex-col gap-3">
          <div className="flex w-full flex-col">
            <div className="flexBetween gap-2 w-full">
              <p className="regular-16 text-gray-50">Destination</p>
              <p className="bold-20 text-green-50">48 min</p>
            </div>
            <p className="bold-20 mt-2">Kaziranga</p>
          </div>
          <div className="flex w-full flex-col">
            <p className="regular-16 text-gray-50">Start track</p>
            <h4 className="bold-20 mt-2 whitespace-nowrap">Nilgiri Hills</h4>
          </div>
        </div>
      </div>
     </div>
   </section>
  )
}

export default Guide