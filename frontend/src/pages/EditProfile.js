import React, { useState, useEffect, useContext } from "react";
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
import { AuthContext } from "../component/AuthContext";
import EditProfileForm from "../component/EditProfileForm";

// User profile card styles
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
  // Retrieve first name and last name from localStorage
  //const { firstName } = useContext(AuthContext);
  //const { lastName } = useContext(AuthContext);
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("token", localStorage.getItem("token"));
        console.log("id", localStorage.getItem("id"));

        const response = await axios.get(
          `http://localhost:7000/edit-profile/${localStorage.getItem(
            "id"
          )}?token=${localStorage.getItem("token")}`
        );

        console.log("response", response.data);
        setUserData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
        });
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

  const handleCloseForm = () => {
    setIsEditFormOpen(false);
  };

  const saveUserData = (updatedData) => {
    setUserData(updatedData);
  };

  return (
    <>
      {/* Profile section */}
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
                src="/images/avatar.jpg"
                alt="User Name"
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
              <EditProfileForm
                open={isEditFormOpen}
                onClose={handleCloseForm}
                userData={userData}
                saveUserData={saveUserData}
              />
            </Box>
          </CardContent>
        </UserProfileCard>
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

      {/* End footer */}
    </>
  );
}
