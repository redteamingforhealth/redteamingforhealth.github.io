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
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const mate = Mate({ subsets: ['latin'], weight: ["400"] });

export function obfuscate( domain, em_name ) { 
    // Credit to Dan Jurafsky for this function.
    return em_name + '@' + domain;
}

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData('First Item', 'Value 1'),
  createData('Second Item', 'Value 2'),
  createData('Third Item', 'Value 3'),
];

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

          <h2 style={{paddingBottom: "8px"}} className="text-xl">Workshop Background</h2>

          We employ the question bank from <a href="https://arxiv.org/abs/2401.15897">Feffer et al. (2024)</a> to help guide our thinking for the red-teaming exercise. These guiding questions, and our responses, are provided in the table below. 
          <br></br>
          <br></br>

          <h3>Pre-Activity:</h3>
          <table style={{borderCollapse: "collapse", width: "100%"}}>
            <tbody>
            {/* Artifact under evaluation */}
            <tr>
              <td style={{width: "40%", borderRight: "1px solid", paddingTop: "15px", paddingBottom: "15px"}}>
                What is the <b>artifact under evaluation</b> through the proposed red-teaming activity?
              </td>
              <td></td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> What version of the model (including fine-tuning details) is to be evaluated?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px", paddingBottom: "15px"}}>Our workshop evaluates a collection of closed-source (GPT-4o) and open-source (Phi3-14B, Llama3.1-8B) large language models.</td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> What safety and security guardrails are already in place for this artifact?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px"}}>Each model under evaluation has undergone fine-tuning with the intent of </td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li>At what stage of the AI lifecycle will the evaluation be conducted?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px", paddingBottom: "15px"}}>Models are evaluated after public release but prior to widespread clinical deployment.</td>
            </tr>
            
            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> If the model has already been released, specify the conditions of release.</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px", paddingBottom: "15px"}}>The conditions of release for each model can be found here: <a href="https://openai.com/policies/terms-of-use/">GPT-4o</a>, <a href="https://huggingface.co/microsoft/Phi-3-medium-4k-instruct">Phi3-14B</a>, <a href="https://llama.meta.com/llama3/use-policy/">Llama3.1-8B</a>.</td>
            </tr>

            {/* Threat Model */}
            <tr style={{borderTop: "1px dashed"}}>
              <td style={{width: "40%", borderRight: "1px solid", paddingTop: "15px", paddingBottom: "15px"}}>
                What is the <b>threat model</b> the red-teaming activity probes?
              </td>
              <td style={{paddingTop: "15px"}}></td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> Is the activity meant to illustrate a handful of possible vulnerabilities? (e.g., spelling errors in prompt leading to unpredictable model behavior)</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px"}}>No; the activity will be a more open-ended test of a broad range of possible vulnerabilities drawn from the clinical experience of the participants.</td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> Is the activity meant to identify a broad range of potential vulnerabilities? (e.g., biased behavior)</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px"}}>Yes.</td>
            </tr>
            
            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px", paddingBottom: "15px"}}>
                  <li> Is the activity meant to assess the risk of a specific vulnerability? (e.g., divulging recipe for explosives)</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px", paddingBottom: "15px"}}>No.</td>
            </tr>

            {/* Specific Vulnerabilities */}
            <tr style={{borderTop: "1px dashed"}}>
              <td style={{width: "40%", borderRight: "1px solid", paddingTop: "15px", paddingBottom: "15px"}}>
                What is the <b>specific vulnerability</b> the red-teaming activity aims to find?
              </td>
              <td style={{paddingTop: "15px"}}></td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> How was this vulnerability identified as the target of this evaluation?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px"}}>Target vulnerabilities will be identified in the first stage of the workshop wherein clinician team members will share their clinical workflows and decision-making tasks with their teams, and will brainstorm with their teams use cases for LLMs within these workflows. Having identified applications of LLMs in the clinical workflow, teams will then brainstorm possible vulnerabilities specific to the defined workflow (e.g., inaccurate information retrieval).</td>
            </tr>
            
            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> Why was the above vulnerability prioritized over other potential vulnerabilities?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px"}}>We prioritize vulnerabilities associated with the workflows specific to the participants in our workshop as those individuals will be best positioned to evaluate the harm associated with the responses provided by the LLMs.</td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> What is the threshold of acceptable risk for finding this vulnerability?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px"}}>This is dependent on the specific clinical workflow being studied.</td>
            </tr>

            {/* Criteria for Success */}
            <tr style={{borderTop: "1px dashed"}}>
              <td style={{width: "40%", borderRight: "1px solid", paddingTop: "15px", paddingBottom: "15px"}}>
                What are the <b>criteria for assessing the success</b> of the red-teaming activity?
              </td>
              <td style={{paddingLeft: "15px", paddingTop: "15px", paddingBottom: "15px"}}></td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> What are the benchmarks of comparison for success?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px"}}>The success of an individual vulnerability will be gauged by the extent to which (a) it surfaces in a realistic clinical use case<sup>[1]</sup> (as adjudicated by clinician workshop participants), and (b) may plausibly lead to downstream clinical harm. The success of the workshop will be gauged based on the number and severity of vulnerabilities that are uncovered.</td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> Can the activity be reconstructed or reproduced?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px", paddingBottom: "15px"}}>Workshop materials will be publicly released so that our workshop can be reproduced; however, due to the time-varying nature of some of the closed-source language models that we evaluate (GPT-4o), it is uncertain whether future replications of our workshop will identify similar vulnerabilities.</td>
            </tr>

            {/* Team Composition */}
            <tr style={{borderTop: "1px dashed"}}>
              <td style={{width: "40%", borderRight: "1px solid", paddingTop: "15px", paddingBottom: "15px"}}>
                <b>Team composition</b> and who will be part of the red team?
              </td>
              <td></td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> What were the criteria for inclusion/exclusion of members, and why?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px", paddingBottom: "15px"}}>Workshop members were selected on the basis of interest and domain expertise; participants in the 2024 Machine Learning for Healthcare (MLHC) Conference &mdash; typically comprising those with clinical expertise, machine learning expertise, or both &mdash; were invited to sign up for a pre-conference workshop that would include our red-teaming activity.</td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> How diverse/homogeneous is the team across relevant demographic characteristics?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px"}}>Each team will be comprised of both healthcare practitioners and computer scientists. Subject matter expertise is the most relevant demographic characteristic for this workshop.</td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> How many internal versus external members belong to the team?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px", paddingBottom: "15px"}}>Each team is comprised only of external members, in the sense that (to our knowledge) none of our participants are affiliated with the groups developing the models being red-teamed.</td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> What is the distribution of subject-matter expertise among members?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px", paddingBottom: "15px"}}>A range of clinicians from different clinicial sub-specialties will be present at our workshop. Similarly, a range of computer scientists with different machine learning specializations will take part.</td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> What are possible biases or blindspots the current team composition may exhibit?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px", paddingBottom: "15px"}}>It is possible that our participants do not comprehensively represent the distribution of clinical sub-specialties in practice. To appropriately acknowledge limitations of our exercise, we will gather information from workshop registrants on their respective clinical specialties.</td>
            </tr>

            <tr>
              <td style={{borderRight: "1px solid", paddingBottom: "15px", paddingRight: "15px"}}>
              <ul style={{listStyleType: "circle", paddingLeft: "15px"}}>
                  <li> What incentives/disincentives do participants have to contribute to the activity?</li>
                </ul>  
              </td>
              <td style={{paddingLeft: "15px"}}>Workshop participants are those who have proactively elected to sign up for the activity. We hypothesize that our participants are largely driven by a desire to improve clinical processes and out of a sense of interest in the subject domain. After the workshop, we intend to acknowledge all participants in our summary report; this accredidation may be a source of extrinsic incentive to contribute to the activity.</td>
            </tr>

            </tbody>
          </table>

          <br></br>
          <br></br>


          {/* hline */}
          <hr style={{width: "25%", margin: "auto", marginLeft: "0px"}}/>
          <br></br>

          <p><sup>[1]</sup>It is a safe assumption that, unlike a standard red teaming exercise designed to circumvent model safeguards under the assumption of a malicious user (e.g., one who wishes to generate racist/sexist content), clinical users of LLMs desire to do right by their patient. Therefore, prompts in our workshop will reflect realistic clinical use cases as opposed to those from a malignant user.</p>

        </main>
      {/* Pass in whether we are on mobile to the footer */}
      <FooterBar isMobile={this.state.isMobile}/>
      

      </div>
    );
}
}
