"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React.js Portfolio Website",
    description: "Welcome to my React.js Portfolio! This website is a showcase of my work, built using cutting-edge React.js technology. It's a dynamic and interactive platform that highlights my projects, skills, and expertise.Explore my portfolio crafted with React.js for a seamless and engaging browsing experience. Join me on this journey through my projects and skills demonstrated in a modern, user-friendly design",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "full-stack dog Adoption mobile application",
    description:
      "Hi there! I'm the creator of a user-friendly Dog Adoption App. It's designed to connect dog lovers with their perfect furry companions hassle-free. My app streamlines the adoption process, making it easy for shelters and adopters alike. Join me in this mission to unite loving homes with dogs in need - together, let's make adoption simple and joyful!",
    image: "/images/projects/1.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Food Delivery System mobile application",
    description:
      "Meet our Food Delivery App! It's your one-stop solution for ordering meals from your favorite restaurants. Browse, order, and enjoy delicious food delivered right to your door. For restaurants, it's a powerful tool to reach more customers and manage orders smoothly. Experience the ease of dining with our app",
    image: "/images/projects/2.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Training ATL website",
    description:
      "Hey there! Welcome to Training ATL, the hub I've built for athletes seeking top-tier performance. This website is all about maximizing athletic potential through specialized training techniques, tips, and insights.Explore a wealth of resources designed to elevate your game – from workout plans and nutrition guidance to mental strategies and recovery methods. Training ATL is your all-in-one platform for reaching peak performance",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Havard Final Project INSIDE-MAIL",
    description:
      "Introducing Inside-Mail, my Harvard final project! It's a cutting-edge email platform designed to revolutionize your inbox experience. Inside-Mail prioritizes efficiency and organization, offering intuitive features to streamline communication. With Inside-Mail, expect a smarter approach to managing emails. Our platform aims to simplify your inbox, enhance productivity, and provide a seamless emailing experience.Join me in exploring the future of email management with Inside-Mail. Let's make handling emails easier and more efficient",
    image: "/images/projects/4.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-blue-500 text-4xl font-bol mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
