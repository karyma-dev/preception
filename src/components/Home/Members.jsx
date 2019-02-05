import React from 'react'

export const Members = ({ name, image, position }) => (
  <div>
  <img src={image} alt={name} />
  <span>
    <h4>{name}</h4>
    <p>{position}</p>
  </span>
</div>
)