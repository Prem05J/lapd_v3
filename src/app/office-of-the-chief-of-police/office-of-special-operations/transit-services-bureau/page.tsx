'use client'   
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './transit.module.css'
import pdf from "../../../../../public/Icons/pdf-svg-icon.svg"
import LaunchIcon from '@mui/icons-material/Launch';
import global from "../../../global.module.css"
import { Container } from '@mui/material'

    const page = () => {
        return (
            <>
            <Box className={styles.bg}>
                <Container>
                <Grid container>
                    <Grid className={global.fadeInUp} item xs={11} sm={10} md={7} lg={7}>
                        <h1 className={styles.h1size}>Transit Services Bureau</h1>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <span className={styles.hline}></span><Link href="javascript:;" className={styles.insidelnk}>Deputy Chief Donald Graham</Link>
                        </Box>
                    </Grid>
                </Grid>
                </Container>
            </Box>

            <Container>
            <Box>
                <Grid container className={global.fadeInUp} sx={{ padding: '60px 0px' }}>

                    <Grid item xs={12} sm={6}>
                        <Box className={styles.linkbox}>
                            <h2>Notices</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />09-14-2023 TSB Notice expressive honking of the vehicle horn</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />5-11-23 AFDR&lsquo;s</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />12-21-22 Unlicensed Drivers</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />12-15-22 MADD</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />12-8-22 Completing Reports</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />6-29-22  Operation Firefly</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />3-2-22 Metrolink Operators</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />12-23-2021 DMV Admin Per Se Form</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />11-4-21 DMV Disabled Placards</Link></li>

                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />8-17-21 DRE exam</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />6-4-21 Community Online Reporting</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />6-3-21 Division of Records</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />6-2-21 Injury Classification</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />4-6-21 Reflective Vests</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />4-2-21 On-Call Phlebotomist</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />4-2-21 Street Takeover</Link></li>

                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />MARCH 2021 DMV </Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />FEBRUARY 25, 2021 DMV</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />FEBRUARY 2021 BWV</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />FEBRUARY 2, 2021 DMV </Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />JANUARY 2021 BWV</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />JANUARY 2021 ASSEMBLY BILL 2285</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />OCTOBER 2020 BWV</Link></li>

                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />04-29-2020_Vehicle Pursuits</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />04_07_2020_Reserve Motor Ofcrs</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />01_29_2020_TSB Motor Officers</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />DTC Notice 8-31-2018 Scooters</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />TSB Notice 10 4 18 Motor Ofcrs</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />TSB Notice 9-27-18 E-Learning</Link></li>


                            </ul>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            </Container>
            </>
        )
    }

    export default page