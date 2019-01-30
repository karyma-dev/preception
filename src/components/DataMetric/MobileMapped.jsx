import React from 'react'



export const MobileMapped = ( { id, option, answer, handleClick, activeId } ) => {
  let answers = activeId === id ? answer : ""
  let classNames = activeId === id ? "btn btn-accordion" : "btn btn-accordion-inactive"
  return(
    <React.Fragment>
      <input className={classNames} onClick={handleClick} type="button" name={id} value={option} />
      <p>{answers}</p>
    </React.Fragment> 
  )

}