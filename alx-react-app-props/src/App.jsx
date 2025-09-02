import { useState } from 'react'

import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import UserContext from './UserContext.js'

function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />

       <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>

      <Footer />

      <UserProfile 
      name="Alice" 
      age="25" 
      bio="Loves hiking and photography" />
    </div>

    </>
  )
}

export default App
