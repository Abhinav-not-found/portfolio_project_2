import React, { useState } from 'react';
import './Form.css';
import phone_icon from "./images/phone-call_icon.png"
import email_icon from "./images/email_icon.png"
import profile_photo from "./images/picofme (1).png"
export default function Form() {
  let [app1Visible, setApp1Visible] = useState(false);
  let [app2Visible, setApp2Visible] = useState(false);

  let handlePictureClick = () => {
    setApp1Visible(!app1Visible);
    setApp2Visible(!app2Visible);
  };
  let app1Click=()=>{
    alert('Phone number: 7736838110')
  }
  let app2Click=()=>{
    alert('My email: abhinavisgreat18@gmail.com')
  }
  return (
    <div>
      <div className='wrapper-form'>
        <h1 className='contactme'>Contact Me</h1>
        <form action='https://formspree.io/f/xzblezor' method='POST' className='form'>
          <div>
            
          <label>Name :</label>&nbsp;&nbsp;&nbsp;
          <input name='Name' className='input' placeholder='Ex: John Smith' required/><br/>
          </div>
          <div>

          <label>Email  &nbsp;:</label>&nbsp;&nbsp;&nbsp;
          <input name='Email' className='input' placeholder='Ex: johnsmith@gmail.com' required/><br/>
          </div>
          <div>

          <label>Message:</label><br/>
          <textarea name='Message' className='text-area' required></textarea>
          </div>
          <div>
            <button className='btn-send'>Send</button>
          </div>
          
        </form>
      </div>

      <div className='picture' onClick={handlePictureClick}><img className='profile_photo' src={profile_photo}/></div>

      {app1Visible && <div className='app-1' onClick={app2Click}><img className='email_icon' src={email_icon}/></div>}
      {app2Visible && <div className='app-2' onClick={app1Click}><img className='phone_icon' src={phone_icon}/></div>}

      <div className='background'></div>

      <p className='madeby'>Made with 💖 by</p>
      <p className='myname'>Abhinav kumar</p>
      <p className='designation'>-Frontend Web Developer</p>
    </div>
  );
}
