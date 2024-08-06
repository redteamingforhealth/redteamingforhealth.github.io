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
              <p className="text-sm"><a href="https://maps.app.goo.gl/YYivAPWMNaWVZD9b7">27 King's College Cir, Toronto, Ontario</a></p>
              <br></br>
              <Button variant="contained" color="primary" href="https://events.eventzilla.net/e/mlhc-preconference-workshop-2138630204">Register Here</Button>
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
                <p className="text-sm"><a href="https://maps.app.goo.gl/YYivAPWMNaWVZD9b7">27 King's College Cir, Toronto, Ontario</a></p>
                <br></br>
                <Button variant="contained" color="primary" href="https://events.eventzilla.net/e/mlhc-preconference-workshop-2138630204">Register Here</Button>
              </Box>
            </Box>
          )} 

          
          {/* Vertical space -- horizontal line -- vertical space */}
          {/* Horizontal line goes 70% of the way across and is centered*/}
          <br></br>
          <hr style={{width: "70%", margin: "auto"}}/>
          <br></br>

          <h2 style={{paddingBottom: "8px"}} className="text-xl">Workshop Schedule</h2>
          <table>
            <tbody>
            <tr>
              <td style={{width: "150px"}}>1:00PM &mdash; 2:00PM</td>
              <td style={{paddingLeft: "15px"}}>Sponsored Talks by the American Medical Association</td>
            </tr>
            <tr>
              <td>2:00PM &mdash; 2:30PM</td>
              <td style={{paddingLeft: "15px"}}>Activity Overview; Getting Acquainted with Language Models</td>
            </tr>
            <tr>
              <td>2:30PM &mdash; 4:00PM</td>
              <td style={{paddingLeft: "15px"}}>Interactive Red Teaming Exercise in Breakout Groups</td>
            </tr>
            <tr>
              <td>4:00PM &mdash; 4:30PM</td>
              <td style={{paddingLeft: "15px"}}>Sharing Harmful Prompts; Discussion of Safeguards</td>
            </tr>
            <tr>
              <td>4:30PM &mdash; 5:00PM</td>
              <td style={{paddingLeft: "15px"}}>Conclusion</td>
            </tr>
            </tbody>
          </table>

          <br></br>
          
          <h2 style={{paddingBottom: "8px"}} className="text-xl">What to Bring</h2>
          {/* Bullet list */}

          <ul style={{paddingLeft: "15px"}}>
            <li style={{listStyleType: "disc"}}>All Participants: Laptop</li>
            <li style={{listStyleType: "disc"}}>Clinicians: come prepared to share with your group your daily workflow and to brainstorm ways in which LLMs may integrate with these processes. This will help ground the exercise in real-world use cases.</li>
          </ul>

          <br></br>
          <h2 style={{paddingBottom: "8px"}} className="text-xl">Red Teaming Overview</h2>
          
          The below slides present an overview of the activity and some exemplar classes of vulnerability. We'll go over them during the workshop, but they make for some handy pre-workshop reading.
          <br></br>
          <br></br>
          {/* Make an iframe to apple.com */}
          <div>
          <iframe 
          src="https://docs.google.com/presentation/d/e/2PACX-1vRNyN3ybP9iETPVG310AxYF6lQWJs_P5guxGG8xSUty2ZsSwY3F49G6Wfpkp5RSSxDnnG927cS6PyNA/embed?start=false&loop=false&delayms=3000" 
          width="100%" 
          height="450"
          allowFullScreen={true}></iframe>
          </div>

          <br></br>

        </main>
      {/* Pass in whether we are on mobile to the footer */}
      <FooterBar isMobile={this.state.isMobile}/>
      

      </div>
    );
}
}
