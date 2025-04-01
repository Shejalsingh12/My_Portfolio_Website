
import React from 'react'
import{FaCss3,FaHtml5 ,FaJs, FaReact,FaNodeJs ,FaPython } from "react-icons/fa"
import { FaC } from "react-icons/fa6";
import { SiMongodb } from 'react-icons/si'


const Skills = () => {
  return (
    <>
    <section id="Skills">
    <div  className='p-10 md:p-24'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills/Certifications</h1>
        <div className='flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
            <span className='p-3 bg-zinc-950 flex flex-col items-center  rounded-2xl'>
                <FaHtml5 color='#e34f26'size={50}/>
                <span className="text-white mt-2 text-sm">HTML5</span> 
                </span>
                <span className='p-3 bg-zinc-950 flex flex-col items-center rounded-2xl'>
                <FaCss3 color='#1572b6'size={50}/>
                <span className="text-white mt-2 text-sm">CSS3</span>
                </span>
                <span className='p-3 bg-zinc-950 flex flex-col items-center rounded-2xl'>
                <FaReact color='#61dafb'size={50}/>
                <span className="text-white mt-2 text-sm">React</span>
                </span>
                
                <span className='p-3 bg-zinc-950 flex  flex-col items-center rounded-2xl'>
                <FaC color='#f7df1e'size={50}/>
                <span className="text-white mt-2 text-sm">C/C++</span>
                </span>
                <span className='p-3 bg-zinc-950 flex  flex-col items-center rounded-2xl'>
                <FaJs color='#f7df1e'size={50}/>
                <span className="text-white mt-2 text-sm">Js</span>
                </span>
                
                <span className='p-3 bg-zinc-950 flex flex-col items-center rounded-2xl'>
                <SiMongodb color='#47a248'size={50}/>
                <span className="text-white mt-2 text-sm">MongoDb</span>
                </span>
                <span className='p-3 bg-zinc-950 flex flex-col items-center rounded-2xl'>
                <FaNodeJs  color='#ff4438'size={50}/>
                <span className="text-white mt-2 text-sm">NodeJs</span>
                </span>
               
                <span className='p-3 bg-zinc-950 flex flex-col items-center rounded-2xl'>
                <FaPython  color='#4285f4'size={50}/>
                <span className="text-white mt-2 text-sm">Python</span>
                </span>
                </div>
                <div>
                <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                
                   <img src="https://media.licdn.com/dms/image/v2/C4D0BAQHER-dvTqh2tA/company-logo_200_200/company-logo_200_200/0/1630576160230/sololearn_inc__logo?e=1749081600&v=beta&t=k6V_DOEK3459xss_QiB03rHhYlPH4WqbTSC3uiMoH9k" width= "60px" alt="logo" srcset="" />
                    
                    <span className='text-white'>
                      <a href='https://drive.google.com/file/d/1kVpgcAmzHvDJocvoqtd2ej1YhPIUmuDd/view'> <h2 className='leading-tight'>Python Certification Course</h2></a>  
                        <p className='text-sm leading-tight font-thin'>Jan 2023</p>
                        <ul className='text-sm p-2'>
                           <a href='https://drive.google.com/file/d/1kVpgcAmzHvDJocvoqtd2ej1YhPIUmuDd/view'><li>- Python For Beginners</li></a> 
                           
                            
                        </ul>
                    </span>
                </div>

                <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                <img src="https://media.licdn.com/dms/image/v2/C560BAQFVBXwBy3fA-w/company-logo_200_200/company-logo_200_200/0/1630640455823/techtitudetribe_logo?e=1749081600&v=beta&t=2gPjKK46v5tmqXiR4gUohezlxsYtVxs7u0tCBahs7Yw" width= "58px" alt="logo" srcset="" />
                   
                    <span className='text-white'>
                        
                        <a href='https://drive.google.com/file/d/1kUYIvoyOfnAM5pi3rNlvKZ-nOQT62IGJ/view'><h2 className='leading-tight'>Web Development Workshop</h2></a>
                        <p className='text-sm leading-tight font-thin'>June 2022 </p>
                        <ul className='text-sm p-2'>
                           <a href='https://drive.google.com/file/d/1kUYIvoyOfnAM5pi3rNlvKZ-nOQT62IGJ/view'> <li>- Web Development Workshop</li></a> 
                            
                            
                        </ul>
                    </span>
                </div>

                
                </div>
        </div>
    </div>
    </section>
   </>
  )
}

export default Skills