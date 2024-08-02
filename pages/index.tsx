"use client"
import FooterBar from '../components/footer';
import ButtonAppBar from '../components/navbar';
import React, { useState, useEffect } from 'react';

import { Mate } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@mui/material';
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
              <p className="text-sm">August 16, 2024</p>
              <p className="text-sm">Arcadian Court, Toronto, ON</p>
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
                <p className="text-sm">August 16, 2024</p>
                <p className="text-sm">Arcadian Court, Toronto, ON</p>
              </Box>
            </Box>
          )} 

          
          {/* Vertical space -- horizontal line -- vertical space */}
          {/* Horizontal line goes 70% of the way across and is centered*/}
          <br></br>
          <hr style={{width: "70%", margin: "auto"}}/>
          <br></br>

          <p>
          Large language models (LLMs) trained on massive data have demonstrated exciting capabilities in information retrieval, decision-making, and text generation. Despite their many strengths, these language models are imperfect, and their deployment in healthcare settings poses risk: language models may hallucinate incorrect responses to factual inquiries, provide inaccurate responses to queries that lie outside of the distribution of training data, or incorrectly apply mathematical formulae (e.g., risk score equations) to clinical data. The goal of this workshop is for teams of clinicians and computer scientists to jointly explore the limitations of the present generation of large language models in realistic healthcare scenarios to inform responsible deployment of LLMs in healthcare and to highlight areas of improvement in the machine learning methods underlying modern LLMs.
          </p>
          <br></br>
          <p>
            This exercise will take the form of a workshop at the Machine Learning for Healthcare Conference (MLHC), 2024. Working in teams of clinicians and computer scientists, workshop participants will undertake a “red teaming” exercise. Red teaming is an established set of techniques within the physical and digital security communities, wherein a group (the “red team”; typically composed of security practitioners) pretends to be a malicious actor and attempts to gain access to the secured location or information. The process of doing so highlights potential limitations of the existing security systems and informs areas of improvement.
          </p>
          <br></br>
          <p>
            Within our workshop, participants will place themselves in the shoes of clinical users of LLM-based healthcare systems. Unlike in a traditional red-teaming exercise, where participants pretend to be malicious users, the healthcare context yields the unique restriction that users (clinicians, nurses, hospital administrators) are almost exclusively using the system with the goal of eliciting a useful, positive outcome. In this vein, our “red team” will not play the role of a malicious actor by, say, attempting to elicit racist or sexist behaviour from the LLM that circumvents its system prompt. Rather, our participants will brainstorm realistic clinical scenarios in which LLMs may support information retrieval or decision-making, and highlight the subset of those scenarios in which the limitations of modern LLMs yield harm when prompted by well-intentioned users. For example, an LLM that incorrectly applies a clinical risk score equation to a series of patient biomarkers may lead the user to improperly estimate patient risk – and potentially result in inferior treatment decisions downstream – even though the user prompted the LLM without malicious intent.
          </p>
          <br></br>

          {this.state.isMobile ? (
            <Box p={2} border={1} boxShadow={3}>
            <center style={{paddingBottom: "8px"}} className="text-lg">Organizing Team</center>
            <hr style={{paddingBottom: "8px"}}></hr>

            

            {/* Add a 2 x 2 set of boxes below the title. Each box should contain an image (left),
            and a paragraph of text (right). The image should be profile.jpg; text says "SAMPLE" */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/* Make a 1 x 2 grid, 30% width and 60% width */}
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <center>
                    <img src="michael.jpg" style={{width: "50%"}}/>
                    </center>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="text-xl">Michael Cooper</p>
                    <p className="text-sm">Ph.D. Student, University of Toronto</p>
                    {/* Links */}
                      <IconButton 
                      color="inherit" 
                      href={"mailto:" + obfuscate('cs.toronto.edu', 'coopermj')}
                      children={
                          <Tooltip title={obfuscate('cs.toronto.edu', 'coopermj')} placement="top" arrow>
                              <FontAwesomeIcon 
                              icon={faEnvelope} 
                              size="xs"/>
                          </Tooltip>
                          }>
                      </IconButton>
                      <IconButton 
                      color="inherit" 
                      href={"https://michaeljohncooper.com"}
                      children={
                          <Tooltip title={"Homepage"} placement="top" arrow>
                              <FontAwesomeIcon 
                              icon={faHouse} 
                              size="xs"/>
                          </Tooltip>
                          }>
                      </IconButton>
                      <IconButton 
                      color="inherit" 
                      href={"https://x.com/coopermj_aiml"}
                      children={
                          <Tooltip title={"X (Twitter)"} placement="top" arrow>
                              <FontAwesomeIcon 
                              icon={faXTwitter} 
                              size="xs"/>
                          </Tooltip>
                          }>
                      </IconButton>
                    
                  </Grid>
                </Grid>
                
              </Grid>
              <Grid item xs={12}>
                {/* Make a 1 x 2 grid, 30% width and 60% width */}
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <center>
                    <img src="vahid.png" style={{width: "50%"}}/>
                    </center>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="text-xl">Vahid Balazadeh</p>
                    <p className="text-sm">Ph.D. Student, University of Toronto</p>
                    {/* Links */}
                      <IconButton 
                      color="inherit" 
                      href={"mailto:" + obfuscate('cs.toronto.edu', 'vahid')}
                      children={
                          <Tooltip title={obfuscate('cs.toronto.edu', 'vahid')} placement="top" arrow>
                              <FontAwesomeIcon 
                              icon={faEnvelope} 
                              size="xs"/>
                          </Tooltip>
                          }>
                      </IconButton>
                      <IconButton 
                      color="inherit" 
                      href={"https://vahidbalazadeh.me"}
                      children={
                          <Tooltip title={"Homepage"} placement="top" arrow>
                              <FontAwesomeIcon 
                              icon={faHouse} 
                              size="xs"/>
                          </Tooltip>
                          }>
                      </IconButton>
                      <IconButton 
                      color="inherit" 
                      href={"https://twitter.com/vahidbalazadeh"}
                      children={
                          <Tooltip title={"X (Twitter)"} placement="top" arrow>
                              <FontAwesomeIcon 
                              icon={faXTwitter} 
                              size="xs"/>
                          </Tooltip>
                          }>
                      </IconButton>
                  </Grid>
                </Grid>
                
              </Grid>
              <Grid item xs={12}>
                {/* Make a 1 x 2 grid, 30% width and 60% width */}
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <center>
                    <img src="david.jpeg" style={{width: "50%"}}/>
                    </center>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="text-xl">David Pellow</p>
                    <p className="text-sm">Postdoctoral Fellow, Vector Institute</p>
                    {/* Links */}
                      <IconButton 
                      color="inherit" 
                      href={"mailto:" + obfuscate('vectorinstitute.ai', 'david.pellow')}
                      children={
                          <Tooltip title={obfuscate('vectorinstitute.ai', 'david.pellow')} placement="top" arrow>
                              <FontAwesomeIcon 
                              icon={faEnvelope} 
                              size="xs"/>
                          </Tooltip>
                          }>
                      </IconButton>
                      <IconButton 
                      color="inherit" 
                      href={"http://www.cs.tau.ac.il/~dpellow/"}
                      children={
                          <Tooltip title={"Homepage"} placement="top" arrow>
                              <FontAwesomeIcon 
                              icon={faHouse} 
                              size="xs"/>
                          </Tooltip>
                          }>
                      </IconButton>
                    
                  </Grid>
                </Grid>
                
              </Grid>
              <Grid item xs={12}>
                {/* Make a 1 x 2 grid, 30% width and 60% width */}
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <center>
                    <img src="rahul.jpg" style={{width: "50%"}}/>
                    </center>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="text-xl">Rahul G. Krishnan</p>
                    <p className="text-sm">Assistant Professor, University of Toronto</p>
                    {/* Links */}
                      <IconButton 
                      color="inherit" 
                      href={"mailto:" + obfuscate('cs.toronto.edu', 'rahulgk')}
                      children={
                          <Tooltip title={obfuscate('cs.toronto.edu', 'rahulgk')} placement="top" arrow>
                              <FontAwesomeIcon 
                              icon={faEnvelope} 
                              size="xs"/>
                          </Tooltip>
                          }>
                      </IconButton>
                      <IconButton 
                      color="inherit" 
                      href={"https://www.cs.toronto.edu/~rahulgk/"}
                      children={
                          <Tooltip title={"Homepage"} placement="top" arrow>
                              <FontAwesomeIcon 
                              icon={faHouse} 
                              size="xs"/>
                          </Tooltip>
                          }>
                      </IconButton>
                      <IconButton 
                      color="inherit" 
                      href={"https://twitter.com/rahulgk"}
                      children={
                          <Tooltip title={"X (Twitter)"} placement="top" arrow>
                              <FontAwesomeIcon 
                              icon={faXTwitter} 
                              size="xs"/>
                          </Tooltip>
                          }>
                      </IconButton>
                  </Grid>
                </Grid>
                
              </Grid>

            </Grid>
            </Box>
          ) : (

            <Box p={2} border={1} boxShadow={3}>
              <center style={{paddingBottom: "8px"}} className="text-lg">Organizing Team</center>
              <hr style={{paddingBottom: "8px"}}></hr>

              {/* Add a 2 x 2 set of boxes below the title. Each box should contain an image (left),
              and a paragraph of text (right). The image should be profile.jpg; text says "SAMPLE" */}
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {/* Make a 1 x 2 grid, 30% width and 60% width */}
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <img src="michael.jpg" style={{width: "100%"}}/>
                    </Grid>
                    <Grid item xs={8}>
                      <p className="text-xl">Michael Cooper</p>
                      <p className="text-sm">Ph.D. Student, University of Toronto</p>
                      {/* Links */}
                      <center>
                        <IconButton 
                        color="inherit" 
                        href={"mailto:" + obfuscate('cs.toronto.edu', 'coopermj')}
                        children={
                            <Tooltip title={obfuscate('cs.toronto.edu', 'coopermj')} placement="top" arrow>
                                <FontAwesomeIcon 
                                icon={faEnvelope} 
                                size="xs"/>
                            </Tooltip>
                            }>
                        </IconButton>
                        <IconButton 
                        color="inherit" 
                        href={"https://michaeljohncooper.com"}
                        children={
                            <Tooltip title={"Homepage"} placement="top" arrow>
                                <FontAwesomeIcon 
                                icon={faHouse} 
                                size="xs"/>
                            </Tooltip>
                            }>
                        </IconButton>
                        <IconButton 
                        color="inherit" 
                        href={"https://x.com/coopermj_aiml"}
                        children={
                            <Tooltip title={"X (Twitter)"} placement="top" arrow>
                                <FontAwesomeIcon 
                                icon={faXTwitter} 
                                size="xs"/>
                            </Tooltip>
                            }>
                        </IconButton>
                      </center>
                      
                    </Grid>
                  </Grid>
                  
                </Grid>
                <Grid item xs={6}>
                  {/* Make a 1 x 2 grid, 30% width and 60% width */}
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <img src="vahid.png" style={{width: "100%"}}/>
                    </Grid>
                    <Grid item xs={8}>
                      <p className="text-xl">Vahid Balazadeh</p>
                      <p className="text-sm">Ph.D. Student, University of Toronto</p>
                      {/* Links */}
                      <center>
                        <IconButton 
                        color="inherit" 
                        href={"mailto:" + obfuscate('cs.toronto.edu', 'vahid')}
                        children={
                            <Tooltip title={obfuscate('cs.toronto.edu', 'vahid')} placement="top" arrow>
                                <FontAwesomeIcon 
                                icon={faEnvelope} 
                                size="xs"/>
                            </Tooltip>
                            }>
                        </IconButton>
                        <IconButton 
                        color="inherit" 
                        href={"https://vahidbalazadeh.me"}
                        children={
                            <Tooltip title={"Homepage"} placement="top" arrow>
                                <FontAwesomeIcon 
                                icon={faHouse} 
                                size="xs"/>
                            </Tooltip>
                            }>
                        </IconButton>
                        <IconButton 
                        color="inherit" 
                        href={"https://twitter.com/vahidbalazadeh"}
                        children={
                            <Tooltip title={"X (Twitter)"} placement="top" arrow>
                                <FontAwesomeIcon 
                                icon={faXTwitter} 
                                size="xs"/>
                            </Tooltip>
                            }>
                        </IconButton>
                      </center>
                    </Grid>
                  </Grid>
                  
                </Grid>
                {/* hline */}
                <Grid item xs={12}>
                  <hr></hr>
                </Grid>
                <Grid item xs={6}>
                  {/* Make a 1 x 2 grid, 30% width and 60% width */}
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <img src="david.jpeg" style={{width: "100%"}}/>
                    </Grid>
                    <Grid item xs={8}>
                      <p className="text-xl">David Pellow</p>
                      <p className="text-sm">Postdoctoral Fellow, Vector Institute</p>
                      {/* Links */}
                      <center>
                        <IconButton 
                        color="inherit" 
                        href={"mailto:" + obfuscate('vectorinstitute.ai', 'david.pellow')}
                        children={
                            <Tooltip title={obfuscate('vectorinstitute.ai', 'david.pellow')} placement="top" arrow>
                                <FontAwesomeIcon 
                                icon={faEnvelope} 
                                size="xs"/>
                            </Tooltip>
                            }>
                        </IconButton>
                        <IconButton 
                        color="inherit" 
                        href={"http://www.cs.tau.ac.il/~dpellow/"}
                        children={
                            <Tooltip title={"Homepage"} placement="top" arrow>
                                <FontAwesomeIcon 
                                icon={faHouse} 
                                size="xs"/>
                            </Tooltip>
                            }>
                        </IconButton>
                      </center>
                      
                    </Grid>
                  </Grid>
                  
                </Grid>
                <Grid item xs={6}>
                  {/* Make a 1 x 2 grid, 30% width and 60% width */}
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <img src="rahul.jpg" style={{width: "100%"}}/>
                    </Grid>
                    <Grid item xs={8}>
                      <p className="text-xl">Rahul G. Krishnan</p>
                      <p className="text-sm">Assistant Professor, University of Toronto</p>
                      {/* Links */}
                      <center>
                        <IconButton 
                        color="inherit" 
                        href={"mailto:" + obfuscate('cs.toronto.edu', 'rahulgk')}
                        children={
                            <Tooltip title={obfuscate('cs.toronto.edu', 'rahulgk')} placement="top" arrow>
                                <FontAwesomeIcon 
                                icon={faEnvelope} 
                                size="xs"/>
                            </Tooltip>
                            }>
                        </IconButton>
                        <IconButton 
                        color="inherit" 
                        href={"https://www.cs.toronto.edu/~rahulgk/"}
                        children={
                            <Tooltip title={"Homepage"} placement="top" arrow>
                                <FontAwesomeIcon 
                                icon={faHouse} 
                                size="xs"/>
                            </Tooltip>
                            }>
                        </IconButton>
                        <IconButton 
                        color="inherit" 
                        href={"https://twitter.com/rahulgk"}
                        children={
                            <Tooltip title={"X (Twitter)"} placement="top" arrow>
                                <FontAwesomeIcon 
                                icon={faXTwitter} 
                                size="xs"/>
                            </Tooltip>
                            }>
                        </IconButton>
                      </center>
                    </Grid>
                  </Grid>
                  
                </Grid>

              </Grid>
            </Box>
              

          )}
        </main>
      {/* Pass in whether we are on mobile to the footer */}
      <FooterBar isMobile={this.state.isMobile}/>
      

      </div>
    );
}
}
