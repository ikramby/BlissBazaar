import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper"; // Updated import
import "./AboutUs.css";
import CardMedia from "@mui/material/CardMedia";
import Footer from "./Footer";

const AboutUs = () => {
  const tiers = [
    {
      title: "Admin",
      //   price: '0',
      description: [
        "10 users included",
        "2 GB of storage",
        "Help center access",
        "Email support",
      ],
      buttonText: "Sign up for free",
      buttonVariant: "outlined",
    },
    {
      title: "Customer",
      // subheader: 'Most popular',
      //  price: '15',
      description: [
        "20 users included",
        "10 GB of storage",
        "Help center access",
        "Priority email support",
      ],
      buttonText: "Get started",
      buttonVariant: "contained",
    },
    {
      title: "Seller",
      //   price: '30',
      description: [
        "50 users included",
        "30 GB of storage",
        "Help center access",
        "Phone & email support",
      ],
      buttonText: "Contact us",
      buttonVariant: "outlined",
    },
  ];

  const footers = [
    {
      title: "TechBazar",
      description: ["Team", "History", "Contact us", "Locations"],
    },
    {
      title: "Features",
      description: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Developer stuff",
        "Another one",
      ],
    },
    {
      title: "Resources",
      description: [
        "Resource",
        "Resource name",
        "Another resource",
        "Final resource",
      ],
    },
    {
      title: "Legal",
      description: ["Privacy policy", "Terms of use"],
    },
  ];

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
  const defaultTheme = createTheme();

  return (
    <div className="about-us-container">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        {/* Hero unit */}
        <br></br> <br></br>
        <Container>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            style={{ color: "white" }}
            gutterBottom
          >
            <h1 className="section-title">Who We Are</h1>
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            <p className="section-paragraph">
              TechBazar is your one-stop destination for all your IT needs. We
              specialize in offering a wide range of top-notch IT equipment,
              including laptops and desktop PCs, tablets, smartphones, and
              cameras. With the convenience of online ordering, TechBazar makes
              it easy for you to find and purchase the latest and most reliable
              technology products. Explore our diverse selection and stay ahead
              in the world of digital innovation with TechBazar.
            </p>
          </Typography>
        </Container>
        <br></br>
        <br></br>
        {/* End hero unit */}
        <div className="section section-right">
          {" "}
          <div className="section-content">
            <h1 className="section-title">What We Do</h1>
            <p className="section-paragraph">
              At TechBazar, we specialize in providing cutting-edge solutions
              for your computer hardware needs. Our dedicated team is committed
              to offering a curated selection of top-quality components,
              ensuring that you have access to the latest and most reliable
              hardware. Whether you're building a high-performance PC or
              upgrading your existing system, we've got you covered. Explore our
              extensive range of processors, graphics cards, motherboards, and
              more, and experience the power of precision and performance with
              TechBazar.{" "}
            </p>
          </div>
          <div className="section-image">
            <img
              src="https://www.scoopearth.com/wp-content/uploads/2022/11/Benefits-and-Drawbacks-of-Starting-An-Online-Store-Tycoonstory.jpg"
              alt="Placeholder"
            />
          </div>
        </div>
        <div className="section section-right">
          <div className="section-image">
            <img
              src="https://www.wofs.com/wp-content/uploads/2018/06/jump-start.jpg"
              alt="Placeholder"
            />
          </div>
          <div className="section-content" style={{ marginLeft: "20px" }}>
            <h1 className="section-title">When We Started</h1>
            <p className="section-paragraph">
              Founded 2023, we embarked on a mission to provide enthusiasts and
              professionals alike with unparalleled access to cutting-edge
              innovations. Since our inception, we have been dedicated to
              delivering quality, reliability, and a seamless shopping
              experience. Join us in celebrating the milestones of our
              technological journey and discover the evolution of excellence at
              TechBazar.{" "}
            </p>
          </div>
        </div>
      </ThemeProvider>

      <Container>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          style={{ color: "white" }}
          gutterBottom
        >
          Our Makers
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          We believe in the entrepreneurial spirit of our makers, offering a
          seamless and supportive environment to connect with tech enthusiasts
          worldwide. Join TechBazar as a seller, and let your creations become
          part of the digital revolution, shaping the future of IT excellence.
        </Typography>
      </Container>

      {/* End hero unit */}

      <Container sx={{ py: 8 }} maxWidth="md">
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
    </div>
  );
};

export default AboutUs;
