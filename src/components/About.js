import React from "react";
import img from '../shubham.png'

const About = () => {
  return (
    <div>
      <div className='about-container'>
        <div>
        <h3 className='about-head'>About me</h3>
        <p className='about-details'>Hi there, my name is Shubham Chopade. A passionate teacher and a dedicated coder. I love simplying things in order to teach the community I am building on <a className='link' href='https://instagram.com/tech.sapien' target='_blank'>Instagram</a>. </p>
        </div>
        <div className='about-image-container'><img src={img}></img></div>
      </div>
      
    </div>
  );
};

export default About;
