import React from 'react';
import GithubIcon from '../assets/icon-github.svg';
import FrontMentorIcon from '../assets/icon-frontend-mentor.svg';
import LinkedInIcon from '../assets/icon-linkedin.svg';
import TwitterIcon from '../assets/icon-twitter.svg';



function Navbar() {

  return (
    <div className ='flex justify-between items-center w-full h-20 pl-64 text-white bg-transparent absolute'>
      <div className= ''>
        <h1 className="text-2xl font-Space Mono">adamKeys</h1>
      </div>

  <div className = ''>
  {/* <ul className = 'flex items-center w-full mr-2 '>   */}
  <ul className = 'flex justify-between  mr-64'>

  <li className= 'p-4 cursor-pointer hover:scale-105 duration-200'>
    <img src= {GithubIcon}  alt="logo"/>
  </li>

  <li className= 'p-4 cursor-pointer hover:scale-105 duration-200'>
    <img src= {FrontMentorIcon}  alt="logo"/>
  </li>

  <li className= 'p-4 cursor-pointer hover:scale-105 duration-200'>
    <img src= {LinkedInIcon}  alt="logo"/>
  </li>

  <li className= 'p-4 cursor-pointer hover:scale-105 duration-200'>
    <img src= {TwitterIcon}  alt="logo"/>
  </li>
  </ul>
</div>
    </div>
  )
}

export default Navbar