import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'; // Updated import
import './AboutUs.css';


const AboutUs = () => {
    
function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const tiers = [
    {
      title: 'Admin',
   //   price: '0',
      description: [
        '10 users included',
        '2 GB of storage',
        'Help center access',
        'Email support',
      ],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Customer',
     // subheader: 'Most popular',
    //  price: '15',
      description: [
        '20 users included',
        '10 GB of storage',
        'Help center access',
        'Priority email support',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Seller',
   //   price: '30',
      description: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },
  ];
  
  const footers = [
    {
      title: 'TechBazar',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];
  
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();
  
  return (
    <div className="about-us-container">
      <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          TechBazar
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Product
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <br></br> <br></br>
      <Container>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        style={{ color: 'white' }}
        gutterBottom
      >
        Who We Are
      </Typography> 
      <Typography variant="body1" align="center" paragraph>

        TechBazar is your one-stop destination for all your IT needs. We specialize in offering a wide range of top-notch IT equipment, including laptops and desktop PCs, tablets, smartphones, and cameras. With the convenience of online ordering, TechBazar makes it easy for you to find and purchase the latest and most reliable technology products. Explore our diverse selection and stay ahead in the world of digital innovation with TechBazar.
      </Typography>
    </Container><br></br><br></br><br></br><br></br>
      {/* End hero unit */}
     

 
   
   

   

    



   


      <div className="section section-left">
        <div className="section-content">
          <h1 className="section-title">What We Do</h1>
          <p className="section-paragraph">
          At TechBazar, we specialize in providing cutting-edge solutions for your computer hardware needs. Our dedicated team is committed to offering a curated selection of top-quality components, ensuring that you have access to the latest and most reliable hardware. Whether you're building a high-performance PC or upgrading your existing system, we've got you covered. Explore our extensive range of processors, graphics cards, motherboards, and more, and experience the power of precision and performance with TechBazar.          </p>
        </div>
        <div className="section-image">
          <img src="https://via.placeholder.com/324x397" alt="Placeholder" />
        </div>
      </div>

    
      <div className="section section-right" >
        <div className="section-image">
          <img src="https://via.placeholder.com/324x397" alt="Placeholder" />
        </div>
        <div className="section-content" style={{ marginLeft: '20px' }}>
          <h1 className="section-title">When We Started</h1>
          <p className="section-paragraph">
          Founded 2023, we embarked on a mission to provide enthusiasts and professionals alike with unparalleled access to cutting-edge innovations. Since our inception, we have been dedicated to delivering quality, reliability, and a seamless shopping experience. Join us in celebrating the milestones of our technological journey and discover the evolution of excellence at TechBazar.          </p>
        </div>
      </div>
      </ThemeProvider>
  
     

        <Container>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        style={{ color: 'white' }}
        gutterBottom
      >
      Our Makers
      </Typography> 
      <Typography variant="body1" align="center" paragraph>

      We believe in the entrepreneurial spirit of our makers, offering a seamless and supportive environment to connect with tech enthusiasts worldwide. Join TechBazar as a seller, and let your creations become part of the digital revolution, shaping the future of IT excellence.</Typography>
      </Container>
        <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
     



     {/* Footer */}

     <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>

     
      {/* End footer */}
    </div>
    
  );
}

export default AboutUs;
