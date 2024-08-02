import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Mate } from 'next/font/google'

const mate = Mate({ subsets: ['latin'], weight: ["400"] });

export default function ButtonAppBar() {
  return (
    <Box>
        {/* Add four links: Home, Projects, Writing, CV. Align them right. Add nothing else */}
        <Toolbar variant="dense">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
        {/* Use the Mate font -- make font size bigger*/}
          <Button color="inherit" href="/" className={mate.className + " text-md"}>Home</Button>
          {/* <Button color="inherit" href="/bio" className={mate.className + " text-md"}>Bio</Button> */}
          {/* <Button color="inherit" href="/projects" className={mate.className + " text-md"}>Projects</Button> */}
          {/* <Button color="inherit" href="/writing" className={mate.className + " text-md"}>Writing</Button> */}
          {/* <Button color="inherit" className={mate.className}>CV</Button> */}
        </Toolbar>
    </Box>
  );
}