import React from 'react';
import './Navbar.css';
import './Button.css';
import { Button } from './Button';
import logo from '../Images/1600px-Logonetflix.png';

export const Navbar = () => {
  return (
    <>
    <div className='navbar-header'>
      <img className='navbar-logo' src={logo} alt="logo" />
      <div className='navbar-button'>
      <Button className='btn btn-outline-light main-button' text='Sign In' text2='हिन्दी' text1='English'/>
      </div>
    </div>
    </>
  )
}