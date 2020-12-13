import React from 'react';
import Project from '../Project';

import one from '../../1.png';
import two from '../../2.png';
import three from '../../3.png';
import four from '../../4.png';

const projects = [
  [undefined, undefined, one],
  [undefined, undefined, two],
  [undefined, undefined, three],
  [undefined, undefined, four],
];

export default function Projects() {
  return (
    <div className="projects grid grid-cols-1 md:grid-cols-2 gap-1 pl-32 -ml-32 bg-no-repeat">
      {
        projects.map(([name, description, imageUrl], index) => {
          return <Project name={name} description={description} imageUrl={imageUrl} key={index} />
        })
      }
    </div>
  );
};