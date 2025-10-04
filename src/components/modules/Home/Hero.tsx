import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {  FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import bright from "../../../../public/b.jpg";

export default function Hero() {
  return (
    <div className="relative flex mt-25 md:mt-0 flex-col-reverse md:flex-row items-center justify-center 
                min-h-[500px] w-11/12 mx-auto bg-white text-gray-900 border-b my-5 gap-8 md:gap-16 lg:gap-20">

      {/* Content Section */}
      <div className="container relative z-10 flex flex-col gap-6 py-10 px-4 md:px-8 max-w-xl text-center md:text-left">
        
        {/* Social Links (desktop & tablet, left side) */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4 text-blue-500">
          <a href="https://github.com/mohammaduzzal" aria-label="GitHub"><FaGithub className="w-5 h-5 hover:scale-110 transition-transform" /></a>
          <a href="https://www.linkedin.com/in/mohammad-uzzal-289a24283/" aria-label="LinkedIn"><FaLinkedin className="w-5 h-5 hover:scale-110 transition-transform" /></a>
          <a href="https://x.com/bright0001011" aria-label="twitter"><FaTwitter className="w-5 h-5 hover:scale-110 transition-transform" /></a>
        </div>

        {/* Text */}
        <div className="ml-0 md:ml-12 max-w-xl">
          <p className="text-sm uppercase tracking-widest text-blue-500">Hello, I'm</p>
          <h1 className="text-2xl md:text-5xl mt-2 font-bold leading-tight">
            <span className="block">Mohammad Uzzal</span>
            <span className="block text-xl mb-3 font-light text-gray-700">A Full Stack Web Developer</span>
          </h1>
          <a href='https://drive.google.com/drive/u/0/folders/1PjEMCo0nF_jme71WLeX7LGx1Tmi5gWyO' className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Resume
          </a>

          {/* Social Links (mobile, under button) */}
          <div className="flex justify-center gap-6 mt-4 text-blue-500 md:hidden">
            <a href="https://github.com/mohammaduzzal"  aria-label="GitHub"><FaGithub className="w-6 h-6 hover:scale-110 transition-transform" /></a>
            <a href="https://www.linkedin.com/in/mohammad-uzzal-289a24283/" aria-label="LinkedIn"><FaLinkedin className="w-6 h-6 hover:scale-110 transition-transform" /></a>
            <a href="https://x.com/bright0001011" aria-label="twitter"><FaTwitter className="w-6 h-6 hover:scale-110 transition-transform" /></a>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="sm:mt-20 sm:w-30 sm:h-30 md:w-60 md:h-60 lg:w-72 lg:h-72 
                rounded-full md:rounded-4xl overflow-hidden border-4 border-white flex-shrink-0">
        <Image src={bright} alt="banner pic" height={200} width={200} className="rounded-full md:rounded-xl shadow-md object-cover" />
      </div>
    </div>
  );
}
