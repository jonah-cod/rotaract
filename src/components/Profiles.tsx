import { Box, Grid } from '@mui/material'
import React from 'react'
import Profile from './Profile'

const Profiles = () => {
  return (
    <Grid container sx={{ flexGrow: 1, mx: 2}} spacing={2} >
        {[1,2,3,4,5,6,7,8,9].map(element => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={element}><Profile/></Grid>
        ))}
    </Grid>
  )
}

export default Profiles