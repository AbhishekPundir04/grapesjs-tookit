import React from 'react'
import "./style.scss"
import { Button } from '@mui/material'
import CustomButton from '../../components/button/CustomButton'
import AdminDashboard from './Cards/AdminDashboard'
import { useNavigate } from 'react-router-dom'
import Carasol from '../../components/carousel/Carousel'
const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div className='dashboard-container'>
      <div className='create-menu-container'>
        <p>
          Welcome
        </p>
        <div className='menu-button'>
        <CustomButton onClick={()=>navigate("/menu-editor")}>
          Create a Menu
        </CustomButton>
        </div>
      </div>
      <div className='overview-heading'>
        Overview
      </div>
      <AdminDashboard/>

      <p className='overview-heading'>Browse through our templates</p>
      <div className='carasol-container'>
      {/* <Carasol /> */}
      </div>
    </div>
  )
}

export default Dashboard