import React from 'react'
import profilePhoto from '../assets/photo/profile-4.png'

function Profile() {
  return (
    <div className='card my-2 col-12'>
        <div className='card-body row'>
           <div className='col-lg-4'>
               <div className='row mx-1'>
                   <div className='card my-2 p-0'>
                     <div className='card-body p-1 text-center'>
                        <img className='img-fluid rounded' src={profilePhoto} alt='profile-photo' />
                     </div>
                   </div>
               </div>
           </div>
           <div className='col-lg-8'>
                <div className='row mx-1'>
                    <div className='card my-2 col-lg-4'>
                        <div className='card-body'></div>
                    </div>
                    <div className='card my-2 col-lg-4 offset-lg-4'>
                        <div className='card-body'></div>
                    </div>
                    <div className='card my-2 col-lg-12'>
                        <div className='card-body'></div>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Profile