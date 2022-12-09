import React from 'react'
import "./Header.css";
import Switch from 'react-js-switch';

const Header = (props) => {



  const dMode = {
    backgroundColor: props.darkmode ? "black" : "grey",
    background: props.darkmode ? "linear-gradient(to bottom, grey, rgba(255, 122, 89,0))" : 
    "linear-gradient(to bottom, black, rgba(255, 122, 89,0))"
    // background: lineargradient(bottom)
  }

  return (
    <div style={dMode} onClick={() => window.scroll(0, 0)} className='header'>
      MOVIE RECO
      <div className='toggle'>
        <Switch size={35} value={props.darkmode} onChange={props.darkMode} />
        <div className='sizer'>

          {props.darkmode ? "DARK MODE" : "LIGHT MODE"}
        </div>
      </div>

    </div>

  )
}

export default Header