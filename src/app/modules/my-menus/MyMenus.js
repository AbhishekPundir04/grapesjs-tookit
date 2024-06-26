import React from 'react'
import "./style.scss"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../../components/button/CustomButton'
import AdminDashboard from '../dashboard/Cards/AdminDashboard'
const MyMenus = () => {
  const navigate = useNavigate()
  return (
    <div className='dashboard-container'>
      <div className='create-menu-container'>
        <p>
        My Menus
        </p>
        <div className='menu-button'>
        <CustomButton onClick={()=>navigate("/menu-editor")}>
          Create a Menu
        </CustomButton>
        </div>
      </div>
      <div className='overview-heading'>
      Published Menus
      </div>
      <AdminDashboard/>

      <p className='overview-heading'>Saved Menus</p>
      <div className='carasol-container'>
      {/* <Carasol /> */}
      </div>
    </div>
  )
}

export default MyMenus