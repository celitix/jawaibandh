import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero1.jpg" 
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10">
        {/* Logo */}
        <div>
         <Link href="/"><div className="text-4xl font-bold mb-4 text-cyan-600"><Image src="/assets/Jawai-Bandh.png" alt="Logo" width={180} height={50} />
         </div></Link>
          <p className="text-gray-300 text-base">
         A unique blend of wilderness, water, and rugged landscapes perfect for wildlife lovers.Discover the raw beauty of Jawai Bandh, famous for leopard sightings, scenic hills, and tranquil waters.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {/* Blog Item */}
            <Link href="/blog/a-3-day-itinerary-at-jawai-bandh-rajasthan" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog1.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
              A 3-Day Itinerary at Jawai Bandh, Rajasthan
              </p>
            </Link>

            <Link href="/blog/jawai-bandh-a-journey-to-the-land-of-leopards" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog2.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
            Jawai Bandh: A Journey to the Land of Leopards
              </p>
            </Link>

    
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-cyan-500 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-cyan-500 transition">About</Link></li>
            <li><Link href="/destinations" className="hover:text-cyan-500 transition">Destinations</Link></li>
            <li><Link href="/things-to-do" className="hover:text-cyan-500 transition">Things To Do</Link></li>
            <li><Link href="/images" className="hover:text-cyan-500 transition">Images</Link></li>
            <li><Link href="/how-to-reach" className="hover:text-cyan-500 transition">How To Reach</Link></li>
            <li><Link href="/blog" className="hover:text-cyan-500 transition">Blog</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d462447.6572089036!2d73.167103!3d25.106183!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39429451e5c8b98d%3A0xe63fbd0579e8e80d!2sJawai%20Bandh%2C%20Rajasthan%20306126%2C%20India!5e0!3m2!1sen!2sus!4v1762951831879!5m2!1sen!2sus" 
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-gray-600/40 text-center py-4 text-sm text-gray-100 z-10">
        © {new Date().getFullYear()} All Rights Reserved | Built by{" "}
        <Link href="https://www.proactivedigital.in/" target="_blank"   rel="noopener noreferrer" className="text-sky-300 hover:text-blue-700">Proactive</Link> |{" "}
        {/* <Link href="/disclaimer" className="text-blue-400 hover:text-cyan-600">Disclaimer</Link> */}
      
      </div>
    </footer>
  );
}
