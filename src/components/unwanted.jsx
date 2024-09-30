import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleVisibility = (sectionId) => {
    setVisibleSection(visibleSection === sectionId ? null : sectionId);
  };

  return (
    <div className="relative h-screen">
      {/* Top Left Heading */}
      <div className="absolute top-0 left-0 p-10">
        <h2
          className="cursor-pointer hover:text-blue-500"
          onClick={() => toggleVisibility('section1')}
        >
          Heading 1
        </h2>
        <p className={`transition-opacity ${visibleSection === 'section1' ? 'block' : 'hidden'}`}>
          Paragraph content for Heading 1.
        </p>
      </div>

      {/* Top Right Heading */}
      <div className="absolute top-0 right-0 p-4">
        <h2
          className="cursor-pointer hover:text-blue-500"
          onClick={() => toggleVisibility('section2')}
        >
          Heading 2
        </h2>
        <p className={`transition-opacity ${visibleSection === 'section2' ? 'block' : 'hidden'}`}>
          Paragraph content for Heading 2.
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
      <div className="absolute bottom-0 right-0 p-4">
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
