interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}
const Campsite = ({ backgroundImage, title, subtitle, peopleJoined, img }:
CampProps) => {
  return (
    <div style={{background: img}} className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat`}>

      <div className="flex h-full flex-col items-start 
       justify-between p-6 lg:px-20 lg:py-10">
        <div className=" flex gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <img src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
       <div>
       <span className="flex flex-row -space-x-4">
          <img src="person-1.png" alt="person-1" />
          <img src="person-2.png" alt="person-2" />
          <img src="person-3.png" alt="person-3" />
          <img src="person-4.png" alt="person-4" />
        </span>
        <p className="p-1 m-1 bold-16 md:bold-20 text-white text-center">{peopleJoined}</p>
       </div>
      </div>
    </div>
    
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container
     realtive flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="flex h-[340px] w-full items-start 
      justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] ">
        <Campsite
          img="url(/img-1.png)"
          backgroundImage= " lg:rounded-r-5xl 2xl:rounded-5xl"
          title="Putuk Truno Camp"
          subtitle="prigen, pasuruan"
          peopleJoined="50+ Joined"
        />
        <Campsite
          img="url(/img-2.png)"
          backgroundImage= "rounded-l-5xl"
          title="Putuk Truno Camp"
          subtitle="prigen, pasuruan"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className=" bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px]
         xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
         <h2 className=" regular-24 md:regular-16 2xl:regular-64 capitalize text-white">
          <strong>Feeling Lost</strong> And Not Knowing The Way?
         </h2>
         <p className=" regular-14 xl:regular-16 mt-5 text-white">
         Starting from the anxiety of the climbers when visiting a new climbing location,
          the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
         </p>
        </div>
      </div>
    </section>
  )
}

export default Camp