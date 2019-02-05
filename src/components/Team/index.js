import React from 'react'

import { teamMembers } from '../TeamMember'
import { Member } from './Member'

export default class TeamPage extends React.Component {

  render(){
    let members = teamMembers.map((member,i)=><Member 
      key={i} 
      name={member.name} 
      image={member.image} 
      position={member.position}
      desc={member.desc}
    />)

    return(
      <React.Fragment>
        <h1>Team Members</h1>
        {members}
      </React.Fragment>
    )
  }
}