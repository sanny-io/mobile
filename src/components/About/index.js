import React from 'react';
import Icon from '../Icon';
import { about as aboutData } from '../../data.json';

export default function About() {
  return (
    <div className="pb-10 lg:pb-32 flex flex-col lg:flex-row sm:w-full z-30 relative">
      <div className="w-full pb-10 sm:pb-0">
        <h1 className="text-3xl pb-5">John Doe<br /> iOS developer</h1>
        <p className="text-gray-600 sm:pb-10">
          I am an iOS developer with a desire for creating amazing user interfaces and writing readable, maintainable code.
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <ul className="grid grid-flow-col gap-6 text-gray-500">
          {aboutData.social.map(([socialType, socialLink], index) => {
            return <Icon type={socialType} link={socialLink} key={index} />
          })}
        </ul>
      </div>
    </div>
  );
};