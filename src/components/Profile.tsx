import { Card, CardContent, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import { Box,  } from '@mui/system'
import React from 'react'
import photo from "../DSC_8494.jpg"

function Profile() {
  return (
    <Card sx={{minWidth: 200}} >
        <CardMedia
        component="img"
        image={photo}
        sx={{ height: 200}}
        alt="leader"
      />
      <CardContent sx={{border: "1px solid #a18b60", m: 2, mb:1, textAlign: "left"}}>
        <Typography variant='h5' sx={{fontWeight: 600, fontSize: 14}}>
            Leader Name
        </Typography>
        <Typography variant='body2' >
            Title
        </Typography>
      </CardContent>
      

    </Card>
  )
}

export default Profile