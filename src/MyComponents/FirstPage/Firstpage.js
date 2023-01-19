import React from 'react'
import './Navbar.css';
import { Navbar } from '../FirstPage/Navbar';
import { Content } from '../FirstPage/Content';
import { Searchbar } from './Searchbar';


    
export const Firstpage =() => {
  return (
    <>
        <div className='content'>
            <Navbar/>
            <Content/>
            <Searchbar/>
        </div>
    
    </>
  )
}
