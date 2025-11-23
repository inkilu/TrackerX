import Avatar from '@mui/material/Avatar';
import type { User } from "firebase/auth";
type TopBarProps = {
  user: User,
  setProfileOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Topbar = ({ user, setProfileOpen }: TopBarProps) => {
  console.log(user, 'user from tpbar')
  return (
    <div className='topbar'
      style={{ position: 'fixed', boxSizing: 'border-box', width: '100%', top: 0, left: 0, right: 0, padding: '12px', zIndex: 1000, background: 'transparent' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'end', fontWeight: 'bold', fontSize: '1.7rem' }}>
          <span style={{ color: 'white' }}>
            TrackerX
          </span>
        </div>
        <div>
          <Avatar src={user?.photoURL || undefined}
            onClick={() => { setProfileOpen(true) }}
          />
          {/* <Avatar sx={{ backgroundColor: '#65bfc26e', color: 'white' }}>I</Avatar> */}
        </div>
      </div>
    </div>
  )
}

export default Topbar