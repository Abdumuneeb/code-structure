"use client"
import { Container, Grid2 } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SideBar from "../SidebarNavigation";

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

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return(
    <div className={`flex flex-col min-h-screen min-w-screen`}>
        <ThemeProvider theme={theme}>
            <Container>
                <Box>
                    <Grid2 container className="pt-10">
                        <Grid2 size={{xs:2.5}}>
                           <SideBar/>
                        </Grid2>
                        <Grid2 size={{xs:12,sm: 9.5 }}>
                            {children}
                        </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </ThemeProvider>
    </div>
  )
}
