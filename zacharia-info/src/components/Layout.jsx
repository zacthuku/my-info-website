// src/components/Layout.jsx
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navigation from './Navigation'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Navigation />
      <div className="layout-grid">
        <Sidebar />
        <main className="page-container">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
