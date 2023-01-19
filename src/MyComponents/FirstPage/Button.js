import React from 'react';
import './Button.css';

export const Button = (props) => {
  return (
    <>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <select className="english-btn btn btn-outline-light me-md-2" type="button">
          <option className='btn btn-secondary'>{props.text1}</option>
          <option  className='btn btn-secondary'>{props.text2}</option>
        </select>
        <button className="btn btn-danger" type="button">{props.text}</button>
      </div>
    </>
  )
}