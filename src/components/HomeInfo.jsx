import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText} <img className="w-4 h-4 object-contain" src={arrow} />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center
  neo-brutalism-blue py-4 px-8 text-white mx-5"
    >
      Hi, I am
      <span className="font-semibold"> Jatin</span>👋
      <br />A Computer Science{" "}
      <span className="font-semibold"> Engineering </span>Student
    </h1>
  ),
  2: (
    <InfoBox
      text="Everyday I try to Learn new skills"
      link="/about"
      btnText="Learn more"
    ></InfoBox>
  ),
  3: (
    <InfoBox
      text="In my Web Dev journey, I make multiple different projects"
      link="/projects"
      btnText="Visit my Portfolio"
    ></InfoBox>
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev?
       I'm just a keystrokes away"
      link="/contact"
      btnText="Let's talk"
    ></InfoBox>
  ),
};

const HomeInfo = ({ CurrentStage }) => {
  return renderContent[CurrentStage] || null;
};

export default HomeInfo;
