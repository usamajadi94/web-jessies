
import Link from "next/link"
import Image from "next/image"
// import { Gift, Play } from "lucide-react"
import Layout from "./components/layout"
import { FaPlay } from "react-icons/fa"
import { FaGift } from "react-icons/fa";

import { FaMinus } from "react-icons/fa6";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative md:h-[60rem] h-[50rem] bg-[url('/images/background-image.webp')] bg-cover bg-center "
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-[50rem]">
          <div className="text-center text-white">
            <h3 className="text-[1.375rem] leading-[1.875rem] font-medium ">
              Fresh. Wholesome. Quality.
            </h3>

            <h1 className="text-[4.125rem] tracking-[0.438rem] leading-[4.438rem] font-semibold mt-[2.5rem]">
              JESSIE'S JUICE BAR
            </h1>

            <div className="flex justify-center">
              <button className="bg-[#19d8ff] mt-[2.5rem] flex items-center justify-center w-[5.125rem] h-[5.125rem] p-[1.625rem] rounded-full">
                <FaPlay size={90} />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Philosophy Section */}
      <section className=" p-[1.2rem] lg:p-[4rem] bg-[#e6e6e6]">
        {/* <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-cyan-400 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Our Philosophy Is Simple: Let Your Food Be Your Medicine, Not Your Demise.
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                We have the best fresh juice and smoothie bar in the Cayman Islands. We pride ourselves on using only
                the freshest ingredients and creating delicious, nutritious drinks that will leave you feeling energized
                and satisfied.
              </p>
              <p>
                Our menu features a wide variety of fresh juices, smoothies, and healthy snacks. We also offer a
                selection of hot and cold beverages, including coffee, tea, and specialty drinks.
              </p>
              <p>
                Whether you're looking for a quick breakfast on the go, a post-workout refuel, or a healthy lunch
                option, we have something for everyone.
              </p>
              <Link
                href="/menu"
                className="inline-block bg-cyan-400 text-white px-6 py-3 rounded hover:bg-cyan-500 transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div> */}

        <div className="grid md:grid-cols-2 grid-cols-1 mt-[-6rem] md:mt-[-9rem]  relative z-10 ">
          <div className="col-span-1 h-[39.938rem] text-white bg-[#27d4f2] py-[1rem] px-[1.5rem]">
            <h2 className="text-3xl leading-11 font-bold mb-4 text-[1.375rem] md:text-[1.875rem] lg:text-[2.75rem]">
              Our Philosophy Is Simple: Let Your Food Be Your Medicine, Not Your Demise.
            </h2>
            <p className="box-border leading-[1.875rem]  text-[1.1rem] font-normal">
              We are passionate about food and believe not only should it be nourishing and make you feel great, but taste amazing too. Reflected in the menu is our desire to serve wholesome foods with minimal processing for maximum benefit in a quest for optimum health, and ultimately, optimum living. Despite all the advancements over the past decades, our greatest achievement may be going full circle, getting back to the basics and enjoying the simple things in life.</p>
          </div>
          <div className="phis-image  col-span-1 h-[39.938rem] bg-[url('/images/phis-image.webp')] bg-cover bg-center">


          </div>

          <div className="fruit-image h-[39.938rem] col-span-1 bg-[url('/images/fruit-image.webp')] bg-cover bg-center"></div>

          <div className="md:py-[3rem]  p-[1.5rem] md:px-[3.5rem] h-[39.938rem] bg-white col-span-1">
            <p className="leading-[1.875] text-[1.1rem] font-normal text-[#2a2a2a] ">We like to think that our menu is inclusive – in that the majority of people, regardless of their unique dietary requirements, choices or tastes, will find something for them. Our mission is to make the healthy choice an easy one and show people that clean, healthy eating is simple, colourful and unforgettable. We support local farmers and focus heavily on reducing our impact on the local environment by opting for minimal, eco packaging, reusing where possible and encouraging our patrons to do the same.</p>

            <div className="w-[11.25rem] text-white font-medium mt-[3rem] h-[3.375rem]">

              <a className=" flex items-center justify-around py-[0.938rem] px-[1.875rem] rounded-4xl   bg-[#19d8ff]   ">
                <span className="inline"><FaMinus /></span>
                <span>View Menu</span>

              </a>
            </div>


          </div>



        </div>

      </section>

      {/* Gift Certificate Section */}
      <section className="py-16 bg-[#fed160]">
        <div className="gift  grid grid-cols-2">

          <div className="col-span-1">
            <div className="icon text-center text-[black]">
              <span><FaGift/> </span>
            </div>
            <div></div>
            <div></div>
            <div></div>

          </div>
          
          <div></div>

        </div>


      </section>

      {/* Location Section */}
      <section className="py-16 bg-cyan-400 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">WE'RE HERE!</h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We are located in the heart of Camana Bay, Grand Cayman. Come visit us for the freshest juices, smoothies,
            and healthy food options on the island.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-cyan-400 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
              Get Directions
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-cyan-400 transition-colors">
              Call Now
            </button>
            <button className="bg-yellow-400 text-gray-800 px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Logo"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800">LISTEN TO JESSIE'S PLAYLISTS</h3>
            <p className="text-gray-600">ON SOUNDCLOUD</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=150&width=150`}
                  alt={`Gallery ${i + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">JESSIE'S JUICE BAR STORIES</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "THINK ON ZERO WASTE", subtitle: "LIFESTYLE" },
                { title: "STORY VIBE & STYLE", subtitle: "LIFESTYLE" },
                { title: "BEACH PICNIC", subtitle: "LIFESTYLE" },
                { title: "EVERYBODY LOVES SMOOTHIES", subtitle: "LIFESTYLE" },
              ].map((story, i) => (
                <div key={i} className="bg-gray-200 p-6 rounded text-center">
                  <Image
                    src={`/placeholder.svg?height=200&width=250`}
                    alt={story.title}
                    width={250}
                    height={200}
                    className="w-full mb-4 rounded"
                  />
                  <h4 className="font-bold text-gray-800">{story.title}</h4>
                  <p className="text-sm text-gray-600">{story.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">CAMANA BAY</h3>
              <div className="space-y-4 text-gray-700">
                <p>The Paseo, Camana Bay</p>
                <p>Grand Cayman, Cayman Islands</p>
                <p>Phone: +1 345 949 2012</p>
                <p>Email: info@jessiesjuicebar.com</p>
              </div>
              <button className="mt-6 bg-cyan-400 text-white px-6 py-3 rounded hover:bg-cyan-500 transition-colors">
                Get Directions
              </button>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">CAMANA BAY HOURS</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>7:00am - 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>8:00am - 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>9:00am - 5:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
