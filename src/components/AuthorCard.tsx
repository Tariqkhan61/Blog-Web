import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          src="../images/khan.jpg"
          alt="Author image"
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
        />

        <div>
          <h3 className="text-xl font-bold">Muhammad Tariq Mahboob</h3>
          <p className="text-blue-900">
            Avionics Engineer || Student at GIAIC || Learning ReactJs NextJs ||
          </p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        I am an Avionics Engineer with hands-on experience working on a diverse
        range of aircraft, including the F-16 Falcon, C-130 Hercules, Super
        Mushshak, and MI-171 Helicopter. Throughout my career, I have honed my
        expertise in cutting-edge aviation technologies and systems. Driven by a
        passion for continuous learning, I have embarked on a journey into the
        world of programming. Currently, I am exploring the capabilities of
        Next.js and have successfully completed various projects under the
        guidance of the esteemed teachers at the Governor Sindh IT Initiative
        Center (GIAIC). This blend of engineering expertise and programming
        skills fuels my commitment to innovation and professional growth.
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-orange-700 transition duration-300"
        >
          Twitter
        </a>

        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-orange-700 transition duration-300"
        >
          LinkedIn
        </a>

        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-orange-700 transition duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
