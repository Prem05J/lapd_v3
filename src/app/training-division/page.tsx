'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import trainingStyle from "./training.module.css"
import Grid from '@mui/material/Grid'
import global from "../global.module.css"
import { Container } from '@mui/material'

const Training = () => {
  const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <div>
      <Box sx={{ display: 'flex', padding: "30px 10px 30px 5px", flexDirection: 'column', background: '#0f212b' }}>
        
        <Container>
       <Typography className={global.fadeInUp} sx={{ color: '#fff', fontSize: mobile ? '37px' : '62px', fontWeight: '700' }}>
       Training Division
       </Typography>
       <Link  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='https://www.joinlapd.com/'>
        <Box className={global.fadeInUp} sx={{display:"flex",gap:"10px",alignItems:"center"}}>
       <span style={{ height: "2px", width: "20px", opacity: ".9", backgroundColor: "#fff" }}></span>
          <Typography sx={{  color: "#7DDFFF", fontSize: "15px",marginTop:"5px", textTransform: "none", '&:hover': { color: "#fff" } }}>Commanding Officer - Captain Christopher M. Zine</Typography>
          </Box>
        </Link>
        </Container>
          </Box>

          <Container>
          <Box className={global.fadeInUp} sx={{display:"flex",flexDirection:"column",paddingTop:"60px"}}>
          <Grid container rowSpacing={5}>
          <Grid item xs={12} sm={12} md={12} lg={7} xl={8}>
          <Typography sx={{fontSize:"18px"}}>
          The mission of the Los Angeles Police Department’s (LAPD) Training Division is to provide state of the art, meaningful, realistic, and relevant training to in-service and recruit officers in order to 
          prepare them for field duty. Training Division has five major sections:
        </Typography>

        
          </Grid>
        
      
          </Grid>

           </Box>

          <Box className={global.fadeInUp} sx={{marginTop:"40px",marginLeft:"0px"}}>
          <ul className={trainingStyle.listBox}>
            <li className={trainingStyle.list}>
              <Box className={trainingStyle.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Basic Course Training Section</Typography>
              </li>
              <li className={trainingStyle.list}>
              <Box className={trainingStyle.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Firearms Training Section</Typography>
              </li>
              <li className={trainingStyle.list}>
              <Box className={trainingStyle.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Field Operations Training Section</Typography>
              </li>
              <li className={trainingStyle.list}>
              <Box className={trainingStyle.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>In-Service Training Section</Typography>
              </li>
              <li className={trainingStyle.list}>
              <Box className={trainingStyle.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Support Section</Typography>
              </li>
          </ul>
          </Box>      
          </Container>
    </div>
  )
}

export default Training