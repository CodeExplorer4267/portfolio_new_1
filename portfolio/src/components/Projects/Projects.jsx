import React from "react";
import "./Projects.css";
import GradientText from "../Animations/Gradient-Text";
import { SkillsInfo } from "../../constants";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
const Projects = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-[30px] pb-[30px] w-[100%]">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          <h1 className="text-4xl font-bold mb-[40px]">Projects</h1>
        </GradientText>
        <div className="first w-[90%] h-[400px] flex flex-row justify-evenly items-center">
            <div className="w-[40%] flex flex-row justify-center items-center">
              <img
                src="./laptop_img.png"
                alt=""
                className="h-auto w-[350px] relative floatEffect"
              />
              <img
                src="./Project_front_1.png"
                alt=""
                className="h-[155px] w-[244px] top-[266%] absolute floatEffect"
              />
            </div>
          <FaArrowAltCircleRight className="text-purple-700 text-[50px] absolute right-[48%] top-[275%] z-10" />
          <div className="w-[5px] h-[100%] bg-purple-700"></div>
          <div className="flex flex-col items-center gap-[40px] w-[40%] p-[5px]">
            <h2 className="text-3xl bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold">
              Online Examination Website
            </h2>
            <p className="text-white text-[14px] block">
              My online examination website is a full-stack platform built using
              (MySQL, Express.js, React.js, Node.js).It includes separate
              portals for teachers and students, allowing teachers to create
              exams , add SAQs, and view detailed results. Students can join
              exams, answer questions within a timer, and view their results.
              The platform supports real-time chat via WebSockets and integrates
              AI to generate exam questions. It ensures secure and efficient
              online assessments with features like result uploads, and answer
              reviews.Teachers can also upload materials for students.
            </p>
            <div className="flex flex-row gap-6 justify-center items-center text-center w-[100%]">
              <h2 className="text-violet-600 font-bold text-[20px]">
                Tech stack:
              </h2>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[0].skills[4].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">React Js</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[1].skills[1].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">Node Js</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[1].skills[2].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">Express Js</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[1].skills[3].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">My SQL</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src="./socket_Io_logo.png"
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">Socket IO</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img src="./jwt_logo.png" alt="" className="h-[40px] w-auto" />
                <p className="text-white text-[14px] font-bold">
                  Json Web Token
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="first w-[90%] h-[400px] flex flex-row justify-evenly items-center">
          <div className="flex flex-col items-center gap-[40px] w-[40%] p-[5px]">
            <h2 className="text-3xl bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold">
              Social-Nest
            </h2>
            <p className="text-white text-[14px] block">
              A full-featured social media platform built using the MERN stack
              (MongoDB, Express.js, React.js, Node.js), enabling users to
              connect, share, and interact seamlessly.
              <br />
              Key Features: 1. User Authentication: Secure sign-up/login with
              profile customization(username, bio, profile picture).
              <br />
              2.Posts & Media: Create, view,and delete posts with images and
              text support.
              <br />
              3.Social Interactions: Like, comment, and delete own comments on
              posts.
              <br />
              4.Save Posts: Option to save favorite posts for easy access.
              <br />
              5.User Search & Follow: Discover users and follow/unfollow them.
              <br />
              6.Profile View: Access and manage your own posts, saved items, and
              replies.
              <br />
              7.Real-Time Updates: Optimized UI for smooth and responsive
              interactions.
            </p>
            <div className="flex flex-row gap-6 justify-center items-center text-center w-[100%]">
              <h2 className="text-violet-600 font-bold text-[20px]">
                Tech stack:
              </h2>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[0].skills[4].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">React Js</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[1].skills[1].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">Node Js</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[1].skills[2].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">Express Js</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src="./material_ui.png"
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">Material UI</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[1].skills[4].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">Mongo DB</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[0].skills[6].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">
                  Redux Toolkit
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img src="./jwt_logo.png" alt="" className="h-[40px] w-auto" />
                <p className="text-white text-[14px] font-bold">
                  Json Web Token
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src="./cloudinary_logo.png"
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">Cloudinary</p>
              </div>
            </div>
          </div>
          <FaArrowAltCircleLeft className="text-purple-700 text-[50px] absolute right-[48.5%] top-[327%] z-10" />
          <div className="w-[5px] h-[100%] bg-purple-700"></div>
          <div className="w-[40%] flex flex-row justify-center items-center">
            <img
              src="./laptop_img.png"
              alt=""
              className="h-auto w-[350px] relative floatEffect"
            />
            <img
              src="./social_project_logo.png"
              alt=""
              className="h-[155px] w-[244px] top-[321%] absolute floatEffect"
            />
          </div>
        </div>
        <div className="first w-[90%] h-[400px] flex flex-row justify-evenly items-center">
          <div className="w-[40%] flex flex-row justify-center items-center">
            <img
              src="./laptop_img.png"
              alt=""
              className="h-auto w-[350px] relative floatEffect"
            />
            <img
              src="./food_del_screen_view.png"
              alt=""
              className="h-[155px] w-[244px] top-[376%] absolute floatEffect"
            />
          </div>
          <FaArrowAltCircleRight className="text-purple-700 text-[50px] absolute right-[48%] top-[385%] z-10" />
          <div className="w-[5px] h-[100%] bg-purple-700"></div>
          <div className="flex flex-col items-center gap-[40px] w-[40%] p-[5px]">
            <h2 className="text-3xl bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold">
              Foodie-Fiesta
            </h2>
            <p className="text-white text-[14px] block">
              I developed a full-stack Food Delivery Web Application using the
              MERN stack (MongoDB, Express.js, React.js, Node.js) that allows
              users to browse a dynamic menu, add items to their cart, place
              orders with address input, and track order status. The app
              features secure user authentication with JWT, profile management
              including profile picture updates, and a dummy payment system. An
              admin panel enables management of food items and real-time order
              status updates. Image uploads are handled via Multer, and Context
              API is used for efficient state management across components.
            </p>
            <div className="flex flex-row gap-6 justify-center items-center text-center w-[100%]">
              <h2 className="text-violet-600 font-bold text-[20px]">
                Tech stack:
              </h2>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[0].skills[4].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">React Js</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[1].skills[1].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">Node Js</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[1].skills[2].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">Express Js</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[1].skills[4].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">Mongo DB</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={SkillsInfo[0].skills[1].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p className="text-white text-[14px] font-bold">CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
