import './App.css'
import ActionButton from './components/ActionButton/ActionButton'
import MainCard from './components/Card/MainCard'
import Topbar from './components/Topbar/Topbar'

function App() {

  return (
    <>
      <div className='wrapper'>
        <Topbar />
        <MainCard />
      </div>
      <div>
---
      </div>
      <ActionButton />
    </>
  )
}

export default App
