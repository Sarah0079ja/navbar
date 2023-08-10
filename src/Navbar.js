import React,{useState} from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaBehance, FaBars} from 'react-icons/fa'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggle = () => {
        setMenuOpen(!menuOpen)
    }
  return (
    <>
      <header className="flex py-4 px-8 text-slate-500 bg-slate-200 text-1xl items-center relative md:px-16 justify-between ">
        <h1 className="font-semibold items-center">
          Code<span className="text-blue-400 ml-1">Addict</span>
        </h1>
        {/* hamburger menu for mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggle}>
          <FaBars />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex text-slate-500 text-1xl items-center justify-center">
          <ul className="flex pl-20 space-x-10">
            <li className="  hover:text-blue-400">Home</li>
            <li className="hover:text-blue-400">About</li>
            <li className="hover:text-blue-400">Projects</li>
            <li className="hover:text-blue-400">Contact</li>
            <li className="hover:text-blue-400">Profile</li>
          </ul>
          <div className="flex  ml-6 pl-20 space-x-6 ">
            <FaFacebook color="blue" />
            <FaTwitter color="blue" />
            <FaInstagram color="blue" />
            <FaBehance color="blue" />
          </div>
        </nav>

        {/* mobile sidebar */}
        {menuOpen && (
          <div className="md:hidden absolute top-0 left-0 h-screen w-2/3 transform-transform ease-in-out duration-300 ">
            <nav className="">
              <ul className="flex flex-col pt-16 px-8 space-y-4 ">
                <li className="hover:text-blue-400">Home</li>
                <li className="hover:text-blue-400">About</li>
                <li className="hover:text-blue-400">Projects</li>
                <li className="hover:text-blue-400">Contact</li>
                <li className="hover:text-blue-400">Profile</li>
              </ul>
              <div className="flex pl-2 mt-2 space-x-4 ">
                <a
                  href="https:www.twitter.com"
                  className="text-blue-500 hover:text-blue-300"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https:www.instagram.com"
                  className="text-blue-500 hover:text-blue-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https:www.instagram.com"
                  className="text-blue-500 hover:text-blue-300"
                >
                  <FaInstagram/>
                </a>
                <a
                  href="https:www.behance.com"
                  className="text-blue-500 hover:text-blue-300"
                >
                  <FaBehance/>
                </a>
                {/* <FaFacebook color="blue" />
                <FaTwitter color="blue" />
                <FaInstagram color="blue" />
                <FaBehance color="blue" /> */}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar