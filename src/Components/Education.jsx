import React from 'react'
import AboutImg from "../assets/7358653-removebg-preview.png"
import { IoArrowForward } from "react-icons/io5"

const Education = () => {
  return (
    <>
    <section id="Education">
    <div  className="text-white flex flex-wrap md:flex-nowrap bg-black shadow-xl mx-0 md:mx-10 bg-opacity-30 rounded-lg p-12">
      
      {/* Left Side: Image */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <img className="h-80" src={AboutImg} alt="about img" />
      </div>

      {/* Right Side: Education Details */}
      <div className="w-full md:w-2/3 pl-10">
        <h2 className="text-2xl md:text-4xl font-bold">Education</h2>
        <ul className="mt-6 space-y-4">  
          {[
            { title: "Bachelor of Technology-IT | 2021 - 2025", moreDesc: "Dr. A. P. J. Abdul Kalam technical University, Lucknow," , desc: "8.5 SGPA"},
            { title: "Senior Secondary (XII) | 2019 - 2020", moreDesc: "ST.Xavier's school,Ballia", desc: "89% (Mathematics)" },
            { title: "High School(X) | 2017 - 2018", moreDesc: "M.N.B.Memorial Public School" ,desc: "81%"}
          ].map((item, index) => (
            <div key={index} className="flex gap-3">
              <IoArrowForward size={30} className="mt-1" />
              <div>
                <h1 className="text-xl md:text-xl font-bold">{item.title}</h1>
                {item.desc && <p className="text-sm md:text-md">{item.desc}</p>}
                <p className="text-sm md:text-md">{item.moreDesc}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
   </section>
    </>
  )
}

export default Education
