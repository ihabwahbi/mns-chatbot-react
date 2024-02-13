import * as React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import Hero from './Hero'
import Box from '@mui/material/Box';


function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Hero></Hero>
    </Box>
  );
}
export default App;