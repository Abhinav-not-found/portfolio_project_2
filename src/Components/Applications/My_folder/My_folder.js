import React from 'react'
import pdf_icon from './Images/pdf_icon.png'
import './My_folder.css'
export default function My_folder() {
  return (
    <div className='folder-wrapper'>
        <div className="folder-left"></div>
        <div className="folder-right">
          <div className="folder-elements">
            <img src={pdf_icon} alt="" />
            <p className='f-name'>CV</p>
            <p className='f-file-type'>Microsoft Edge PD...</p>
            <p className='f-size'>121KB</p>
          </div>
          <div className="folder-elements">
            <img src={pdf_icon} alt="" />
            <p className='f-name'>name</p>
            <p className='f-file-type'>file-type</p>
            <p className='f-size'>size</p>
          </div>
          <div className="folder-elements">
            <img src={pdf_icon} alt="" />
            <p className='f-name'>name</p>
            <p className='f-file-type'>file-type</p>
            <p className='f-size'>size</p>
          </div>
          <div className="folder-elements">
            <img src={pdf_icon} alt="" />
            <p className='f-name'>name</p>
            <p className='f-file-type'>file-type</p>
            <p className='f-size'>size</p>
          </div>
          <div className="folder-elements">
            <img src={pdf_icon} alt="" />
            <p className='f-name'>name</p>
            <p className='f-file-type'>file-type</p>
            <p className='f-size'>size</p>
          </div>
        </div>
    </div>
  )
}
