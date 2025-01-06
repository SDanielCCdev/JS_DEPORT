import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            sit consectetur doloremque quam, sed quibusdam dolorem placeat
            eligendi libero ad, sequi repudiandae repellendus eos sunt
            consequatur nisi ipsam beatae consequuntur quia unde maiores. Odit,
            quos! Laboriosam omnis quaerat sit dolore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            voluptates laboriosam quo, assumenda consequatur magni delectus quas
            molestiae nesciunt eos pariatur ipsum repudiandae maxime, adipisci
            aut numquam. Voluptate enim eligendi eos soluta in voluptates totam
            molestiae, ratione, sunt illo recusandae.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eaque
            assumenda cupiditate delectus hic sed laboriosam dignissimos
            aperiam, vitae corrupti eligendi saepe! Eos quasi temporibus fugit
            ratione ullam voluptatibus sed?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quibusdam placeat voluptates non doloremque voluptas.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            soluta.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            suscipit.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
