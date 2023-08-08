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
        <form>
          <label>Name:</label><br/>
          <input placeholder='Ex: John Smith'/>
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
