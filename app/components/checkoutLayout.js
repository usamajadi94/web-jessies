'use client'
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { FaBars, FaTimes } from 'react-icons/fa';



import { FaPinterest } from "react-icons/fa";
// import jessesLogo from '@/public/images/'
import Image from "next/image";
import { useEffect, useState } from "react";
import Dropdown from "./dropdown";
import HoverDropdown from "./dropdown";


export default function Layout({ children ,headName }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll(); // 👈 add this to check immediately on mount

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);




    return (
        <div className="min-h-screen ">
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
                    <div className="lg:text-[1.125rem] font-semibold flex items-center h-[18px] md:text-[1rem] md:text-left text-center tracking-[0.175rem] w-[51.625rem]">
                        CAMANA BAY, GRAND CAYMAN +1345949 2012
                    </div>
                </div>
            </div>

            {/* Fixed Header below Top Bar */}
            <section className="relative md:h-[24rem] h-[20rem]  bg-[url('/images/cart-head-image.webp')] bg-cover bg-center flex items-center justify-center">
                {/* Fixed Header */}
                 <div className="absolute inset-0 bg-black/40 z-0"></div>
                <header
                    className={`fixed top-[3rem] left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
                        }`}
                >
                    <div className="mx-auto">
                        <div className="flex h-[7.025rem] justify-between items-center">
                            <nav className="relative w-full z-50">
                                <div className="flex justify-between items-center xl:mx-[3.896rem] lg:mx-[3.5rem] mx-3 h-[5.775rem]">
                                    {/* Left */}
                                    <div className="serif text-[0.813rem] py-[0.625rem] lg:flex hidden font-semibold tracking-[0.1rem] text-dark w-[32.5%] justify-around items-center">
                                        <Link href="/about">ABOUT</Link>
                                        <Link href="/gift-certificates">GIFT CERTIFICATES</Link>
                                        <Link href="/menu">MENU</Link>
                                    </div>

                                    {/* Logo */}
                                    <div className="w-[32.5%] flex lg:justify-center justify-start items-center">
                                        <Link href="/">
                                            <Image
                                                src="/images/jesses-logo.webp"
                                                alt="Jessie's Logo"
                                                width={129}
                                                height={40}
                                                className={`md:w-[8.05rem] w-[6rem]`}
                                            />
                                        </Link>
                                    </div>

                                    {/* Right */}
                                    <div className="serif text-[0.813rem] py-[0.625rem] font-semibold tracking-[0.188rem] text-dark w-[32.5%] lg:flex hidden justify-around items-center">
                                        <Link href="/gallery">GALLERY</Link>
                                        <Link href="/contact">CONTACT</Link>
                                        <p className="">
                                            <HoverDropdown  scrolled ={scrolled}/>
                                        </p>
                                    </div>

                                    {/* Mobile Hamburger */}
                                    <div className="lg:hidden block z-50" onClick={toggleMenu}>
                                        {menuOpen ? (
                                            <FaTimes className="text-[1.8rem] text-dark" />
                                        ) : (
                                            <FaBars className="text-[1.8rem] text-dark" />
                                        )}
                                    </div>
                                </div>
                            </nav>

                            {/* Mobile Dropdown */}
                            <div
                                className={`fixed top-[9.5rem] left-0 w-full bg-white text-black z-40 transform transition-transform duration-300 ease-in-out ${menuOpen
                                        ? 'translate-y-0 opacity-100 pointer-events-auto'
                                        : '-translate-y-full opacity-0 pointer-events-none'
                                    }`}
                            >
                                <div className="flex flex-col  py-6 gap-5 text-[0.9rem] px-[3rem] font-semibold tracking-widest">
                                    <Link href="/about" onClick={toggleMenu}>ABOUT</Link>
                                    <Link href="/gift-certificates" onClick={toggleMenu}>GIFT CERTIFICATES</Link>
                                    <Link href="/menu" onClick={toggleMenu}>MENU</Link>
                                    <Link href="/gallery" onClick={toggleMenu}>GALLERY</Link>
                                    <Link href="/contact" onClick={toggleMenu}>CONTACT</Link>
                                    <Link href="/cart" onClick={toggleMenu}>SHOP</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Cart Title - Centered */}
                <div className="text-white z-10 mt-10">
                    <h1 className="text-4xl md:text-5xl font-bold">{headName}</h1>
                </div>
            </section>


            {/* Margin top to avoid overlap */}
            <main className="md:px-[4rem] px-[2rem] pt-[2rem]">{children}</main>

            <footer className="bg-gray-800 text-white py-8 mt-16">
                <div className="max-w-7xl mx-auto px-[3rem] ">
                    <p>&copy; 2025 Jessie's Juice Bar.</p>
                </div>
            </footer>
        </div>
    )
}


// LOGO JESSES
//src="https://jessiesjuicebar.aipowerkit.com/wp-content/uploads/2022/08/16533d086e252af161f14cea4bc3ad0a_398x254_fit.webp"

