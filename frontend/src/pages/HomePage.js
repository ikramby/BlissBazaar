import React from "react";
import { Typography, Grid, Button, Paper, Link } from "@mui/material";
import { styled } from "@mui/system";
import MainFeaturedPost from "./mainFeaturedPost";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Footer from "./Footer";
import MediaCustomer from '../component/mediaCustomer';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ImageList from "@mui/material/ImageList";
import  ImageListItem from '@mui/material/ImageListItem';
import Box from "@mui/material/Box";

const mainFeaturedPost = {
  title:
    " Welcome to TechBazaar, your ultimate destination for cutting-edge technology! ",
  description:
    "Explore a vast array of high-quality products, including computers, phones, electronics, laptops, tablets, smartphones, and wearables. We curate a diverse selection of top brands, from the sleek and innovative Apple and the reliable HP to the trendsetting Samsung and the performance-driven Lenovo.",
  image:
    "https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/2-produits-high-tech-reconditionnes.jpeg",
  imageText: "main image description",
};

//const StyledButton = styled(Button)({
//margin: theme => theme.spacing(1),
//});

const StyledTypography = styled(Typography)({
  color: "white",
});

const StyledLink = styled(Link)({
  color: "white",
});

const StyledButton = styled(Button)({
  color: "white",
  margin: (theme) => theme.spacing(1),
});

const cardMediaImages = [
  "https://www.apple.com/v/ipad-10.9/c/images/overview/hero/hero__ecv967jz1y82_large_2x.jpg",
  "https://www.hp.com/content/dam/sites/worldwide/homepage/images/Mask-Group-279@2x.png",
  "https://www.toshiba-storage.com/wp-content/uploads/2017/09/feature_2-1.png",
  "https://images.samsung.com/is/image/samsung/assets/fr/watches/Watch_PCD_WatchNew_Watch6Classic_pc.png?$376_376_PNG$",
  "https://www.nokia.com/sites/default/files/styles/c5_media_100_ratio_1_1/public/2023-01/microsoftteams-image-2_0.png.webp",
  "https://www.logicom-europe.com/5841-large_default/xtrem-30.jpg",
];

const cardContentData = [
  {
    title: "Apple",
    description:
      "Step into the future of computing with Apple where innovation meets featherweight design. Experience the lightest and most efficient computer that redefines your digital journey.",
  },
  {
    title: "HP",
    description:
      " Elevate your expectations with HP where trust meets innovation. Experience the reliability of a brand renowned for delivering exceptional products and services.",
  },
  {
    title: "Toshiba",
    description:
      " Transform your computing setup with Toshiba. Explore and enhance your experience with a range of top-notch computer accessories, because perfection is in the details.",
  },
  {
    title: "Samsung",
    description:
      "Unlock a new perspective on time with Samsung. Redefine your experience and witness time in a whole new light.",
  },
  {
    title: "Nokia",
    description:
      "Elevate your experience with Nokia where you can access the latest AI technologies, showcasing unparalleled innovation and efficiency in the realm of automation.",
  },
  {
    title: "Logicom",
    description:
      "Embark on an adventurous journey with the latest shockproof technology from Logicom, ensuring durability and innovation every step of the way.",
  },
];

const cardSold = [
  "https://www.jbhifi.com.au/cdn/shop/products/621604-Product-0-I-638096365749912894.jpg?v=1687310774",
  "https://www.tunisianet.com.tn/174879-large/pc-portable-hp-pavilion-gaming-15-ec0003nk-ryzen-5-32-go-sim-orange-offerte-60-go.jpg",
  "https://gamextreme.ph/cdn/shop/products/1_9ca1ec46-81e4-4f29-b0af-592b8ebd48d8_1024x1024.png?v=1617604331",
];
const cardContentSold = [
  {
    title: "Apple 20% Sale",
    description: "Apple MacBook Pro 14-inch with M2 Pro Chip/ 512GB SSD",
  },
  {
    title: "HP 25% Sale  ",
    description: " PAVILION GAMING 15-EC0003NK / RYZEN 5 / 32 GO",
  },
  {
    title: "Toshiba 30% Sale ",
    description: " Portable External Hard Drive 1TB USB 3.0 ",
  },
];

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:7000/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyClick = async (product) => {
    try {
      // Send a POST request to addToCart endpoint with product details
      await axios.post('http://localhost:7000/cart/addToCart', {
        imageUrl: product.imageUrl,
        name: product.name,
        price: product.price,
        quantity: 1, // You may adjust the quantity as needed
      });
  
      console.log('Product added to cart successfully');
    } catch (error) {
      console.error('Error adding product to cart', error);
    }
  };
  
  

  const itemData = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5l-eOwbd2zI8OPDaL--OM_WrHST_jl9TYwn0zf1DTjUhRBC3SOZj5VKsyZfdhwpLRKQ&usqp=CAU',
      title: 'Bed',
    },
    {
      img: 'https://assets-prd.ignimgs.com/2022/05/06/apple-accessory-sale-1651854444712.png',
      title: 'Books',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtgaBcXlyDA_LK-H6NrqZh9wMs6jrTmz2DSOjOWu7bQIu0AoAAIp5yapgR3pcZfZgiuc&usqp=CAU',
      title: 'Sink',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQFdOp1sm9K1ZwFHgIa-igUMrgsyTDJNvwuHwQt5QckRapaJo4VJHZQojC-xN-YvFqs94&usqp=CAU',
      title: 'Kitchen',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgOpS7LyrX1g2oZ77IaarjvLfVA0y4W5tIZP7f8J7cG7CODr3ULhOOPQDQGi58RIUKPk&usqp=CAU',
      title: 'Blinds',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMYEJgI2GtUSLNrQVON1jY5LllpsTsTEJYaD1WDzGqFpYZ_eIzVgvmYprDlSldmMgWsUo&usqp=CAU',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRiyH1_OcdzCatkeUUgql544d96DJgAu0ekR4qJ0MjIzHQhP_K4w8HI2IERPKtaJ0tI8w&usqp=CAU',
      title: 'Doors',
    },
    {
      img: 'https://www.hp.com/fr-fr/shop/Html/Merch/Images/8C1D3EA-ABF_7_390x286.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://www.hp.com/fr-fr/shop/Html/Merch/Images/c08482761_390x286.jpg',
      title: 'Storage',
    },
    {
      img: 'https://www.hp.com/fr-fr/shop/Html/Merch/Images/7Q884EA-ABF_2_390x286.jpg',
      title: 'Candle',
    },

  ];
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: '',
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const fullName = `${formData.firstName} ${formData.lastName}`;
  
      const response = await axios.post('http://localhost:7000/message/', {
        fullName,
        subject: formData.message, 
      });
  
      console.log('Message created successfully:', response.data);
  
    } catch (error) {
      console.error('Error creating message:', error);
    }
  };
  
  return (
    <div>
      <MainFeaturedPost post={mainFeaturedPost} />

      <Grid container spacing={3}>
        {/*
<Grid item xs={12} md={6}>
  <StyledButton variant="contained" color="primary">
    Main Collection
  </StyledButton>
</Grid>
<Grid item xs={12} md={6}>
  <StyledButton variant="contained" color="primary">
    View All Products
  </StyledButton>
</Grid>
*/}

        <Grid item xs={12}>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <StyledTypography variant="h4" component="h4">
              Welcome to TechBazaar!
            </StyledTypography>
            <StyledTypography variant="body1" component="p">
              TechBazar is your one-stop destination for all your IT needs. We
              specialize in offering a wide range of top-notch IT equipment.
            </StyledTypography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className="section section-right">
            <div className="section-content" style={{ color: "white" }}>
              <h1 className="section-title">Best-selling</h1>
              <p className="section-paragraph">
                Ready to expand your smart home? We're bringing you the best
                deals of 2023 on the retailer's best-selling smart devices, from
                Echo Echo Shows and Fire tablets to Kindle Paperwhites and Fire
                TVs. Here are the best gadgets to splurge (and save) on this
                year.{" "}
              </p>
            </div>

            {/*
             <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />

             */}

            <div className="section-image">
            <Box sx={{ width: 500, height: 450 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
            {/*
            <img
                src="/images/HomePage1.jpg"
                alt="Placeholder"
              /> */}  
            </div>
          </div>
  
   


          <div className="section section-right">
            <div className="section-image">
              <img
                src="/images/HomePage2.jpg"
                alt="Placeholder"
              />
            </div>

            <div
              className="section-content"
              style={{ marginLeft: "20px", color: "white" }}
            >
              <h1 className="section-title">Technology Device</h1>
              <p className="section-paragraph">
                Explore the world of cutting-edge technology devices, a seamless
                blend of innovation and functionality designed to enhance your
                digital lifestyle. From sleek smartphones to powerful laptops
                and smart home gadgets, discover the latest advancements that
                keep you connected, entertained, and productive in today's
                fast-paced tech landscape.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <StyledTypography variant="h4" component="h4">
              Our Partner{" "}
            </StyledTypography>
            <br></br>
            <div className="section-image">
              <img
                src=" /images/OurPartner.jpg"
                alt="Placeholder"
              />
              {/*
      https://hotdealszone.in/wp-content/uploads/2017/01/online-mobiles-brands.png 
      https://www.91laptop.com/in/wp-content/uploads/2022/08/best-laptop-brands-in-india-1024x394.jpg*/}
            </div>{" "}

            {/*  div get all product */}
            <br></br>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

              <Container sx={{ py: 8 }} maxWidth="md">
                <br></br>
                <StyledTypography variant="h4" component="h4">
                  New Products!
                </StyledTypography>
                <br></br>
                <Grid container spacing={4}>
                  {products
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, 6)
                    .map((product, index) => (
                      <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <CardMedia
                            component="div"
                            sx={{
                              pt: "100%",
                            }}
                            image={product.imageUrl}
                          />
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                              {product.name}
                            </Typography>
                            <Typography>{product.description}</Typography>
                          </CardContent>
                          <CardActions style={{ justifyContent: "center" }}>
                            {/* <Button size="small">View</Button> */}
                            <Button size="small"onClick={() => handleBuyClick(product)}>
                              Buy</Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
                <br></br>
                <StyledButton variant="contained" color="primary" href="/allproduct">
                  See All Products
                </StyledButton>
              </Container>

            </div>
            {/* end div get all product */}



            <br></br> <br></br>
            <Container sx={{ py: 8 }} maxWidth="md">
              <StyledTypography variant="h4" component="h4">
              Arriving Soon
                            </StyledTypography>
              <br></br>

              <Grid container spacing={4}>
                {cardMediaImages.map((image, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          pt: "100%",
                        }}
                        image={image}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        {cardContentData[index] ? (
                          <>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
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
            {/* <StyledTypography variant="h4" component="h4">
              Sale!
            </StyledTypography>
            <Container sx={{ py: 8 }} maxWidth="md">
              <Grid container spacing={4}>
                {cardSold.map((image, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          pt: "100%",
                        }}
                        image={image}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        {cardContentSold[index] ? (
                          <>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {cardContentSold[index].title}
                            </Typography>
                            <Typography>
                              {cardContentSold[index].description}
                            </Typography>
                          </>
                        ) : (
                          <Typography>
                            Data not available for index {index}.
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions style={{ justifyContent: "center" }}>
                        <Button size="small">View</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container> */}
          </div>
        </Grid>



        <Grid item xs={12}>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <StyledTypography variant="h4" component="h4">
              Order your computer hardware at competitive prices at TechBazaar!{" "}
            </StyledTypography>
            <StyledTypography variant="body1" component="p">
              TechBazaar is your trusted partner for all your computer hardware
              needs in Tunisia. Since 2008, we have offered our customers,
              whether professionals or individuals, a wide range of IT items,
              including laptops, desktop PCs, tablets, printers, accessories
              such as screens, keyboards , mice, headsets and cables. As
              representatives of major brands, we guarantee competitive prices
              on the market, accompanied by quality after-sales service. We are
              proud to offer you personalized advice to help you make the best
              choice. In addition, we are committed to providing free delivery
              throughout Tunisia. At TechBazaar, we simplify your online
              shopping experience. You can place an order and benefit from
              advantageous discounts directly on our merchant site. Thanks to
              our professional logistics partners, you benefit from free home
              delivery, with cash on delivery. Trust TechBazaar for all your
              computer hardware needs. We do everything we can to offer you an
              easy online shopping experience, with the best prices on the
              market and fast and efficient after-sales service.
            </StyledTypography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <StyledTypography variant="h4" component="h4">
              Need Some Help!
            </StyledTypography>
            <StyledTypography variant="body1" component="p">
              If you have any questions or concerns, please call us on 71 000
              000 or send us your questions.
            </StyledTypography>
            <br></br>
          </div>
        </Grid>
      </Grid>
      <React.Fragment>
        <Typography variant="h6" gutterBottom style={{ color: "white" }}>
Contact Us        </Typography>
        <Grid container spacing={4}>
          
        <Grid item xs={5} sm={5}>
        <TextField
          id="firstName"
          name="firstName"
          label="FirstName"
          fullWidth
          autoComplete="given-name"
          variant="standard"
          style={{ color: 'white' }}
          value={formData.firstName}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={5} sm={5}>
        <TextField
          id="lastName"
          name="lastName"
          label="LastName"
          fullWidth
          variant="standard"
          style={{ color: 'white' }}
          value={formData.lastName}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="message"
          name="message"
          label="Message"
          multiline
          fullWidth
          rows={4}
          variant="standard"
          value={formData.message}
          onChange={handleFormChange}
        />
      </Grid>

        
        </Grid>
        <br></br>
        <StyledButton variant="contained" color="primary" onClick={handleFormSubmit}>
  <StyledLink >Submit</StyledLink>
</StyledButton>

        <br></br>
      </React.Fragment>
      <br></br>

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
        <Footer />
      </Container>

      {/* End footer */}
    </div>
  );
};

export default HomePage;
