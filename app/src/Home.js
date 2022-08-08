import React from 'react';
import Zoom from 'react-reveal/Zoom';
import web from '../src/images/2.jpg';
import Common from './Common';
export default function Home() {
  return (
    <><Zoom>
     <Common name="welcome to Home page" imgsrc={web} visit='/servicess' btname="Started Now"/></Zoom>
    </>
  );
}
