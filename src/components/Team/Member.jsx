import React from 'react'


export const Member = ({ name, desc, image, position, links }) => (
  <div className="Members">
    <div className="Members-image">
      <img src={image} alt={name} />
    </div>
    <div className="Members-content">
      <h3>{name}</h3>
      <p className="Members-content-position">{position}</p>
      <div className="Members-content-icons">
        <a href={links.linkedin} rel="noopener noreferrer" target="_blank">
          <i className={links.linkedin ? "fab fa-linkedin Members-content-icons-linkedin": ""} />
        </a>
        <a href={links.amazon} rel="noopener noreferrer" target="_blank">
          <i className={links.amazon ? "fab fa-amazon Members-content-icons-amazon": ""} />
        </a>
        <a href={links.medium} rel="noopener noreferrer" target="_blank">
          <i className={links.medium ? "fab fa-medium-m Members-content-icons-mediu": ""} />
        </a>
      </div>
      <p className="Members-content-description">{desc}</p>
    </div>

  </div>
)