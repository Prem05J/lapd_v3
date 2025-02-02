"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Typography,
  Grid,
  TextField,
  IconButton,
  Divider,
  Button,
  Container,
} from "@mui/material";
import homeStyle from "../styles/home.module.css";
import Quicklinks from "@/component/Home/Quicklinks";
import BasicTabs from "@/component/Home/Tabmenu";
import TeamImage from "../../public/Images/Home/image-jointheteam.jpg";
import Axiom from "../../public/Images/Home/AXIOM-740x400-B.jpg";
import Emergency from "../../public/Icons/emergency.svg";
import playIcon from "../../public/Icons/play-1001-svgrepo-com.svg";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "swiper/css";
import "swiper/css/pagination";
import SwiperImage from "@/component/Home/Swiper";
import global from "./global.module.css";
import { createClient } from "@/prismicio";
import { Anybody } from "next/font/google";
import type * as prismic from "@prismicio/client";
import {
  AllDocumentTypes,
  SettingsDocumentDataUpdatesFromLapdItem,
  SettingsDocumentDataContactDetailsItem,
} from "../../prismicio-types";
import { it } from "node:test";

const Home = () => {
  const [pageData, setPageData] = useState<AllDocumentTypes | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      const page = await client.getSingle("settings");
      setPageData(page);
    };
    fetchData();
  }, []);
  const [sections, setSections] = useState<
    {
      update_title_1: string;
      update_title_2: string;
      update_image_1: string;
      update_image_2: string;
      update_description_1: string;
      update_description_2: string;
    }[]
  >([]);
  const [contacts, setcontacts] = useState<
    {
      section_1: string;
      section_1_details: string;
      section_2: string;
      section_2_details: string;
      section_3: string;
      section_3_details: string;
    }[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      const page = await client.getSingle("settings");
      setPageData(page);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (pageData) {
      const quickLinks = pageData.data
        .updates_from_lapd as SettingsDocumentDataUpdatesFromLapdItem[];
      const contacts = pageData.data
        .contact_details as SettingsDocumentDataContactDetailsItem[];
      const sectionsData = quickLinks.map((item) => ({
        update_title_1: item.update_title_1 as string,
        update_title_2: item.update_title_2 as string,
        update_description_1: item.update_description_1 as string,
        update_description_2: item.update_description_2 as string,
        update_image_1: item.update_image_1.url as string,
        update_image_2: item.update_image_2.url as string,
      }));

      const contactsData = contacts.map((item) => ({
        section_1: item.section_1 as string,
        section_1_details: item.section_1_details as string,
        section_2: item.section_2 as string,
        section_2_details: item.section_2_details as string,
        section_3: item.section_3 as string,
        section_3_details: item.section_3_details as string,
      }));
      setcontacts(contactsData);
      setSections(sectionsData);
      sections.map((item) => console.log(item.update_image_1));
    }
  }, [pageData]);
  return (
    <div className={homeStyle.home}>
      <Container>
        <Box sx={{ marginTop: "70px" }}>
          <Typography
            className={`${homeStyle.italicTypo1} ${global.fadeInUp}`}
            sx={{
              fontSize: "22px",
              fontStyle: "italic",
              fontWeight: "400",
              lineHeight: "1.27",
              letterSpacing: "-.25px",
              color: "#0f212b",
            }}
          >
            {/* The Official Site of the Los Angeles Police Department */}
            {pageData?.data.heading}
          </Typography>
          <Typography
            className={`${homeStyle.italicTypo2} ${global.fadeInUp}`}
            sx={{
              fontSize: "55px",
              marginTop: "10px",
              fontStyle: "italic",
              fontWeight: "700",
              lineHeight: "1.1",
              letterSpacing: "1.15px",
              fontFamily: "Public Sans,sans-serif",
            }}
          >
            {/* “to protect and to serve” */}
            {pageData?.data.subheading}
          </Typography>

          <TextField
            className={`${global.fadeInUp} ${homeStyle.formTextField}`}
            sx={{
              position: "absolute",
              zIndex: "9999",
              marginTop: "110px",
              backgroundColor: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
              border: "1px solid black",
              ":hover": { border: "1px solid red", transitionDelay: ".2s;" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon sx={{ color: "#e73f15" }} />
                  </IconButton>
                </InputAdornment>
              ),
              placeholder: "What you are looking for ?",
              disableUnderline: true,
              style: {
                marginLeft: "20px",
                fontSize: "20px",
              },
            }}
            variant="standard"
          />
        </Box>
      </Container>

      <section>
        <SwiperImage />
      </section>

      <Container>
        <Box
          sx={{
            marginTop: "12%",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
          }}
          className={`${homeStyle.paddingBox} ${global.fadeInUp}`}
        >
          <Quicklinks />

          <BasicTabs />

          <Box>
            <Grid container rowSpacing={6} columnSpacing={5}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#ebf4f7",
                  }}
                >
                  <Image
                    className={homeStyle.cardImage}
                    src={TeamImage}
                    alt="teamImage"
                  />
                  <Box
                    sx={{
                      padding: "5%",
                      gap: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>
                      {/* Join the Team */}
                      {sections.map((a) => a.update_title_1)}
                    </Typography>
                    <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
                      {sections.map((a) => a.update_description_1)}{" "}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#ebf4f7",
                        height: "50px",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          height: "2px",
                          width: "20px",
                          opacity: ".9",
                          backgroundColor: "black",
                        }}
                      ></span>
                      <Link
                        style={{ textDecoration: "none" }}
                        href="https://www.youtube.com/watch?v=SIUb_Y3fVFk"
                      >
                        <Typography
                          sx={{
                            color: "#e73f15",
                            textTransform: "none",
                            "&:hover": { color: "grey" },
                          }}
                        >{`Explore How to Make a Difference`}</Typography>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#ebf4f7",
                  }}
                >
                  <Image
                    className={homeStyle.cardImage}
                    src={Axiom}
                    // src={{sections.map((section, index) => (section.update_image_1)}}
                    alt="teamImage"
                  />
                  {/* {sections.map((section, index) => (
                    <Image
                      key={index}
                      className={homeStyle.cardImage}
                      src={section.update_image_1}
                      alt={`teamImage-${index}`}
                      width={100}
                      height={100}
                    />
                  ))} */}
                  <Box
                    sx={{
                      padding: "5%",
                      gap: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>
                      {/* Critical Incident Videos */}
                      {sections.map((a) => a.update_title_2)}
                    </Typography>
                    <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
                      {/* View publicly released video recordings that capture
                      critical incidents involving LAPD officers.{" "} */}
                      {sections.map((a) => a.update_description_2)}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#ebf4f7",
                        height: "50px",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          height: "2px",
                          width: "20px",
                          opacity: ".9",
                          backgroundColor: "black",
                        }}
                      ></span>
                      <Link
                        style={{ textDecoration: "none" }}
                        href="https://www.youtube.com/watch?v=SIUb_Y3fVFk"
                      >
                        <Typography
                          sx={{
                            color: "#e73f15",
                            textTransform: "none",
                            "&:hover": { color: "grey" },
                          }}
                        >{`Watch Critical Incident Videos`}</Typography>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={4}>
                <Box>
                  <Box
                    sx={{
                      backgroundColor: "#052942",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      padding: "8% 5% 8% 5%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "15px",
                      }}
                    >
                      <Image src={Emergency} alt="Emergency-icon" />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                        }}
                      >
                        <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                          {/* Life-Threatening Emergencies Only: */}
                          {contacts.map((con) => con.section_1)}
                        </Typography>
                        <Link
                          href="javascript:;"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{ color: "#ffffff", fontSize: "22px" }}
                          >
                            {/* 9-1-1 */}
                            {contacts.map((con) => con.section_1_details)}
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "15px",
                      }}
                    >
                      <Image src={Emergency} alt="Emergency-icon" />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                        }}
                      >
                        <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                          {/* Non-Emergency Police Response:: */}
                          {contacts.map((con) => con.section_2)}
                        </Typography>
                        <Link
                          href="javascript:;"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{ color: "#ffffff", fontSize: "22px" }}
                          >
                            {/* 1-877-ASK-LAPD */}
                            {contacts.map((con) => con.section_2_details)}
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "15px",
                      }}
                    >
                      <Image src={Emergency} alt="Emergency-icon" />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                        }}
                      >
                        <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                          {/* Email Questions & Comments: */}
                          {contacts.map((con) => con.section_3)}
                        </Typography>
                        <Link
                          href="javascript:;"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{ color: "#ffffff", fontSize: "18px" }}
                          >
                            {/* contact.lapdonline@gmail.com */}
                            {contacts.map((con) => con.section_3_details)}
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "50px",
                      marginTop: "20px",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        height: "2px",
                        width: "20px",
                        opacity: ".9",
                        backgroundColor: "black",
                      }}
                    ></span>
                    <Link
                      style={{ textDecoration: "none" }}
                      href="https://www.youtube.com/watch?v=SIUb_Y3fVFk"
                    >
                      <Typography
                        sx={{
                          color: "#e73f15",
                          textTransform: "none",
                          "&:hover": { color: "grey" },
                        }}
                      >{`View All Contact Information`}</Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
