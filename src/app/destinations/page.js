"use client"
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image'

const places = [
  {
    title: "Ranakpur Jain Temple",
    description: `The temple is situated in the valley of the Aravalli Mountains. The temple was built in the 15 century when a Jain businessman was believed to have a strong intuition that Ranakpur Jain Temple has been dedicated to Adhinath who is believed to be a very important figure according to Jain Cosmology. The temple was built under the guidance of provincial ruler Rana Kumba and the temple is also named after him.`,
    image: "/assets/ranakpur_jain_temple.jpg",
  },
  {
    title: "Om Banna Dham",
    description: `Om Banna dam is located 40 Km away from Jodhpur on the Jodhpur-Pali Highway 65. The shrine was built in memory of Om Singh Rathore (Om Banna) who is also known as Bullet baba. The people in the nearby village have a strong belief that he is a savior. He was a young boy owning a Royal Enfield Bullet 350cc and once he was traveling on the Jodhpur-Pali highway and lost his control and hit a tree and died on the spot after that people have seen his bullet at the spot of the accident saving people hit that tree. Where his shrine is built.`,
    image: "/assets/om_banna.jpg",
  },
  {
    title: "Samand Lake",
    description: `The Samand Lake is also known as the Sardar Samand Lake which is 60 Km from the Jodhpur off the Jodhpur-Pali Highway. The place was developed by Maharaja Umaid Singh in the year 1933 because it is situated near the Sardar Samand Lake Palace. One can easily spot beautiful birds in the skyline or floating in the lake, such as the Himalayan griffon, yellow-legged green pigeon, Dalmatian pelican, and many other species of birds.`,
    image: "/assets/samand-palace.jpg",
  },
  {
    title: "Parshuram Mahadev Temple",
    description: `The cave temple is dedicated to Lord Shiva, the temple has been found with a deep historical significance with a fascinating story. Its believed that this temple was built by Lord Parshuram who is an avatar of Lord Vishnu, he engraved this cave with his axe to worship Lord Shiva. It is believed that the temple houses have adapted figures of Lord Ganesh and Lord Shiva. The temple is situated approx 4000 feet above sea level.`,
    image: "/assets/Parshuram_Mahadev.jpg",
  },
  {
    title: "Ranakpur Jain Temple",
    description: `The temple is situated in the valley of the Aravalli Mountains. The temple was built in the 15 century when a Jain businessman was believed to have a strong intuition that Ranakpur Jain Temple has been dedicated to Adhinath who is believed to be a very important figure according to Jain Cosmology. The temple was built under the guidance of provincial ruler Rana Kumba and the temple is also named after him.`,
    image: "/assets/ranakpur_jain_temple.jpg",
  },
  {
    title: "Sun Temple",
    description: `The sun temple in Ranakpur is known as Surya Narayan Temple. The temple was built organically in the 13th century and then it was reconstructed in the 15th century. The temple was built with stunning white limestone in the Nagara style with complex detailing. The comprehensive walls of the temple make it an amazing piece ofarchitecture where the face of the temple is in the east direction containing the sanctum and Chikhara as a crown.`,
   
    image: "/assets/Sun_Temple.jpg",
  },
];


const page = () => {
  return (
    <>
      <section className="w-full py-16  flex justify-center items-center">
  <div className="max-w-6xl px-6 text-center">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ amount: 0.3 }}
      className=" text-3xl md:text-4xl font-semibold tracking-wide text-gray-800 uppercase mt-16"
    >
    ITINERARY TO JAWAI BANDH

    </motion.h2>
    
    {/* Underline */}
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "160px", opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      viewport={{ amount: 0.3 }}
      className="h-[3px] bg-cyan-600 mx-auto my-4"
    ></motion.div>
    
    {/* Paragraph */}
    <motion.p
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      viewport={{ amount: 0.3 }}
      className="text-gray-600 leading-relaxed text-sm md:text-base"
    >
      This is one of the best tourist places in Pali, Rajasthan. The Jawai Bandh is an important and inevitable destination when it comes to Pali sightseeing places. The Jawai Bandh is a cozy yet open natural habitat for wildlife with a variety of birds migrating from different parts of Asia. People visit this place to enjoy the serene view of the dam and feel the lap of nature’s best.There are ample options available for a tourist while visiting Jawai Bandh. Nearby destinations in Pali District sightseeing places and the rest of Rajasthan are many. Some of the listed nearby destinations are mentioned here. These are the pride of the Rajasthan tourism.
    </motion.p>
  </div>
</section>
    

{/* Alternate text image se4ction */} 

 <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-20">
        {places.map((place, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            <div className="relative w-full lg:w-1/2 h-72 lg:h-96 overflow-hidden rounded-2xl shadow-md">
              <Image
                src={place.image}
                alt={place.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="bg-[#015c6c] w-full lg:w-1/2  p-6 rounded-2xl shadow-md">
              <h2 className="text-3xl font-semibold mb-3 text-white uppercase">
                {place.title}
              </h2>
              <p className="text-gray-200 my-6 leading-relaxed ">
                {place.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </section>

    </>
  )
}

export default page