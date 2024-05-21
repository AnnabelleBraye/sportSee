import React from 'react'
import ReactDOM from 'react-dom/client'
import Profile from './pages/Profile/index.tsx'
import './styles/main.css'
import Header from './components/Header/index.tsx'
import Footer from './components/Footer/index.tsx'
import { UserProvider } from './utils/providers/userProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <Header />
      <Profile />
      <Footer />
    </UserProvider>
  </React.StrictMode>,
)
