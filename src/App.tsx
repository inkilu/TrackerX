import { useState, useEffect, Suspense, useMemo } from 'react'
import ActionButton from './components/ActionButton/ActionButton'
import AddSubscription from './components/AddSubscriprion/AddSubscription'
import ViewSubscription from './components/ViewSubscription/ViewSubscription'
import MainCard from './components/Card/MainCard'
import Topbar from './components/Topbar/Topbar'
import Subscriptions from './components/Subscriptions/Subscriptions'
import SignIn from './components/SignIn/SignIn'
import Profile from './components/Profile/Profile'
import { signInWithPopup, signOut } from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth, googleProvider } from './utils/firebase';
import './App.css'
// API Calls
import { getAllSubscriptions } from '../src/services/trackerx.services'

function App() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [loading, setLoading] = useState(false)

  // APIs Promises

  const getAllSubscriptionsPromise = useMemo(() => {
    return user?.getIdToken().then(token => getAllSubscriptions(token))
  }, [user])

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    setLoading(true)
    signInWithPopup(auth, googleProvider).catch((err) => console.error(err));
    setLoading(false)
  };

  if (loading) {
    return (
      <div style={{ width: 100, height: 100 }}>
        Loading...
      </div>
    );
  }


  if (!user) {
    return (
      <SignIn
        handleGoogleLogin={handleGoogleLogin}
        loading={loading}
      />
    );
  }

  const handleSignOut = () => {
    signOut(auth).catch(err => console.log(err))
  }

  return (
    <>
      <div className='wrapper'>
        <Topbar
          user={user}
          setProfileOpen={setProfileOpen}
        />
        <MainCard />
      </div>
      <Suspense fallback={'Loaffffff'}>
        <div>
          <Subscriptions
            getAllSubscriptionsPromise={getAllSubscriptionsPromise}
            // viewOpen={viewOpen}
            setViewOpen={setViewOpen}
          />
        </div>
      </Suspense>
      <ViewSubscription
        viewOpen={viewOpen}
        setViewOpen={setViewOpen}
      />
      <AddSubscription
        open={open}
        setOpen={setOpen}
      />
      <Profile
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
        handleSignOut={handleSignOut}
        user={user}
      />
      <ActionButton
        // open={open}
        setOpen={setOpen}
      />
    </>
  )
}

export default App
