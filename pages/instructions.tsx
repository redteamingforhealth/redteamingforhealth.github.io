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

          <h2 style={{paddingBottom: "8px", paddingTop: "8px"}} className="text-xl">Workshop Instructions</h2>

          {/* Ordered list with 8px spacing between paragraphs */}
          <ol style={{paddingBottom: "8px", listStyleType: "decimal", paddingLeft: "1em"}}>
            <li className="text-sm" style={{paddingBottom: '6px'}}>Introduce yourselves to your group! Briefly share your name, relevant professional background (clinical training / subspecialty, for clinician participants), and one hobby you enjoy doing in your spare time. As you go around the group, one member from the group should be entering this information into the <a href="https://google.com">Group Intake Form</a>.
            <br></br>
            <div style={{paddingTop: '6px'}}>The group intake form asks for a group number; this should be clearly written on the piece of paper on your tables.</div>
            </li>
            <li className="text-sm" style={{paddingBottom: '6px'}}>In your teams, sign in to each fo the three language model platforms (GPT-4o, Claude, Open-Source) using the credentials written on the pieces of paper on your tables.</li>
            <li className="text-sm" style={{paddingBottom: '6px'}}>In your teams, take 10-15 minutes to get acquainted with one or more of the language models. Here are a few suggestions for exercises to try:
              <ul style={{paddingLeft: '15px'}}>
                <li style={{listStyleType: 'disc', paddingBottom: '6px'}}>
                  <p style={{paddingBottom: '6px'}}><b>Ask the model to write you a poem</b> about machine learning in healthcare, in a particular style or tone. E.g.,</p>
                  <code>
                    <p style={{paddingBottom: '6px'}}>Write me a poem about machine learning in healthcare in the style of Dr. Seuss.</p>
                    <p style={{paddingBottom: '6px'}}>Write me a romantic Shakespearean sonnet about machine learning in healthcare.</p>
                  </code>
                  The models should be able to do this remarkably well; this highlights that, by learning complex probability distributions over the structure of natural language in their training data, they can generate text that is coherent and stylistically consistent.
                </li>
                <li style={{listStyleType: 'disc'}}>
                  <p style={{paddingBottom: '6px'}}><b>Ask the model what happened in the news</b> yesterday. E.g.,</p>
                  <code>
                    <p style={{paddingBottom: '6px'}}>What happened in the news yesterday?</p>
                  </code>
                  The models should not be able to tell you this; this is because events from yesterday's news took place after the training data for these models was collected. This highlights that the models are not omniscient and can only generate text based on the patterns they have learned from their training data.
                </li>
                <li style={{listStyleType: 'disc'}}>
                  <p style={{paddingBottom: '6px'}}><b>Ask the model to generate a list</b> of the top 10 causes of death in the United States in 2022. E.g.,</p>
                  <code>
                    <p style={{paddingBottom: '6px'}}>List the top 10 causes of death in the United States in 2022.</p>
                  </code>
                  Cross-reference the generaetd list with <a href="https://www.cdc.gov/nchs/fastats/leading-causes-of-death.htm">this one from the CDC</a>. The model may not be perfect, but you should notice a strong degree of overlap between the two lists. This highlights that these models can generate text that is factually accurate and up-to-date, as long as the information was present in their training data.
                </li>
                <li style={{listStyleType: 'disc'}}>
                  <p style={{paddingBottom: '6px'}}>The GPT-4o interface allows users to upload images and query them using text. Try uploading this image of Vahid and <b>asking the model to describe the image</b>. You can drag and drop the image from either this website (or from your computer) into the GPT-4o dialogue box, and then provide a textual instruction, e.g.,</p>
                  <img src="vahid.png" alt="Vahid" style={{width: "150px"}}/>
                  <code>
                    <p style={{paddingBottom: '6px'}}>Describe the image.</p>
                  </code>
                  GPT-4o should be able to generate a description of the image that is accurate and detailed. This highlights that these models can generate text that is grounded in the visual information present in an image.
                </li>
              </ul>
            </li>
            <li className="text-sm" style={{paddingBottom: '6px'}}>Ask one of the clinicians in your group to describe their clinical workflow. What types of [knowledge retrieval / text summarization / text generation / decision-making] tasks do they encounter on a daily basis, and how might access to one of these language models help them in their work? Critically consider potential use cases, as a key goal of this exercise is to ground the use of these models in realistic clinical scenarios.</li>
          </ol>

          {/* Make one box on the left, one box on the right, with form links */}

          <br></br>

          

        </main>
      {/* Pass in whether we are on mobile to the footer */}
      <FooterBar isMobile={this.state.isMobile}/>
      

      </div>
    );
}
}
