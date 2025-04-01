import React from 'react'
import avatarImg from '../../assets/7358602-removebg-preview.png'
import TextChanger from '../../TextChanger'


const Home = () => {
  return (
    <>
      <section id="Home">
        <div className='text-white flex w-full justify-between items-start p-10 md:p-50 pt-20 md:pt-32'>
          <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
              <TextChanger />
            </h1>
            <p className='text-sm md:text-2xl tracking tracking-tight'>
              BTech-IT'25 || Full Stack Web Development || MERN Stack || ML & Blockchain Enthusiast || Git || Github</p>
              <p className='text-sm md:text-2xl tracking tracking-tight'>
              Equipped with a good foundation in HTML, CSS, JavaScript, React, NodeJs, C/C++, and Python, and a passion for continuous improvement and innovation with strong problem-solving and communication skills.
            </p>
            <button 
              onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })} 
              className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'
            >
              Contact
            
            </button>
            <a href='https://drive.google.com/file/d/18Frfmuo9gok6SDMaJIpdrjRcvCR9Z7Zp/view?usp=drive_link '><button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' >My Resume</button></a>
          </div>
          <div>
            <img  className='mt-10 md:mt-20' src={avatarImg} alt="MY IMAGE" width="250PX"  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
