
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { FaBars } from "react-icons/fa";

import { FaPinterest } from "react-icons/fa";



export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-white">
            {/* Fixed Top Bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#19d8ff] text-white px-[1.4rem] font-semibold">
                <div className="flex justify-between py-[0.938rem] items-center">
                    {/* Social Icons */}
                    <div className="md:flex hidden w-[23.375rem] items-center space-x-4">
                        <a className="relative w-[1.604rem] mx-[0.625rem] after:content-[''] after:absolute after:left-8 after:top-1/2 after:-translate-y-1/2 after:h-[1rem] after:w-[0.2px] after:bg-[#686868]" href="https://www.facebook.com/jessiesjuicebar/">
                            <Facebook className="w-[1rem] h-[1rem]" />
                        </a>
                        <a className="relative w-[1.604rem] mx-[0.625rem] after:content-[''] after:absolute after:left-8 after:top-1/2 after:-translate-y-1/2 after:h-[1rem] after:w-[0.2px] after:bg-[#686868]">
                            <FaPinterest className="w-[1rem] h-[1rem]" />
                        </a>
                        <a href="" className="w-[1.604rem] mx-[0.625rem]">
                            <Instagram className="w-[1rem] h-[1rem]" />
                        </a>
                    </div>

                    {/* Text */}
                    <div className="lg:text-[1.125rem] md:text-[1rem] md:text-left text-center tracking-[0.175rem] w-[51.625rem]">
                        CAMANA BAY, GRAND CAYMAN +1345949 2012
                    </div>
                </div>
            </div>

            {/* Fixed Header below Top Bar */}
            <header className="fixed top-[3.5rem] left-0 right-0 z-40 bg-white shadow-sm">
                <div className=" mx-auto px-4">
                    <div className="flex justify-between items-center ">

                        <nav className="flex justify-between items-center w-full xl:mx-[3.896rem] lg:mx-[3.5rem] mx-3">

                            <div className="serif text-[0.813rem] py-[0.625rem] lg:flex hidden font-semibold tracking-[0.1rem] text-dark m-0 w-[32.5%]  justify-around items-center">
                                <Link href="/about" className=" hover:text-gray-900  ">ABOUT</Link>
                                <Link href="/gift-certificates" className=" hover:text-gray-900 ">GIFT CERTIFICATES</Link>
                                <Link href="/menu" className=" hover:text-gray-900 ">MENU</Link>
                            </div>
                            <div className="m-0 py-[0.625rem]  w-[32.5%] ">
                                <Link href="/" className="flex flex-col lg:items-center items-start">
                                    <img className="w-[8.05rem]" src="https://jessiesjuicebar.aipowerkit.com/wp-content/uploads/2022/08/16533d086e252af161f14cea4bc3ad0a_398x254_fit.webp"></img>
                                </Link>
                            </div>


                            <div className="serif text-[0.813rem] py-[0.625rem]  font-semibold tracking-[0.188rem] text-dark m-0 w-[32.5%] lg:flex hidden justify-around items-center ">
                                <Link href="/gallery" className=" hover:text-gray-900 ">GALLERY</Link>
                                <Link href="/contact" className=" 
                                 hover:text-gray-900 ">CONTACT</Link>
                                <Link href="/cart" className=" hover:text-gray-900  ">SHOP</Link>
                            </div>
                            <div className="ham lg:hidden block">
                                <FaBars />

                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Margin top to avoid overlap */}
            <main className="pt-[7.5rem]">{children}</main>

            <footer className="bg-gray-800 text-white py-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p>&copy; 2025 Jessie's Juice Bar.</p>
                </div>
            </footer>
        </div>
    )
}


// LOGO JESSES
//src="https://jessiesjuicebar.aipowerkit.com/wp-content/uploads/2022/08/16533d086e252af161f14cea4bc3ad0a_398x254_fit.webp"

