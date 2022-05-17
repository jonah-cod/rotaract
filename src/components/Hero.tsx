import React from 'react'
import { Typography } from '@mui/material'
import Typing from './typed'

const Hero = () => {
  return (<>
    <div className='hero'>
      
    </div>
    <div className="hero__container">
        <Typography variant='h4' >
          The Lit Rotaract Club of Nyeri
        </Typography>
        <div className="fourway">
          <Typography variant='h6' color={'#15448a'} sx={{fontWeight: '400', fontFamily: 'inherit', fontSize: 35}}>
              Four way Test
          </Typography>

          <Typing/>
        </div>
      </div>
      </>
  )
}

export default Hero