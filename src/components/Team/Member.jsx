import React from 'react'

export const Member = ({ name, desc, image, position }) => (
  <div>
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{position}</p>
    <p>{desc}</p>
  </div>
)