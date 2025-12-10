import Image from 'next/image'
import { FaGlobe, FaThumbsUp } from 'react-icons/fa';
import { SlBadge } from "react-icons/sl";

const page = () => {

const features = [
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "IMMINENT BEAUTY",
      description: "The place has a very scenic view which makes it pleasant and offers an individual a variety of possible options to hang out nature has a lot to offer like a river, dam, leopard, crocodile, and a vast variety of birds."
    },
    {
      icon: <FaThumbsUp className="w-8 h-8" />,
      title: "BIG PATH",
      description: "One can discover a variety of monuments, sculptures, temples, dams, and Palaces on Jodhpur – Pali Highway that makes your journey very prominent and the long way to the picnic spots itself has a lot to offer."
    },
    {
      icon: <SlBadge className="w-8 h-8" />,
      title: "PRIDE OF JAWAI BANDH",
      description: "The place is famous for a variety of reasons but the major tourist attraction is Leopard Safari, the reason that the Leopards are very close to human society but there is no cases of leopard attack on Humans."
    }
  ];

  return (
    <>
    <section className="py-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mt-16">
          About Jawai Bandh
        </h2>

        {/* Subheading */}
        <p className="text-center text-gray-700 mb-8 mt-4 leading-relaxed">
          Jawai Bandh is a dam located in Rajasthan, India. It is a man-made lake
          that was created by damming the Jawai River. The dam was built to
          control the flow of the river and to provide irrigation for the
          surrounding agricultural land. The dam is also used for hydroelectric
          power generation.
        </p>
      </div>

      {/* history */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mt-16">
          History
        </h2>
        <p className="text-center text-gray-700 mb-8 mt-4 leading-relaxed">
          JAWAI BANDH is situated in district Pali near jodhpur rajasthan. The place is named after the village Jawai. The place was built in the span of 11 years by Maharaja Umaid Singh of Jodhpur. The idea to build the dam on the river was conceived in 1903 as the river is flooding during the monsoon and causing huge damage in the Pali and Jalore. The idea took shape before independence in 1946. The project was to build a dam across the river to create a water reservoir which can be used as  water for irrigation and hydel power generation. The construction of the dam was completed in 1957. The dam covers an area of 13 Km² which makes it the biggest man made dam in the western Rajasthan.
        </p>
        
        {/* Image */}
        <div className="flex justify-center mt-8 h-[500px]">
          <Image
            src="/assets/about.jpg"
            alt="Jawai Bandh"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

<p className="text-center text-gray-700 mb-8 mt-4 leading-relaxed">
    The dam has the capacity to store 7887.5 million cubic feet and covers an area of 102,315 acres (414.05 km2) of cultivable command area. Kalibor and Sei dam are the feeders of Jawai Dam. The catchment area of the dam is 720 Sq Km and the basin is in the shape of a fan. The Jawai dam is the main source of water for people of Pali District. If the dam has the sufficient amount of stored water it may supply to the villages of Pali and Jalore District for irrigation, this is the main objective of constructing the dam.
</p>

<p className="text-center text-gray-700 mb-8 mt-4 leading-relaxed">
  Jawai Dam is not only famous for its dam but also for its sightseeing and biodiversity. It has been developed as a tourist spot. The major tourist attraction is its biodiversity as one can spot leopards, birds, and crocodiles. A huge amount of birds have been seen in the winter season who have migrated due to the climatic change. Jawai dam is also a home for approx 400 crocodiles.
</p>
      </div>

      {/* overlay section */}

     <div className="relative w-full min-h-[400px] flex items-center justify-center py-16 px-4">
      {/* Background Image */}
      <Image
        src="/assets/ovrlay.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
       
      />
      
      {/* Overlay */}
      <div className="absolute inset-0  bg-slate-700/60"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
       
          <div className="relative flex flex-col items-center">
  <h2 className="  text-4xl font-bold text-white mb-2 tracking-wide">WHY TRAVEL JAWAI BANDH ?</h2>
</div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white/30 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer ">
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-cyan-600 mb-6 shadow-lg ">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-4 tracking-wide">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default page