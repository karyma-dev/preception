import React from 'react'

import { teamMembers } from '../TeamMember'
import { Member } from './Member'

export default class TeamPage extends React.Component {

  render(){
    let members = teamMembers.map(( member, i )=><Member 
      key={i} 
      name={member.name} 
      image={member.image} 
      position={member.position}
      desc={member.desc}
    />)

    return(
      <React.Fragment>
        <h1 className='ourteam-header'>Team Members</h1>
        <div className="ourteam-members"> 
          {members}
        </div>
      </React.Fragment>
    )
  }
}