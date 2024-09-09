import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo Section */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src="/logo.png" alt="Logo" style={{ height: 40 }} /> {/* Adjust the logo height as needed */}
            </Link>
          </Typography>

          {/* Navigation Links */}
          <div>
            <Button color="inherit">
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                About Us
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                Contact Us
              </Link>
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
