import React from "react";
import "./Testimonial.css";
import GradientText from "../Animations/Gradient-Text";
import Swiper from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Testimonial = () => {
    const testi=[
        {
            name:" Ananya Sharma, Project Teammate",
            statement:`"Rupam is a highly skilled developer with an exceptional ability to solve problems quickly. His attention to detail and clean coding practices make him a valuable asset to any project."`
        },
        {
            name:" Rahul Mehta, Senior Developer",
            statement:`"Working with Rupam was an absolute pleasure. He not only delivers projects on time but also ensures they are optimized and user-friendly."`
        },
        {
            name:" Priya Singh, Hackathon Organizer",
            statement:`"Rupam’s dedication to learning and improving his skills is truly inspiring. His contributions during our hackathon were instrumental to our success."`
        },
        {
            name:"Karan Verma, Coding Competition Mentor",
            statement:`"I’ve seen Rupam take complex problems and break them into simple, effective solutions. His logical thinking and creativity set him apart from the rest."`
        },
        {
            name:"Sneha Patel, College Professor",
            statement:`"Whether it’s frontend design or backend logic, Rupam handles both with expertise. He’s a reliable and talented developer who always goes the extra mile."`
        },
    ]
  return (
    <div className="flex flex-col justify-center items-center pt-[30px] pb-[30px] w-[100%]">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        <h1 className="text-4xl font-bold mb-[40px]">Testimonials</h1>
      </GradientText>
      <div className="flex flex-row justify-evenly items-center gap-[10px] w-[100%]">
        {
            testi.map((item,index)=>{
                return <div key={index} className="flex flex-col gap-[20px] justify-start h-[300px] w-[400px] border border-purple-600 rounded-[15px] p-[15px]">
                   <h2 className="text-[20px] bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold">{item.name}</h2>
                   <p>{item.statement}</p>
                </div>
            })
        }
      </div>
    </div>
  );
};

export default Testimonial;
