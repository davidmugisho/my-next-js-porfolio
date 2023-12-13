"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>HTML|CSS|JavaScript</li>
        <li>React.js |Python</li>
        <li>ReactNative |Next.js</li>
        <li>TailwindCSS |MongoDB </li>
        <li>Go|Firebase|solidity</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Kigali Independent Univercity</li>
        <li>Havard University Remote cs50</li>
        <li>Africa Lidership University (ALU)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript (Intermediate) Certificate </li>
        <li>
          Harvard university cs50 certification (completing computer science){" "}
        </li>
        <li> Bachelor degree in Computer Science</li>
        <li>Responsive Web Design</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold  text-blue-500 mb-4">About Me</h2>
          <p className="text-base  lg:text-lg">
            I'm a passionate and adept developer specializing in crafting and
            seamlessly integrating APIs for high-scale web2/web3 frontend
            applications. With a solid background in agile frameworks, I thrive
            in collaborative environments and bring extensive experience to the
            table. My forte lies in delivering innovative software solutions
            that exceed expectations while maintaining a user-centric approach.
            Beyond technical expertise, I'm deeply committed to mentoring
            emerging developers, fostering growth, and sharing knowledge within
            the community. My foundation in web technologies, coupled with a
            keen interest in blockchain advancements, fuels my exploration into
            transformative applications. Mastery in advanced JavaScript concepts
            defines my journey as a Frontend Developer, underpinned by an
            unwavering dedication to continuous learning.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Expertise{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Learning{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              License{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
