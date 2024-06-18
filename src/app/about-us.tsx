import React from 'react';
import LogoImage from '../assets/image/logo.webp'

const AboutUs = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO' },
    { name: 'Jane Smith', role: 'CTO' },
    
  ];  

  return (
    <div>
      <nav>
        <div>
          <img src={LogoImage} alt="Logo" />
        </div>
        <div>
          <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Servises</li>
          <li>FAQs</li>
          <li>Blogs</li></ul>
        </div>
      </nav>

      <h2>About RoboGence</h2>
      <p>We enable customers to expand their online presence by leveraging our top-tier technology and services.
         Our aim is to assist businesses in listing their products on popular online marketplaces like Google Shopping, 
         Amazon, and Facebook, making it easier for them to reach a broader audience and maximize their online sales potential.</p>
     

         <h2>Our Objective</h2>
         <p>Robogence was founded with the vision of developing the foremost feed platform in the industry. 
          From the outset, we have held the belief that optimized feeds yield superior results.
           Our founders encountered numerous challenges with conventional feed platforms while overseeing feeds at prominent advertising agencies. 
           Our initial focus was on addressing our own needs, and it soon became evident that other advertising agencies and online retailers faced identical challenges.</p>
      </div>     
  )
}
<div>
  <h6>Meet our Team</h6>
  <h5>Our Team</h5>
</div>
       
       
