import React from "react";
import BlogCard from "../components/BlogCard";
import { title } from "process";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "Pakistan Air Force",
      description: "The General Dynamics F-16 Fighting Falcon is a versatile, multirole fighter jet renowned for its agility, advanced avionics, and combat effectiveness, serving air forces worldwide with superior performance and reliability.",
      date: "12-20-2024",
      imageUrl: "../images/f3-.png",
      
    },

    {
      id: "2",
      title: "TTU-205D/E Series",
      description: " The TTU-205D Test Set is a specialized tool used for testing and calibrating aircraft pitot-static systems. It ensures accurate airspeed, altitude, and pressure measurements, vital for flight safety. It's widely used in military and civilian aviation for performance checks.",
      date: "12-20-2024",
      imageUrl: "../images/TTU-205D.png",
    },

    {
      id: "3",
      title: "Inspection and Maintenance ",
      description: "F-16 cockpit instrument calibration ensures accurate flight data, including altitude, speed, and navigation. Regular calibration of instruments like the altimeter and radar is crucial for optimal performance, enhancing pilot safety and operational efficiency during complex missions and high-speed maneuvers.",
      date: "12-20-2024",
      imageUrl: "../images/AE.png",
    },

    {
      id: "4",
      title: "Muhammad Mahmood Alam(Sqdn Leader)",
      description: "Squadron Leader MM Alam, a legendary hero of the 1965 Indo-Pak war, etched his name in history by shooting down five Indian Air Force aircraft in under a minute, a record unparalleled worldwide. Known as the the Little Dragon his valor and unparalleled skill symbolize Pakistan Air Force's resilience and excellence.",
      date: "12-20-2024",
      imageUrl: "../images/alam4.png",
      
    },

    
    {
      id: "5",
      title: "First Women Pilot of PAF",
      description: "Aysha Farooq, Pakistan's first female fighter pilot, shattered stereotypes and inspired a nation. Joining the elite ranks of the Pakistan Air Force, she demonstrated resilience, skill, and courage. Her groundbreaking achievement paves the way for women in aviation, symbolizing empowerment and redefining possibilities for generations to come.",
      date: "12-20-2024",
      imageUrl: "../images/wom-pilot.png",
      
    },
    {
      id: "6",
      title: "The Art of F-16 Hangar Maintenance",
      description: "F-16 hangar maintenance is a meticulous process ensuring peak aircraft performance. From structural inspections to avionics calibration, every detail is perfected. Skilled technicians uphold stringent standards, addressing wear, enhancing systems, and guaranteeing safety. This critical upkeep empowers the F-16 to dominate the skies with unmatched reliability and operational excellence.",
      date: "12-20-2024",
      imageUrl: "../images/F-16 maint.png",
      
    },


    {
      id: "7",
      title: "Sir Zia Khan: An Innovative Leader in Tech Education",
      description: "Sir Zia Khan, director of Governor Sindh’s IT initiatives, is the driving force behind Panaverse. Passionate about empowering youth, he fosters innovation through AI, Web3, and metaverse training. His leadership inspires transformation, equipping students with future-ready skills and revolutionizing Pakistan’s tech landscape with visionary educational programs.",
      date: "12-20-2024",
      imageUrl: "../images/sir zia.png",
      
    },

    {
      id: "8",
      title: "The Visionary CEO of Tesla",
      description: "Elon Musk, Tesla’s trailblazing CEO, redefines innovation in electric vehicles and clean energy. His relentless pursuit of sustainable solutions has revolutionized transportation with cutting-edge EVs and groundbreaking technologies. A true visionary, Musk inspires global change, pushing boundaries to create a greener, smarter, and more interconnected future for humanity.",
      date: "12-20-2024",
      imageUrl: "../images/ELON MUSK.png",
      
    },

    {
      id: "9",
      title: "The Trailblazer of E-Commerce Revolution",
      description: "Jack Ma, founder of Alibaba, transformed global trade with his visionary approach to e-commerce and digital payments. Rising from humble beginnings, he empowered small businesses and reshaped economies with innovative platforms like Taobao and Alipay. A global icon, Ma’s legacy inspires entrepreneurship and fosters technological advancement worldwide.",
      date: "12-20-2024",
      imageUrl: "../images/jackma.png",
      
    },

    {
      id: "10",
      title: "Mark Zuckerberg's Social Revolution",
      description: "Mark Zuckerberg co-founded Facebook in 2004 while studying at Harvard University. As the CEO, he transformed social networking, impacting global communication. Known for innovative features and acquisitions (like Instagram and WhatsApp), Zuckerberg advocates for connectivity, digital rights, and privacy, significantly influencing the tech landscape and social media evolution.",
      date: "12-20-2024",
      imageUrl: "../images/Mark Z.png",
      
    },

    {
      id: "11",
      title: "Father of the Web",
      description: "Tim Berners-Lee is the inventor of the World Wide Web, created in 1989 while at CERN. His vision was to enhance information sharing globally. As a professor and director of the World Wide Web Consortium (W3C), he promotes web standards and open access, advocating for a free and equitable internet.",
      date: "12-20-2024",
      imageUrl: "../images/TBL.png",
      
    },

    {
      id: "12",
      title: "The Visionary Behind the Algorithm",
      description: "Larry Page co-founded Google in 1998 with Sergey Brin, revolutionizing internet search technology. As CEO of Alphabet Inc., he has driven innovation in areas like artificial intelligence and autonomous vehicles. Page is known for his focus on technological advancement, sustainability, and fostering creative solutions to global challenges through technology.",
      date: "12-20-2024",
      imageUrl: "../images/Larry Page.png",
      
    },

    {
      id: "13",
      title: "TAILWIND CSS",
      description: "Tailwind CSS is a utility-first CSS framework that simplifies styling by providing pre-defined classes. It allows developers to create responsive designs quickly without writing custom CSS. Tailwind’s modular approach enables efficient, consistent, and customizable UI development.",
      date: "12-20-2024",
      imageUrl: "../images/GS-8.png",
      
    },

    {
      id: "14",
      title: "Tailblock Components",
      description: "Tailblock components are pre-built UI elements designed with Tailwind CSS, offering a collection of customizable and responsive blocks for building websites. These components simplify development by providing ready-to-use sections, including headers, footers, forms, and more, speeding up design workflows.",
      date: "12-20-2024",
      imageUrl: "../images/GS-9.png",
      
    },

    {
      id: "15",
      title: "Authentication with CLERK",
      description: "Clerk is a powerful user authentication and management solution for Next.js applications. It streamlines the process of user login, registration, and session management with minimal configuration, offering robust security features and a seamless experience for developers and users alike.",
      date: "12-20-2024",
      imageUrl: "../images/GS-10.png",
      
    },

    {
      id: "16",
      title: "Headless CMS",
      description: "A Headless CMS separates content management from presentation, providing flexibility for Next.js developers. It delivers content via APIs, enabling seamless integration with any frontend framework. This approach enhances scalability, content distribution, and the overall development experience across platforms.",
      date: "12-20-2024",
      imageUrl: "../images/GS-11.png",
      
    },



    

  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of Aerospace Avionics and AI & Technology
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
