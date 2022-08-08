import React from 'react';
import web from '../src/images/3.png';
import Common from './Common';
import Fade from 'react-reveal/Fade';
export default function About() {
  return (
    <>
     <Fade left>
 <Common name="welcome to about page" imgsrc={web} visit='/contact' btname="Contact Now" />
  </Fade>
    </>
  )
}
