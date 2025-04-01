import React from 'react';

const ProjectCard = ({ title, main, date, desc, imgSrc, demoLink, sourceLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-[270px] md:w-[320px] lg:w-[370px] h-[460px] md:h-[500px] bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      
      {/* Image */}
      <img className="p-4 h-[180px] w-full object-cover rounded-lg" src={imgSrc} alt={`${title} preview`} />

      {/* Title */}
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>

      {/* Content */}
      <p className="px-4 text-md leading-tight py-1">{date}</p>
      <p className="px-4 text-md leading-tight py-1">{main}</p>
      <p className="px-4 text-sm md:text-md leading-tight py-1 flex-grow">{desc}</p>

      {/* Buttons */}
      <div className="mt-auto p-4 flex flex-wrap justify-center gap-4">
        {demoLink ? (
          <a href={demoLink} target="_blank" rel="noopener noreferrer"
             className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 transition-transform duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Demo
          </a>
        ) : null}

        {sourceLink ? (
          <a href={sourceLink} target="_blank" rel="noopener noreferrer"
             className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 transition-transform duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Source Code
          </a>
        ) : null}
      </div>

    </div>
  );
};

export default ProjectCard;
