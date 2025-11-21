import React from 'react'
import Logo from '../../assets/logo.svg'
import Avatar from '@mui/material/Avatar';
const Topbar = () => {
  return (
    <div style={{position:'fixed',boxSizing:'border-box',width:'100%',top:0,left:0,right:0,backgroundColor:'white',padding:'21px',boxShadow:'0 2px 4px rgba(0,0,0,0.1)',zIndex:1000}}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'end', fontWeight: 'bold', fontSize: '2rem' }}>
          <img src={Logo} className='main-header-logo' />
          <span>
            TrackerX
          </span>
        </div>
        <div>
          <Avatar sx={{ backgroundColor: 'purple' }}>INK</Avatar>
        </div>
      </div>
    </div>
  )
}

export default Topbar