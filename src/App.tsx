import { useState } from 'react'
import ActionButton from './components/ActionButton/ActionButton'
import AddSubscription from './components/AddSubscriprion/AddSubscription'
import ViewSubscription from './components/ViewSubscription/ViewSubscription'
import MainCard from './components/Card/MainCard'
import Topbar from './components/Topbar/Topbar'
import Subscriptions from './components/Subscriptions/Subscriptions'
import './App.css'

function App() {
  const [open, setOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  // console.log(import.meta.env.VITE_FIREBASE_API_KEY,'ebbbbbbbbb') 
  return (
    <>
      <div className='wrapper'>
        <Topbar />
        <MainCard />
      </div>
      <div>
        <Subscriptions 
        // viewOpen={viewOpen}
        setViewOpen={setViewOpen}
        />
      </div>
      <ViewSubscription
        viewOpen={viewOpen}
        setViewOpen={setViewOpen}
      />
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
