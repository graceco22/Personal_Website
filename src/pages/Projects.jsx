import React from "react";

const Projects = () => {
  return (
    <div className="bg-gray-50">
      <section className="max-container">
        <h1 className="head-text">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300 font-semibold drop-shadow">
            Projects
          </span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Welcome to my projects page! Here, you'll find a variety of projects
            I've worked on, including many created during numerous hackathons.
            These experiences have helped me grow and develop my skills. Check
            out my portfolio to see what I've been working on! :)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
