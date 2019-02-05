import React from 'react'

export const Member = ({ name, desc, image, position }) => (
  <div className="Members">
    <div className="Members-image">
      <img src={image} alt={name} />
    </div>
    <div className="Members-content">
      <h3>{name}</h3>
      <p>{position}</p>
      <p className="Members-content-description">{desc}</p>
    </div>
  </div>
)