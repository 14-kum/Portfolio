import React, { useState } from 'react';
import './App.css';
import img from './assets/img.jpeg'; // Replace with your image path

const App = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleVisibility = (sectionId) => {
    setVisibleSection(visibleSection === sectionId ? null : sectionId);
  };

  return (
    <div className="relative h-screen bg-white p-4 flex flex-col items-center justify-center">
      {/* Portfolio Heading and Image */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-left hover:slide-in rainbow-text">
          Portfolio
        </h1>
        {/* Image Container */}
        <div className="relative w-full max-w-md p-4 bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={img}
            alt="Your Description"
            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:translate-y-0 hover:scale-100 slide-in"
          />
        </div>
      </div>

      {/* Top Left Heading */}
      <div className="absolute top-0 left-0 p-4">
        <h2
          className="cursor-pointer hover:rainbow-text"
          onClick={() => toggleVisibility('section1')}
        >
         Summary
        </h2>
        <p className={`transition-opacity ${visibleSection === 'section1' ? 'block' : 'hidden'}`}>
        A BSc IT student with a passion for programming and web technology,
        with proficiency in C/C++, JAVA, Python, HTML, CSS, and JavaScript 
        and seeking a Web Developer Intern position.
        </p>
      </div>

      {/* Top Right Heading */}
      <div className="absolute top-0 right-0 p-4">
        <h2
          className="cursor-pointer hover:text-blue-500"
          onClick={() => toggleVisibility('section2')}
        >
          Skills
        </h2>
        <p className={`transition-opacity ${visibleSection === 'section2' ? 'block' : 'hidden'}`}>
          proficient in ReactJs , ViteJs , TailwindCSS , WordPress , NodeJS.
        </p>
      </div>

      {/* Bottom Left Heading */}
      <div className="absolute bottom-0 left-0 p-4">
        <h2
          className="cursor-pointer hover:text-blue-500"
          onClick={() => toggleVisibility('section3')}
        >
          Heading 3
        </h2>
        <p className={`transition-opacity ${visibleSection === 'section3' ? 'block' : 'hidden'}`}>
          Paragraph content for Heading 3.
        </p>
      </div>

      {/* Bottom Right Heading */}
      <div className="absolute bottom-0 right-0 p-4  ">
        <h2
          className="cursor-pointer hover:text-blue-500"
          onClick={() => toggleVisibility('section4')}
        >
          Heading 4
        </h2>
        <p className={`transition-opacity ${visibleSection === 'section4' ? 'block' : 'hidden'}`}>
          Paragraph content for Heading 4.
        </p>
      </div>
    </div>
  );
};

export default App;
