import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
      <Header />
      <div className="container max-w-7xl mx-auto">
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout