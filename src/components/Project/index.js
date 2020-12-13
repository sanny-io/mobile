import React from 'react';

export default function Project({ name = 'Project Name', description = 'Description goes here', imageUrl = 'https://via.placeholder.com/300x350' }) {
  return (
    <div className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={imageUrl} width="300px" alt={name} />
    </div>
  );
};