import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Button,
  Container,
} from "@mui/material";
import Footer from "./Footer";
import axios from "axios";
import EditProfileForm from "../component/EditProfileForm";

const UserProfileCard = styled(Card)({
  marginTop: "-50px",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "500px",
  borderRadius: "20px",
  position: "relative",
  zIndex: 1,
});

export default function PageLayout() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    description: "",
  });

  const email = localStorage.getItem("email");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/tech/getMyInformation/${email}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const handleEditProfile = () => {
    setIsEditFormOpen(true);
  };

  const handleSaveSuccess = (updatedData) => {
    setUserData(updatedData);
    alert("Profile updated successfully");
  };

  const handleCloseForm = () => {
    setIsEditFormOpen(false);
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
        <UserProfileCard>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ width: 90, height: 90, mb: 2 }}
                src={userData.avatar || "/images/avatar.jpg"}
                alt={`${userData.firstName} ${userData.lastName}`}
              />
              <Typography variant="h5" gutterBottom>
                {userData.firstName} {userData.lastName}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                @{userData.firstName}
              </Typography>
              <Typography variant="body2" sx={{ px: 3, textAlign: "center" }}>
                {userData.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={handleEditProfile}
              >
                Edit Profile
              </Button>
            </Box>
          </CardContent>
        </UserProfileCard>

        <EditProfileForm
          open={isEditFormOpen}
          onClose={handleCloseForm}
          userData={userData}
          onSaveSuccess={handleSaveSuccess}
        />
      </Container>

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
    </>
  );
}
