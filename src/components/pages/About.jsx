import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences } from "../../constants";
import CTA from "../CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello , I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Jatin{" "}
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I am a computer sciense student currently in the 2nd year of college{" "}
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement>
              <div className="">
                <h3 className="">{experience.title}</h3>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <hr className="border-slate-200"></hr> <CTA />
    </section>
  );
};

export default About;
