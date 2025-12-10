import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
   <>
    <section className="py-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mt-16">
          The Way to Jawai Bandh
        </h2>

        {/* Subheading */}
        <p className="text-center text-gray-700 mb-8 mt-4 leading-relaxed">
          Are you ready to experience the hidden tourist spot of Rajasthan, Jawai
          Bandh(Jawai Dam) but concerned regarding how to reach Jawai?{" "}
          <span className="font-semibold">Wait!Wait!!......</span> Jawai is
          well-connected through all the modes of transportation and one can
          reach here very easily either by train or road or by air. Below are
          the details of all the major nearby cities, bus stations, and airports
          from where you can reach your destination.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* By Road */}
          <div className="bg-[#015C6C] text-white rounded-lg p-6 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center">By Road</h3>

              {/* divider */}
              <div className="w-20 h-1 bg-white/90 mx-auto mb-4 rounded"></div>

              {/* circular image */}
              <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden bg-white/90 flex items-center justify-center shadow-md">
                <Image
                  src="/assets/road.jpg"
                  alt="By Road"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <p className="text-sm leading-relaxed text-justify">
                Jawai is well connected to the major cities of Rajasthan through
                NH14. One can head towards Jawai from Udaipur and reach Jawai
                via Gogunda, Pindwara, and Nana. You will find the same route when heading from Mount Abu. If you
                are coming to Jawai from Jaipur, then you will have to go through
                Kishangarh, Ajmer, Beawar, Sojat, Pali, and Sumerpur.
              </p>
             
            </div>
           
          </div>

          {/* By Train */}
          <div className="bg-[#015C6C] text-white rounded-lg p-6 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center">By Train</h3>

              {/* divider */}
              <div className="w-20 h-1 bg-white/90 mx-auto mb-4 rounded"></div>

              {/* circular image */}
              <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden bg-white/90 flex items-center justify-center shadow-md">
                <Image
                  src="/assets/train.jpg"
                  alt="By Train"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <p className="text-sm leading-relaxed text-justify">
                There are 3 nearest railway stations to Jawai that are used most
                frequently by the train on this route. The nearest is Mori Bera
                which is only 5 km, the next is Jawai Bandh which is at a
                distance of 15 Km, and the last one is Falna which is at a
                distance of 35 Km. The trains are available from Jaipur, Mumbai,
                Delhi, Ahmedabad, and Udaipur.
              </p>
            </div>
         
          </div>

          {/* By Air */}
          <div className="bg-[#015C6C] text-white rounded-lg p-6 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center">By Air</h3>

              {/* divider */}
              <div className="w-20 h-1 bg-white/90 mx-auto mb-4 rounded"></div>

              {/* circular image */}
              <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden bg-white/90 flex items-center justify-center shadow-md">
                <Image
                  src="/assets/air.png"
                  alt="By Air"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <p className="text-sm leading-relaxed text-justify">
                The nearest airport to Jawai bandh is Jodhpur Airport(Jodhpur)
                which is approximately 172 Km from the destination another
                nearest is Maharana Pratap Airport, Udaipur which is at a
                distance of 150 Km and one has to opt for trains, and local
                buses and rented car to reach the destination.
              </p>
            </div>
           
          </div>
        </div>

        {/* Bottom Paragraphs */}
        <div className="text-gray-700 space-y-5 leading-relaxed">
          <p>
            To sum up, your trip to visit Jawai Bandh has been simplified by the
            travel and tourism department of the Land of Kings Rajasthan. The
            development of the place has its own history. The major reason
            Maharaja Umaid Singh developed the dam was to stop flooding rivers
            but it turned out to be the best serene place to visit in between
            the arms of Nature.
          </p>
          <p>
            Jawai Bandh is not just a dam it offers a more heavenly experience.
            The place has a lot to offer to every individual from sunrise to
            sunset, pleasant sound of flowing water, wildlife, and a long drive
            to reach the destination.
          </p>
        </div>
      </div>
    </section>
   </>
  )
}

export default page