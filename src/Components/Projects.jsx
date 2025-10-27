import React from "react";
import SplitText from "../../Reactbits/SplitText/SplitText";
import SpotlightCard from "../../Reactbits/SpotlightCard/SpotlightCard";
import projects from "../utils/data/projects";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col justify-center items-center text-white px-6 pb-16 pt-30">
      <div className="w-full max-w-7xl">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-0.5 bg-green-500"></div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-green-500">
            Projects
          </h2>
        </div>

        <SplitText
          text="Selected Projects"
          className="text-5xl lg:text-5xl font-medium mb-1 text-white text-center lg:text-left leading-[1.3]"
          delay={100}
          duration={0.4}
          ease="power2.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <p className="text-gray-300 text-md mb-12">
          Here's a curated selection showcasing my expertise and the achieved
          results.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <SpotlightCard
              spotlightColor="#132a13"
              key={project.id}
              className="z-1 backdrop-blur-md transition-all duration-300 flex flex-col p-6 cursor-pointer"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full"
              >
                <h3 className="text-2xl font-semibold mb-2 z-2 group-hover:text-green-500 transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 z-2 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs z-2 bg-green-500/10 text-green-500 px-3 py-1 rounded-full border border-green-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
