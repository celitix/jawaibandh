
import Image from "next/image";

const cards = [
    {
        title: "Crocodile",
        img: "/assets/ttd1.jpg",
        desc: `Jawai has a confluence of rivers and a variety of birds who migrate during the winters which makes it heaven for crocodiles.
They have been cited very often hunting and basking on the bank of river. They are easily cited from the dam which make it the center of attraction.`,
    },
    {
        title: "Birds",
        img: "/assets/ttd2.jpg",
        desc: `Jawai is a shelter for migratory birds from October to March. It’s a paradise for bird watchers with such a vast variety of birds: bar-headed geese, cranes, knob-billed duck, spotbill duck, and flamingos with the river and other wildlife species of animals.`,
    },
    {
        title: "Leopard Safari",
        img: "/assets/ttd3.jpg",
        desc: `One can opt for a Leopard safari operated by private ownership and people can observe it day and night. During the safari, one must catch a glimpse of the Indian Leopard which is a major tourist attraction. The most fascinating part about the place is that the wildlife is very close to human settlement but they are never attacked by the leopards.`,
    },
    
    {
        title: "Jawai Hills",
        img: "/assets/ttd5.webp",
        desc: `The granite hills at Jawai Hills are formed millions of years by the excursion of lava and this hill is now a home for different species of birds and wildlife. The Dev Giri Temple is also built between one of the hills. The hill is not very steep which makes it easier for trekking.`,
    },
    {
        title: "Tribal Excursion",
        img: "/assets/ttd6.webp",
        desc: `Jawai is a shelter for migratory birds from October to March. It’s a paradise for bird watchers with such a vast variety of birds: bar-headed geese, cranes, knob-billed duck, spotbill duck, and flamingos with the river and other wildlife species of animals.`,
    },
    {
        title: "Dev Giri Temple",
        img: "/assets/ttd4.jpg",
        desc: `The temple is located halfway to the surrounding hill, the temple is dedicated to the local goddess Ashapura Mata ji.The villagers have a strong belief the goddess protects the entire village from natural calamities. The most surprising thing about this temple is that this temple is not only visited by humans but also visited by leopards and wild animals living nearby who cause no harm to any human individual.`,
    },
];

export default function ThingsToDoSection() {
    return (
        <section className="py-12 ">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-white text-3xl font-bold text-center mb-10">
                    Things To Do
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="p-4 bg-[#015c6c] rounded-lg overflow-hidden shadow-lg text-white flex flex-col justify-between"
                        >
                            <div className="relative w-full h-48 overflow-hidden rounded-lg">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    className="object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold mb-3 text-center">
                                    {card.title}
                                </h3>
                                <p className="text-sm leading-relaxed mb-4 text-justify flex-grow">
                                    {card.desc}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
