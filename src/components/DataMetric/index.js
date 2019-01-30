import React from 'react'
import Mobile from './Mobile'
import { Web } from './Web'

export default function DataMetric() {

  if (window.innerWidth < 1140){
    return <Mobile />
  }else {
    return <Web />
  }

}
