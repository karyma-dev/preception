import React from 'react'


export const WebMapped = ( { id, option, answer, handleClick, activeId } ) => {

  return(
    <li>
      <p>{option}</p>
      <p>{answer}</p>
    </li> 
  )

}