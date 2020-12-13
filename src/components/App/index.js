import React from 'react';
import About from '../About';
import Projects from '../Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-darker text-white relative overflow-hidden">
      <div className="container mx-auto pt-12 p-5 pb-0">
        <About />
        <Projects />
      </div>
    </div>
  );
};