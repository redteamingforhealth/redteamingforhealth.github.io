// import React from 'react';
import ThemeSwitch from './darkModeToggle';

import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Mate } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@mui/material';
import { faGithubSquare, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import Tooltip from '@mui/material/Tooltip';


const mate = Mate({ subsets: ['latin'], weight: ["400"] });

export function obfuscate( domain, em_name ) { 
    // Credit to Dan Jurafsky for this function.
    return em_name + '@' + domain;
}

export default class FooterBar extends React.Component<any, any> {

    // Give it state for isMobile
    constructor(props) {
      super(props);
      this.state = {
        isMobile: props.isMobile
      };
    }

    componentDidMount() {
      this.setState({isMobile: this.props.isMobile});
    }

    componentDidUpdate(prevProps) {
      if (prevProps.isMobile !== this.props.isMobile) {
        this.setState({isMobile: this.props.isMobile});
      }
    }

  render( ) {

  return (
    // Make sure this is fixed tot he bottom when scrolling.
    // Make the background color white if not in dark mode; black if in dark mode.
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"/>

    {/* Apply tailwind styling to the box */}
    <Box className="dark:bg-gray-900 bg-white" style={{position: 'fixed', bottom: 0, width: '100%', zIndex: 1000}}>
    {/* <Box style={{position: 'fixed', bottom: 0, width: '100%', zIndex: 1000, backgroundColor: this.props.theme.resolvedTheme === 'dark' ? "#1E1E1E" : 'white'}}> */}
    {/* <Box style={{position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'white', zIndex: 1000}}> */}
    {/* Add four links: Home, Projects, Writing, CV. Align them right. Add nothing else */}
    <Toolbar variant="dense">

      {/* <IconButton 
        color="inherit" 
        href={"mailto:" + obfuscate('cs.toronto.edu', 'coopermj')}
        children={
            <Tooltip title={obfuscate('cs.toronto.edu', 'coopermj')} placement="top" arrow>
                <FontAwesomeIcon 
                icon={faEnvelope} 
                size="1x"/>
            </Tooltip>
            }>
        </IconButton>

        <IconButton 
        color="inherit" 
        href={"https://scholar.google.com/citations?hl=en&user=hfNx8qUAAAAJ"}
        children={
            <Tooltip title="Google Scholar" placement="top" arrow>
                <i className="ai ai-google-scholar-square ai-1x"></i>
            </Tooltip>
        }>
        </IconButton>

        <IconButton 
        color="inherit" 
        href={"https://github.com/cooper-mj"}
        children={
            <Tooltip title="GitHub" placement="top" arrow>
                <FontAwesomeIcon 
                icon={faGithubSquare} 
                size="1x"/>
            </Tooltip>
            }>
        </IconButton>

        <IconButton 
        color="inherit" 
        href={"https://www.linkedin.com/in/coopermj/"}
        children={
            <Tooltip title="LinkedIn" placement="top" arrow>
                <FontAwesomeIcon 
                icon={faLinkedin} 
                size="1x"/>
            </Tooltip>
            }>
        </IconButton>

        <IconButton 
        color="inherit" 
        href={"https://x.com/coopermj_aiml"}
        children={
            <Tooltip title="X (Twitter)" placement="top" arrow>
                <FontAwesomeIcon 
                icon={faXTwitter} 
                size="1x"/>
            </Tooltip>
            }>
        </IconButton> */}

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={mate.className} style={{textAlign: 'center', fontSize: '14px'}}>
        { this.state.isMobile ? (
            <>Made with &#10084;&#65039; at UofT</>
         ) : 
          (
            <>Made with &#10084;&#65039; at UofT (w/ a little help from <a href='https://nextjs.org'>next.js</a>).</>
          )}
      </Typography>

      <ThemeSwitch />
    </Toolbar>
    </Box>
    {/* </div> */}
    <style jsx>{`
    #heart {
        font-size: 14px;
        text-decoration: none;
        cursor: text;
    }
      `}</style>
    </>

    
    
    // <>
    // <br></br>
    // <br></br>
    // <footer id="footer">
    //   <table id="footerTable">
    //     <tbody>
    //         <tr>
    //         <td id="rightCol">
    //             {/* Links to pages */}
    //             <ThemeSwitch />
    //         </td>
    //         <td id="rightCol">
    //             {/* Links to pages */}
    //             <ThemeSwitch />
    //         </td>
    //         <td id="rightCol">
    //             {/* Links to pages */}
    //             <ThemeSwitch />
    //         </td>
    //         <td id="rightCol">
    //             {/* Links to pages */}
    //             <ThemeSwitch />
    //         </td>
    //         <td id="rightCol">
    //             {/* Links to pages */}
    //             <ThemeSwitch />
    //         </td>
    //         <td id="tableCol">
    //             <p id="footertext">Made with <a href="https://xinlanemilyhu.com" id="heart">&#10084;&#65039;</a> by Michael (w/ a little help from <a href="https://nextjs.org">next.js</a>).</p>
    //         </td>
    //         <td id="rightCol">
    //             <ThemeSwitch />
    //         </td>
    //         </tr>
    //     </tbody>
    //   </table>
    // </footer>
    // {/* </div> */}
    // <style jsx>{`
    // #tableCol {
    //   width:100%;
    //   vertical-align: middle;
    //   padding-top: 0px;
    //   padding-left: 20px;
    // }

    // #rightCol {
    //   padding-right: 20px;
    //   text-align: center;
    //   padding-bottom: 5px;
    // }

    // #wrapper {
    //   position: fixed;
    //   bottom: 0
    // }

    // #footer {
    //   border-top: double;
    //   position: fixed;
    //   bottom: 20px;
    //   height: 25px;
    //   width: 100%;
    // }

    // #footertext {
    //   font-size: 14px;
    // }
      
    // #heart {
    //     font-size: 14px;
    //     text-decoration: none;
    //     cursor: text;
    // }
    //   `}</style>
    // </>
  )
}
}