"use client"
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { ToggleButton } from '@mui/material';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const dark = theme === 'dark' ? true : false;

  const [checked, setChecked] = useState(dark);
  const [mounted, setMounted] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    console.log(nextChecked)
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setTheme(checked ? 'dark' : 'light');
  }, [checked, setTheme]);

  if (!mounted) return null;

  return (
    <ToggleButton
    style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}
    value="check"
    selected={checked}
    onChange={() => {
      setChecked(!checked);
    }}
  >
    {checked ? <WbSunnyIcon style={{height: '20px', fill: "white"}}/> : <Brightness3Icon style={{height: '20px', fill: "black"}}/>}
  </ToggleButton>
  );
};

export default DarkModeToggle;