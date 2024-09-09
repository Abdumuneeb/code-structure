"use client"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 767,
        md: 980,
        lg: 1500,
        xl: 1536,
      },
    },
  });

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return(
    <div className={`flex flex-col min-h-screen min-w-screen`}>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
