import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img
        src="https://www.iconsdb.com/icons/preview/color/4CAF50/arrow-11-xl.png"
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
      Hi! My name is <span className="font-semibold">Grace</span> ⭐
      <br />
      Computer Science + Master of Management @ UBC
    </h1>
  ),
  2: (
    <InfoBox
      text="Gained valuable experience through various internships, and club opportunities."
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
