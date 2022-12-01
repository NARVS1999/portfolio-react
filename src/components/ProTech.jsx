import React from 'react'
import Profile from './Profile'
import Technology from './Technology'

function ProTech() {
  return (
    <div className='row'>
        <div className='col-md-6 d-flex col-lg-12'>
            <Profile />
        </div>
        <div className='col-md-6 d-flex col-lg-12'>
            <Technology />
        </div>
    </div>
  )
}

export default ProTech