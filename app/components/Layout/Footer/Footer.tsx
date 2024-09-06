// components/Footer.tsx
import React from 'react';
import { Container, Typography, Link, Box, Divider } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        p: 3,
        mt: 'auto',
        // borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Link href="/" color="inherit" sx={{ mx: 1 }}>
            Home
          </Link>
          <Link href="/about" color="inherit" sx={{ mx: 1 }}>
            About Us
          </Link>
          <Link href="/contact" color="inherit" sx={{ mx: 1 }}>
            Contact Us
          </Link>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" align="center" color="textSecondary">
          Your Company Address | Phone Number | Email
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
