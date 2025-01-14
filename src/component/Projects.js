import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio showcasing my skills and projects.",
      tech: ["React", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description: "An online shopping platform with cart functionality.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="text-sm mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded mr-2">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
