import { Grid } from '@mui/material';
import React from 'react'
import CardBox from './CardBox';
import "./style.scss"

const AdminDashboard = () => {
  return (
    <div className=''>

      <div className='card-wrapper'>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <div className='main-card'>
              <div className='title-heading'>{"Title"}</div>
              <div className='total_number'>{"25"}</div>
            </div>
          </Grid>

        </Grid>
      </div>
    </div>
  )
}

export default AdminDashboard;