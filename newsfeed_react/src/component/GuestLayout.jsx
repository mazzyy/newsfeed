import React from 'react'
import { Outlet } from 'react-router-dom'

function GuestLayout() {
  return (
    <div>
        guest page

         //Outliet calls for child page
          <Outlet/>

    </div>

  )
}

export default GuestLayout
