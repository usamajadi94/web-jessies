"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
// import { Gift, Play } from "lucide-react"
import Layout from "./components/homeLayout"
import { FaPlay, FaTimes } from "react-icons/fa"
import { FaGift } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import 'animate.css';


import { FaMinus } from "react-icons/fa6";
// import useInView from "./components/useInView"

export default function HomePage() {
  const [showVideo, setShowVideo] = useState(false);
  const galleryImages = [
    { image: "/gallery/g2.webp" },
    { image: "/gallery/g1.webp" },
    { image: "/gallery/g3.webp" },
    { image: "/gallery/g4.webp" },
    { image: "/gallery/g5.webp" },
    { image: "/gallery/g6.webp" },
    { image: "/gallery/g7.webp" },
    { image: "/gallery/g8.webp" },
    { image: "/gallery/g9.webp" },
    { image: "/gallery/g10.webp" },
    { image: "/gallery/g11.webp" },
    { image: "/gallery/g12.webp" },
    { image: "/gallery/g13.webp" },
    { image: "/gallery/g14.webp" },
    { image: "/gallery/g15.webp" },
    { image: "/gallery/g16.webp" },
    { image: "/gallery/g17.webp" },
    { image: "/gallery/g18.webp" },
    { image: "/gallery/g19.webp" },
    { image: "/gallery/g20.webp" },
    { image: "/gallery/g21.webp" },
    { image: "/gallery/g22.webp" },
    { image: "/gallery/g23.webp" },
    { image: "/gallery/g24.webp" },
    { image: "/gallery/g25.webp" },
    { image: "/gallery/g26.webp" },
    { image: "/gallery/g27.webp" },
    { image: "/gallery/g28.webp" },

  ]
  const stories = [
    { title: "A RETHINK ON FOOD WASTE", image: "/stories/s1.webp" },
    { title: "STORY VIBES AND STYLE", image: "/stories/s2.webp" },
    { title: "BEACH PICNIS", image: "/stories/s3.webp" },
    { title: "EVERYBODY LOVES AVOCADO", image: "/stories/s4.webp" },
    { title: "JESSIE AT HOME", image: "/stories/s5.webp" },
    { title: "FARMER CLARENCE", image: "/stories/s6.webp" },
  ]
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
              <button className="bg-[#19d8ff] mt-[2.5rem] flex items-center justify-center w-[5.125rem] h-[5.125rem] p-[1.625rem] rounded-full" onClick={() => setShowVideo(true)}>
                <FaPlay size={90} />

              </button>
            </div>
          </div>
        </div>
      </section>
      {showVideo && (
        <div className="fixed inset-0 bg-[black]/70  bg-opacity-10 z-50 flex items-center justify-center">
          <div className="relative w-[70%]  h-[95%]">
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white text-3xl z-50"
            >
              <FaTimes />
            </button>

            {/* Video */}
            <video
              src="/images/vid.mp4" // ⬅️ Replace with your actual path
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}


      {/* Philosophy Section */}
      <section className=" p-[1.2rem] lg:p-[4rem] bg-[#e6e6e6]">

        <div className="grid md:grid-cols-2 grid-cols-1 mt-[-6rem] md:mt-[-9rem]  relative z-10 ">
          <div className="col-span-1 h-[39.938rem] text-white bg-[#27d4f2] lg:p-[2rem] py-[1rem] px-[1.5rem]">
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
      <section className="py-16 ">
        <div className="gift  grid grid-cols-1 md:grid-cols-2">

          <div className="col-span-1 h-[25.198rem] text-center py-[5rem]  bg-[#fed160]">

            <div className="icon   text-[black]">
              <span className=" w-[5rem]  inline"><FaGift className="mx-auto" size={70} /> </span>
            </div>

            <div className="mt-3 w-full">
              <h2 className="lg:text-[1.75rem]  text-[1.125rem] lg:tracking-[0rem] tracking-[0.25rem] font-bold">PURCHASE A GIFT CERTIFICATE</h2>
            </div>
            <div className="mt-3">
              <p className="text-[1.25rem] font-normal italic text-[#000306]">Amounts: $25 / $50 / $100</p>
            </div>
            <div className="text-[#181709] mt-3">
              <p>Call our store to find out more: +1 345 949 2012</p>
            </div>


          </div>

          <div className="video h-[25.198rem]">
            <video
              className="w-full h-full object-cover"
              src="/images/vid.mp4"
              autoPlay
              muted
              loop
              controls
            />

          </div>

        </div>


      </section>

      {/* Location Section */}
      <section className="p-[2.5rem] bg-cyan-400 text-white">
        {/* <div className="max-w-7xl mx-auto px-4 text-center">
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
        </div> */}
        <div className="lg:w-[74%] mx-auto">

          <div className="flex justify-center items-center  ">
            <div className="relative w-[12rem] h-[8rem] flex items-center justify-center">
              {/* Center Rectangle */}
              <div className="absolute inset-0 border-2 border-white" />

              {/* Left Offset Rectangle */}
              <div className="absolute left-[-20px] top-0 w-full h-full border-2 border-white" />

              {/* Right Offset Rectangle */}
              <div className="absolute right-[-20px] top-0 w-full h-full border-2 border-white" />

              {/* Text in the center */}
              <h1 className="text-white text-lg font-bold tracking-widest z-10">
                THE MENU
              </h1>
            </div>
          </div>
          <div className="text-center box-border text-white text-[1.5rem] mt-[2.5rem] font-medium" >
            <p className="">We offer cold pressed 100% fruit and vegetable juices, nutritious all natural smoothies featuring a select range of superfoods with no added sugar or ice. Some of the best espresso & cold brew coffee on island, quality loose leaf teas and house made kombucha are also key features.</p>

            <p className="mt-[3rem] box-border">Our menu offers a select range of breakfast items featuring local eggs, salads, wraps (including gluten free house made veggie flax wraps), grilled sandwiches and house baked goods all made with real, nutrient-rich ingredients.</p>


          </div>

          <div className="flex flex-wrap mt-[3rem] justify-center gap-4">
            <button className="bg-white text-gray-800 px-6 py-3 rounded-4xl font-semibold hover:text-gray-400 transition-colors">
              View drink Menu
            </button>
            <button className="bg-[#ffd900] rounded-4xl text-black px-6 py-3  font-semibold hover:text-gray-400 transition-colors">
              Order Now
            </button>
            <button className="bg-white text-gray-800 px-6 py-3 rounded-4xl font-semibold hover:text-gray-400 transition-colors">
              View Food Menu
            </button>
          </div>



        </div>

      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="max-w-8xl mx-auto px-4">
          <div className="text-center mb-12">
            <Image
              src="/images/radio.webp"
              alt="Logo"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="text-[1.8rem] font-bold text-[black] tracking-[.15rem]">LISTEN TO JESSIE'S PLAYLISTS <br /> ON SOUNDCLOUD</h3>
            {/* <p className="text-gray-600">ON SOUNDCLOUD</p> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
           {galleryImages.map((image, i) => {
  return (
    <div key={i} className="h-[16rem] animate__animated animate__zoomIn  bg-gray-200 rounded overflow-hidden">
      <Image
        src={image.image}
        alt={`Gallery ${i + 1}`}
        width={300}
        height={200}
        className="w-full h-full object-cover"
      />
    </div>
  );
})}

          </div>


          <div>
            <h3 className="text-[1.8rem] font-bold tracking-[.15rem] text-center text-black my-8">JESSIE'S JUICE BAR <span className="text-[#19d8ff]">STORIES</span></h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
              {stories.map((story, i) => (
                <div
                  key={i}
                  className="relative p-6 h-[17rem] rounded overflow-hidden bg-cover bg-center flex items-end"
                  style={{ backgroundImage: `url(${story.image})` }}
                >
                  <div className="absolute inset-0 bg-black/35 z-0"></div>
                  <div className="relative z-10 flex flex-col justify-start h-[10rem]">
                    <h4 className="font-semibold text-[1rem] text-white">Article</h4>
                    <p className="text-[1.75rem] tracking-[0.25rem] font-bold text-white">
                      {story.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="mt-5 ">
        {/* <div className="max-w-7xl mx-auto px-4">
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
        </div> */}


        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">

          <div className="img col-span-1">
            <Image
              src="/images/uftr-img.webp"
              alt="Logo"
              width={200}
              height={200}
              className="object-cover w-full "
            />
          </div>


          <div className="content col-span-1 px-5">
            <h2 className="text-[1.563rem] font-semibold tracking-[0.25rem] leading-[2.25rem]">CAMANA BAY</h2>

            <h4 className="flex mt-5 font-bold leading-[1.4rem] items-center gap-4">
              <p className=""><IoLocationSharp className="text-[#19d8ff] text-[1.7rem]" /></p>
              <p className="text-[1rem] font-bold ">Market St, Camana Bay, Grand Cayman <br />
                (near Anytime Fitness, north end of Market Street)</p>
            </h4>

            <div className="w-[14rem] mt-5 ms-[2.5rem] text-white font-medium  h-[3.375rem]">

              <a className=" flex  items-center justify-around py-[0.938rem] px-[1.875rem] rounded-4xl   bg-[#19d8ff]   ">
                <span className="inline"><FaMinus /></span>
                <span className="tracking-[.15rem]">Get Directions</span>

              </a>
            </div>


            <h4 className="flex font-bold mt-2 leading-[2.7rem] items-center gap-4">
              <p><FaPhoneAlt className="text-[#19d8ff] text-[1.7rem]" /></p>
              <p className="text-[1.1rem] font-bold ">+1 345 949 2012</p>
            </h4>


            <h4 className="flex items-center   font-bold leading-[2.7rem] gap-4">
              <p><MdEmail className="text-[#19d8ff] text-[1.8rem]" /></p>

              <p className="text-[1.1rem] font-bold ">hello jessiesjuicebar@gmail.com</p>
            </h4>

            <h1 className="text-[1.563rem] mt-3 font-bold tracking-[0.25rem] leading-[2.25rem]">CAMANA BAY HOURS</h1>

            <p className="mb-[0.063rem] mt-4 font-normal">7:30 am – 4:00 pm Monday – Saturday</p>
            <p className="mt-3">7:30 am – 4:00 pm Monday – Saturday</p>


            <div className="w-full h-[400px] mt-5  overflow-hidden ">

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1927717.0969852754!2d-81.377941!3d19.322662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f2587ac03756aaf%3A0x5dcf46282d38b9d!2sJessie&#39;s%20Juice%20Bar%20Cafe%2C%20Camana%20Bay!5e0!3m2!1sen!2sus!4v1750927923740!5m2!1sen!2sus" className="w-[100%] h-[75%]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* 
             <iframe
                src="https://maps.app.goo.gl/EJkj65H5b5uxT1Fv5" // 🔁 replace with your location embed
                width="82%"
                height="70%"
                
                className=" "
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}












          </div>




        </div>
      </section>
    </Layout>
  )
}