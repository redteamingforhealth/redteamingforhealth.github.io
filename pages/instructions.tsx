"use client"
import FooterBar from '../components/footer';
import ButtonAppBar from '../components/navbar';
import React, { useState, useEffect } from 'react';

import { Mate } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Button, IconButton, ListItem } from '@mui/material';
import { faGithubSquare, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import Tooltip from '@mui/material/Tooltip';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link'
import { Grid } from '@mui/material';

const mate = Mate({ subsets: ['latin'], weight: ["400"] });

export function obfuscate( domain, em_name ) { 
    // Credit to Dan Jurafsky for this function.
    return em_name + '@' + domain;
}

// Make Home a class
export default class Home extends React.Component<any, any> {

  // Give it state for isMobile
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    }
  }

  // Use useEffect to update isMobile on window resize
  componentDidMount() {
    this.setState({isMobile: window.innerWidth < 600});
    const handleResize = () => {
      this.setState({isMobile: window.innerWidth < 600});
    }
    window.addEventListener('resize', handleResize);
  }

  // Render the page
  render () {
    return (
      <div>
        <title>Red Teaming Large Language Models</title>
        <ButtonAppBar />
        {/* Make the width of main 85% of the page width and center it */}
        <main style={{width: this.state.isMobile ? "90%" : "75%", margin: "auto"}}>
          { this.state.isMobile ? (
            <Box className="center" display="flex" justifyContent="center" alignItems="center">
            {/* 50% width; center content */}
            <Box width={4/10} p={2} alignContent="center">
            <center>
              <img src="llm_redteam_icon_light.png" alt="Light Mode" className="block dark:hidden" style={{width: "125px"}}/>
              <img src="llm_redteam_icon_dark.png" alt="Dark Mode" className="hidden dark:block" style={{width: "125px"}}/>
              {/* <img src="llm_redteam_icon_dark.png" alt="Logo" style={{width: "95%", padding: "2px"}}/> */}
            </center>
            </Box>
            <Box width={6/10} p={1}>
              <h1 className="text-xl" style={{paddingBottom: "8px"}}>Red Teaming Large Language Models for Healthcare</h1>
              <p className="text-sm">Workshop at Machine Learning for Healthcare (MLHC), 2024</p>
              <p className="text-sm">August 15, 2024, 1:00PM &mdash; 5:00PM</p>
              <p className="text-sm"><a href="https://map.utoronto.ca/?id=1809#!m/494470?share">Room 1190, Bahen Centre for Information Technology, University of Toronto, Toronto, Ontario</a></p>
              <br></br>
              <Button variant="contained" color="primary" style={{backgroundColor: "secondary", color: "white", fontFamily: "latin"}} href="https://events.eventzilla.net/e/mlhc-preconference-workshop-2138630204">Register Here</Button>
            </Box>
          </Box>
          ) : (
            <Box className="center" display="flex" justifyContent="center" alignItems="center">
              {/* 50% width; center content */}
              <Box width={3/10} p={2} alignContent="center">
              <center>
                <img src="llm_redteam_icon_light.png" alt="Light Mode" className="block dark:hidden" style={{width: "125px"}}/>
                <img src="llm_redteam_icon_dark.png" alt="Dark Mode" className="hidden dark:block" style={{width: "125px"}}/>
              </center>
              </Box>
              <Box width={8/10} p={1}>
                <h1 className="text-xl" style={{paddingBottom: "8px"}}>Red Teaming Large Language Models for Healthcare</h1>
                <p className="text-sm">Workshop at Machine Learning for Healthcare (MLHC), 2024</p>
                <p className="text-sm">August 15, 2024, 1:00PM &mdash; 5:00PM</p>
                <p className="text-sm"><a href="https://map.utoronto.ca/?id=1809#!m/494470?share">Room 1190, Bahen Centre for Information Technology, University of Toronto, Toronto, Ontario</a></p>
                <br></br>
                <Button variant="contained" color="primary" style={{backgroundColor: "secondary", color: "white", fontFamily: "latin"}} href="https://events.eventzilla.net/e/mlhc-preconference-workshop-2138630204">Register Here</Button>
              </Box>
            </Box>
          )} 

          
          {/* Vertical space -- horizontal line -- vertical space */}
          {/* Horizontal line goes 70% of the way across and is centered*/}
          <br></br>
          <hr style={{width: "70%", margin: "auto"}}/>
          <br></br>
          <h2 style={{paddingBottom: "8px"}} className="text-xl">WiFi Access</h2>

          <p style={{paddingBottom: "6px"}}>Workshop participants can access WiFi at the University of Toronto using eduroam. For instructions, see <a href="https://eva.eis.utoronto.ca" target='_blank'>this link</a>.</p>

          <h2 style={{paddingBottom: "8px"}} className="text-xl">Useful Links</h2>

          <h3 style={{paddingBottom: "8px"}} className="text-lg">Submission Forms</h3>

          {/* Make one box on the left, one box on the right, with form links */}
          <Box display="flex" justifyContent="center" alignItems="center">
            {/* Make the entire area of the box a hyperlink */}
            <a href="https://google.com">
              <Box
                sx={{
                  width: 0.95,
                  padding: 2,
                  backgroundColor: '#FAFAFA',
                  borderRadius: 2,
                  border: 1,
                  borderColor: 'black',
                  display: 'inline-block',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  // Make text black
                  color: 'black',
                  transition: 'background-color 0.3s ease', // Smooth transition
                  '&:hover': {
                    backgroundColor: '#E0E0E0', // Darken on hover
                  },
                }}
              >             
                <h3 style={{paddingBottom: "8px", textAlign: "center"}} className="text-md">Group Registration Form</h3>
                <p style={{paddingBottom: "6px"}} className="text-sm">Submit this form at the <b>start</b> of the exercise, once you are seated at your table with your team.</p>
              </Box>
            </a>
            <a href="https://google.com">
              <Box
                sx={{
                  width: 0.95,
                  padding: 2,
                  backgroundColor: '#FAFAFA',
                  borderRadius: 2,
                  border: 1,
                  borderColor: 'black',
                  display: 'inline-block',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  // Make text black
                  color: 'black',
                  transition: 'background-color 0.3s ease', // Smooth transition
                  '&:hover': {
                    backgroundColor: '#E0E0E0', // Darken on hover
                  },
                }}
              >             
                <h3 style={{paddingBottom: "8px", textAlign: "center"}} className="text-md">Vulnerability Reporting Form</h3>
                <p style={{paddingBottom: "6px"}} className="text-sm">Submit this form with your group <b>for each vulnerability you discover</b>.</p>
              </Box>
            </a>
          </Box>

          <h3 style={{paddingBottom: "8px", paddingTop: "8px"}} className="text-lg">Language Models</h3>

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <a href="https://google.com" style={{ textDecoration: 'none', width: '32%' }}>
              <Box
                sx={{
                  padding: 2,
                  backgroundColor: '#FAFAFA',
                  borderRadius: 2,
                  border: 1,
                  borderColor: 'black',
                  cursor: 'pointer',
                  color: 'black',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#E0E0E0',
                  },
                }}
              >
                <h3 style={{ paddingBottom: '8px', textAlign: 'center' }} className="text-md">GPT-4o</h3>
                <p style={{ paddingBottom: '6px', textAlign: 'center' }} className="text-xs">(OpenAI)</p>
              </Box>
            </a>

            <a href="https://google.com" style={{ textDecoration: 'none', width: '32%' }}>
              <Box
                sx={{
                  padding: 2,
                  backgroundColor: '#FAFAFA',
                  borderRadius: 2,
                  border: 1,
                  borderColor: 'black',
                  cursor: 'pointer',
                  color: 'black',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#E0E0E0',
                  },
                }}
              >
                <h3 style={{ paddingBottom: '8px', textAlign: 'center' }} className="text-md">Claude</h3>
                <p style={{ paddingBottom: '6px', textAlign: 'center'  }} className="text-xs">(Anthropic)</p>
              </Box>
            </a>

            <a href="https://google.com" style={{ textDecoration: 'none', width: '32%' }}>
              <Box
                sx={{
                  padding: 2,
                  backgroundColor: '#FAFAFA',
                  borderRadius: 2,
                  border: 1,
                  borderColor: 'black',
                  cursor: 'pointer',
                  color: 'black',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#E0E0E0',
                  },
                }}
              >
                <h3 style={{ paddingBottom: '8px', textAlign: 'center' }} className="text-md">Open-Source Models</h3>
                <p style={{ paddingBottom: '6px', textAlign: 'center'  }} className="text-xs">(Meta; Hosted by Vector Institute)</p>
              </Box>
            </a>
          </Box>



          {/* Make one box on the left, one box on the right, with form links */}

          <br></br>

          

        </main>
      {/* Pass in whether we are on mobile to the footer */}
      <FooterBar isMobile={this.state.isMobile}/>
      

      </div>
    );
}
}
