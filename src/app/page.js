import HeroSection from "./components/hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

const cardsthree = [
    {
      id: 1,
      image: "/assets/leopard.jpg",
      title: "Sight seeing",
      description: "It’s a very underrated tourist attraction near Jodhpur which gives a view of a dam with the mountains of granites which is eye soothing and make sunrises and sunsets beautiful."
    },
    {
      id: 2,
      image: "/assets/crocodile.jpg",
      title: "Jungle Safari",
      description: "Jungle Safari is the major tourist attraction because one can observe Indian Leopard, crocodile, and different species of birds very easily under the guidance of forest department."
    },
    {
      id: 3,
      image: "/assets/gallery12.jpg",
      title: "Bird Sanctuary",
      description: "The Jawai river is the habitat for crocodiles and birds such as bar-headed geese, cranes, common eastern crane, knob-billed duck, spotbill duck, and flamingos."
    }
  ];


const cards = [
  {
    id: 1,
    image: "/assets/devgiri.jpg",
    title: "Dev Giri Temple",
    description: "The temple is located halfway to the surrounding hill, the temple and is dedicated to the local goddess Ashapura Mataji."
  },
  {
    id: 2,
    image: "/assets/birds.jpg",
    title: "Jawai Bandh Birds",
    description: "Jawai is a shelter for migratory birds from October to March. It’s a paradise for bird watchers with such a vast variety of birds"
  },
    {
    id: 3,
    image: "/assets/parshuram.jpg",
    title: "Parshuram Mahadev Temple",
    description: "The cave temple is dedicated to Lord Shiva, the temple has been found with a deep historical significance with a fascinating story."
  },
  
  
  {
    id: 4,
    image: "/assets/jawaihills.jpg",
    title: "Jawai Hills",
    description: "The granite hills at Jawai Hills are formed millions of years by the excursion of lava and this hill is now a home for different species of birds and wildlife."
  },
  {
    id: 5,
    image: "/assets/gallery19.jpg",
    title: "Jawai Bandh Leopards",
    description: "One can opt for a Leopard safari operated by private ownership and people can observe it day and night. During the safari one must catch a glimpse of the Indian Leopard which is a major tourist attraction."
  },
  {
    id: 6,
    image: "/assets/ranakpur.jpg",
    title: "Ranakpur & Khumbhalgarh",
    description: "The temple is situated in the valley of the Aravalli Mountains. The temple was built in the 15 century when a Jain businessman was believed to have a strong intuition that Ranakpur Jain Temple has been dedicated to Adhinath who is believed to be a very important figure according to Jain Cosmology. "
  },

];


 const overlaycards = [
    {
      img: "/assets/gls1.png",
      text: "No Entry fee",
    },
    {
      img: "/assets/gls2.jpg",
      text: "Timing : Sunrise to Sunset",
    },
    {
      img: "/assets/gls3.jpg",
      text: "Best time to Visit in winter",
    },
    {
      img: "/assets/gls4.jpg",
      text: "Not suitable for elderly people",
    },
  ];

  return (
<>
{/*============== Hero section ============= */}
<HeroSection />

{/*============== Welcome section ============= */}
    <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mt-8">
          Welcome
        </h2>
        <p className="text-center text-gray-700 mb-8 mt-4 leading-relaxed">
          We welcome you to the land of culture and heritage where tourists visit for heritage and history of Rajwada(Shatriya kingdom). But Rajasthan offers a way more than heritage and history. Jawai village is popularly known as Jawai Bandh which is situated near a river in Pali district near Jodhpur. This place was built by Maharaja Umaid Singh in the span of 11 years.
        </p>
    </div>

{/*============== Cards section ============= */}  
  <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Explore Nature's  <span className="bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent"> Wonders</span>
        
        </h2>
        <p className="text-center text-gray-700 mb-10 text-lg">
          Journey through the most stunning views on Earth
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsthree.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                  {card.description}
                </p>
                
               
              </div>
              
             
            </div>
          ))}
        </div>
      </div>
    </div>

{/*============== overlay section ============= */} 
  <section
      className="relative bg-cover bg-center bg-no-repeat py-12 px-6 md:px-12"
      style={{ backgroundImage: "url('/assets/ovrlay.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overlaycards.map((card, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300"
          >
           <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-md">
  <Image
    src={card.img}
    alt={card.text}
    fill
    className="object-cover"
  />
</div>
            <p className="text-white font-semibold text-base md:text-lg leading-tight">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>

{/*============== 6 MoreCards section ============= */} 
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Discover Your Next
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent"> Adventure</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Explore breathtaking destinations and create unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-sky-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/15 opacity-0 animate-fadeInUp`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-cyan-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {card.description}
                </p>
              <Link href="/destinations" >  <button className="inline-flex items-center text-cyan-600 font-semibold group-hover:text-cyan-400 transition-colors cursor-pointer ">
                  Explore More
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button></Link>
              </div>

            
            </div>
          ))}
        </div>
      </div>
    </div>

</>
  );
}
