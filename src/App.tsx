import { useState } from 'react'
import ActionButton from './components/ActionButton/ActionButton'
import AddSubscription from './components/AddSubscriprion/AddSubscription'
import MainCard from './components/Card/MainCard'
import Topbar from './components/Topbar/Topbar'
import Subscriptions from './components/Subscriptions/Subscriptions'
import './App.css'

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='wrapper'>
        <Topbar />
        <MainCard />
      </div>
      <div>
        <Subscriptions />
      </div>
      <AddSubscription
        open={open}
        setOpen={setOpen}
      />
      <ActionButton
        // open={open}
        setOpen={setOpen}
      />
    </>
  )
}

export default App
