


import React, { useEffect } from 'react'
import "../dashboard/style.scss"
import { Button } from '@mui/material'
import RecentUsers from "../../modules/dashboard/recent/RecentUsers"

import { useNavigate } from 'react-router-dom'
import CustomButton from '../../components/button/CustomButton'
import AdminDashboard from '../dashboard/Cards/AdminDashboard'
import { useDispatch, useSelector } from 'react-redux'
const MyOrder = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()



  
  return (
    <div className='dashboard-container'>
      <div className='create-menu-container'>
        <p>
          My Orders
        </p>

      </div>


      <div className='carasol-container'>
        {/* <Carasol /> */}
      </div>
      <RecentUsers />

    </div>
  )
}

export default MyOrder