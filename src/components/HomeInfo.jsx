import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img
        src="data:image/png;base64,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"
        className="w-4 h-4 object-contain"
      />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center
    neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi!! My name is <span className="font-semibold">Grace</span> ⭐
      <br />
      Computer Science + Master of Management @ UBC
    </h1>
  ),
  2: (
    <InfoBox
      text="Competed at many hackathons and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Check out some of the projects I've made!"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Get to know me better and contact me!"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
