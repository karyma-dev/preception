import React, { Component, Fragment } from 'react'

export default function Button(props) {
  return (
    <Fragment>
      <button className={props.buttonName} onClick={props.modalHandler}>
        {props.buttonText}
      </button>
    </Fragment>
  )
}
