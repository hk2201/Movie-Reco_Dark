import React from 'react'
import "./Header.css";
import Switch from 'react-js-switch';

const Header = (props) => {



  const dMode = {
    backgroundColor: props.darkmode ? "black" : "grey"
  }

  return (
    <div style={dMode} onClick={() => window.scroll(0, 0)} className='header'>
      MOVIE RECO
      <div className='toggle'>
        <Switch size={50} value={props.darkmode} onChange={props.darkMode} />
        <span style={{ paddingTop: 6, color: "white", fontSize: "1vw" }}>

          {props.darkmode ? "DARK MODE" : "LIGHT MODE"}
        </span>
      </div>

    </div>

  )
}

export default Header