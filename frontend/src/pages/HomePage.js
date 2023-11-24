import React from 'react';
import {
  Typography,
  Grid,
  Button,
  Paper,
  Link,
} from '@mui/material';
import { styled } from '@mui/system';
import MainFeaturedPost from './mainFeaturedPost';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const mainFeaturedPost = {
  title: ' Welcome to TechBazaar, your ultimate destination for cutting-edge technology! ',
  description:
    "Explore a vast array of high-quality products, including computers, phones, electronics, laptops, tablets, smartphones, and wearables. We curate a diverse selection of top brands, from the sleek and innovative Apple and the reliable HP to the trendsetting Samsung and the performance-driven Lenovo.", 
  image: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/2-produits-high-tech-reconditionnes.jpeg',
  imageText: 'main image description',
};

const StyledButton = styled(Button)({
  margin: theme => theme.spacing(1),
});

const StyledTypography = styled(Typography)({
});

const StyledLink = styled(Link)({
  color: 'white', 
});


const cardMediaImages = [
  'https://www.apple.com/v/ipad-10.9/c/images/overview/hero/hero__ecv967jz1y82_large_2x.jpg',
  'https://www.hp.com/content/dam/sites/worldwide/homepage/images/Mask-Group-279@2x.png',
  'https://www.toshiba-storage.com/wp-content/uploads/2017/09/feature_2-1.png',
  'https://images.samsung.com/is/image/samsung/assets/fr/watches/Watch_PCD_WatchNew_Watch6Classic_pc.png?$376_376_PNG$',
  'https://www.nokia.com/sites/default/files/styles/c5_media_100_ratio_1_1/public/2023-01/microsoftteams-image-2_0.png.webp',
  'https://www.logicom-europe.com/5841-large_default/xtrem-30.jpg',
];

const cardContentData = [
  {
    title: 'Apple',
    description: 'Step into the future of computing with Apple where innovation meets featherweight design. Experience the lightest and most efficient computer that redefines your digital journey.',
  },
  {
    title: 'HP',
    description: ' Elevate your expectations with HP where trust meets innovation. Experience the reliability of a brand renowned for delivering exceptional products and services.',
  },
  {
    title: 'Toshiba',
    description: ' Transform your computing setup with Toshiba. Explore and enhance your experience with a range of top-notch computer accessories, because perfection is in the details.',
  },
  {
    title: 'Samsung',
    description: 'Unlock a new perspective on time with Samsung. Redefine your experience and witness time in a whole new light.',
  },
  {
    title: 'Nokia',
    description: 'Elevate your experience with Nokia where you can access the latest AI technologies, showcasing unparalleled innovation and efficiency in the realm of automation.',
  },
  {
    title: 'Logicom',
    description: 'Embark on an adventurous journey with the latest shockproof technology from Logicom, ensuring durability and innovation every step of the way.',
  },
];const HomePage = () => {
  return (
    <div>
         <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <StyledTypography variant="h4" component="h4">
              Welcome to TechBazaar! 
            </StyledTypography>
            <StyledTypography variant="body1" component="p">
              TechBazar is your one-stop destination for all your IT needs. We specialize in offering a wide range of top-notch IT equipment, inclu...
            </StyledTypography>
          
          </div>
        </Grid>
        <Grid item xs={12}>
         
        <div className="section section-right" >        <div className="section-content">
          <h1 className="section-title">Best-selling</h1>
          <p className="section-paragraph">
          Ready to expand your smart home? We're bringing you the best deals of 2023 on the retailer's best-selling smart devices, from Echo Echo Shows and Fire tablets to Kindle Paperwhites and Fire TVs. Here are the best gadgets to splurge (and save) on this year.              </p>
        </div>
        <div className="section-image">
        <img src="https://s.yimg.com/ny/api/res/1.2/AOV6Vht2w3tfT6Q3Ad5hXg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg7Y2Y9d2VicA--/https://media.zenfs.com/en/variety.com/ff63100ca96fbaed74ca655bf2cfee61" alt="Placeholder" />
        </div>
      </div>


            <div className="section section-right" >
        <div className="section-image">
          <img src="https://metapod.com/cdn/shop/articles/tech-gift-for-him-2022-metapod.webp?v=1660778620&width=600" alt="Placeholder" />
        </div>
        <div className="section-content" style={{ marginLeft: '20px' }}>
          <h1 className="section-title">Technology Device</h1>
          <p className="section-paragraph">
          Explore the world of cutting-edge technology devices, a seamless blend of innovation and functionality designed to enhance your digital lifestyle.
          From sleek smartphones to powerful laptops and smart home gadgets, discover the latest advancements that keep you connected, entertained, and productive in today's fast-paced tech landscape.
                  </p>
        </div>
      </div>
      <div style={{ marginTop: "50px", textAlign: "center" }}>
            <StyledTypography variant="h4" component="h4">
              Products..
            </StyledTypography>
               {/* End hero unit */}
        
          <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cardMediaImages.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '100%',
                    }}
                    image={image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    {cardContentData[index] ? ( // Check if data at index exists
                      <>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cardContentData[index].title}
                        </Typography>
                        <Typography>
                          {cardContentData[index].description}
                        </Typography>
                      </>
                    ) : (
                      <Typography>
                        Data not available for index {index}.
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      
      {/* Footer */}
            <StyledTypography variant="body1" component="p">
              showing products..
            </StyledTypography>
            <StyledButton variant="contained" color="primary">
            <Link href='/products' sx={{color:'white'}}>
              See All Products
              </Link>
            </StyledButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <StyledTypography variant="h4" component="h4">
              Need Some Help!
            </StyledTypography>
            <StyledTypography variant="body1" component="p">
              If you have any questions or concerns, please call us on 01481 238565 between 09.00 and 16.30. For general enquiries, you can also email health@msg.gg.
            </StyledTypography>
            <StyledButton variant="contained" color="primary">
              <Link href='/AboutUs' sx={{color:'white'}}>
                About Us
              </Link>
            </StyledButton>
          </div>
        </Grid>
      </Grid>
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={5} sm={5}>
          <TextField
            id="Question1"
            name="Question1"
            label="Question 1"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={5} sm={5}>
          <TextField
            
            id="Question2"
            name="Question2"
            label="Question 2"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={5} sm={5}>
          <TextField
            id="Question3"
            name="Question3"
            label="Question 3"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={5} sm={5}>
          <TextField
            id="Question4"
            name="Question4"
            label="Question 4"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
       
       
       
        
      </Grid><br></br>
      <StyledButton variant="contained" color="primary">
              <StyledLink href='/AboutUs'>
               Submit
              </StyledLink>
            </StyledButton>
    </React.Fragment>
    </div>
  );
};

export default HomePage;
