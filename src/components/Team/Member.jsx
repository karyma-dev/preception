import React from 'react'


export const Member = ({ name, desc, image, position }) => (
  <div className="Members">
    <div className="Members-image">
      <img src={image} alt={name} />
    </div>
    <div className="Members-content">
      <h3>{name}</h3>
      <p className="Members-content-position">{position}</p>
      <div className="Members-content-icons">
        <i class="fas fa-blog Members-content-icons-blog" />
        <i class="fab fa-linkedin Members-content-icons-linkedin" />
        <i class="fab fa-twitter-square Members-content-icons-twitter" />
      </div>
      <p className="Members-content-description">{desc}</p>
    </div>

  </div>
)