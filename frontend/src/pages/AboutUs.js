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
import CardMedia from '@mui/material/CardMedia';


const AboutUs = () => {
    
function Copyright(props) {
    return (
      <Typography variant="body2" color="white" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
        TechBazaar
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
  const cards = [1, 2, 3, 4, 5, 6];

  const defaultTheme = createTheme();
  
  return (
    <div className="about-us-container">
      <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
   
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
         <h1 className="section-title">
         Who We Are
         </h1>
       
      </Typography> 
      <Typography variant="body1" align="center" paragraph>
      <p className="section-paragraph">
        TechBazar is your one-stop destination for all your IT needs. We specialize in offering a wide range of top-notch IT equipment, including laptops and desktop PCs, tablets, smartphones, and cameras. With the convenience of online ordering, TechBazar makes it easy for you to find and purchase the latest and most reliable technology products. Explore our diverse selection and stay ahead in the world of digital innovation with TechBazar.
     </p>
      </Typography>
    </Container><br></br><br></br>
      {/* End hero unit */}
     

 


      <div className="section section-right" >        <div className="section-content">
          <h1 className="section-title">What We Do</h1>
          <p className="section-paragraph">
          At TechBazar, we specialize in providing cutting-edge solutions for your computer hardware needs. Our dedicated team is committed to offering a curated selection of top-quality components, ensuring that you have access to the latest and most reliable hardware. Whether you're building a high-performance PC or upgrading your existing system, we've got you covered. Explore our extensive range of processors, graphics cards, motherboards, and more, and experience the power of precision and performance with TechBazar.          </p>
        </div>
        <div className="section-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0IOBdW--s6pPpI6poGwjW4ejsqQmjq8-T6KxASO77IF7026tNl8OzrxUjQ5BEmn_FTE&usqp=CAU" alt="Placeholder" />
        </div>
      </div>

    
      <div className="section section-right" >
        <div className="section-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7KcdbAFNCEl_D3i1bfwNmQZHo14nzRRBkxfdtNDGoIaMl2eqkAHVOiUlP4mWzQ_R95_o&usqp=CAU" alt="Placeholder" />
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
      
      <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                     
                      pt: '100%',
                    }}
                    image="https://us.123rf.com/450wm/wrightstudio/wrightstudio1702/wrightstudio170200920/72556437-femme-utilise-une-tablette-presse-sur-%C3%A9cran-virtuel-et-s%C3%A9lection-best-seller.jpg?ver=6"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Seller
                    </Typography>
                    <Typography>
                    Sellers on TechBazaar, our valued partners, showcase innovative tech products, providing customers with a diverse range of cutting-edge solutions to meet their digital needs.
                    </Typography>
                  </CardContent>
                 
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      
      {/* Footer */}
      <Box  component="footer">
        
        <Typography
          variant="subtitle1"
          align="center"
         // color="text.secondary"
          style={{ color: 'white' }}

          component="p"
        >
 TechBazaar. All rights reserved.
         </Typography>
        <Copyright />
      </Box><br></br>
      {/* End footer */}
    </div>
    
  );
}

export default AboutUs;
