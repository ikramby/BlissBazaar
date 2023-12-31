import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import axios from "axios";

const EditProfileForm = ({ open, onClose, userData, onSaveSuccess }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    description: "",
    avatar: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedIn: "",
  });

  useEffect(() => {
    if (userData) {
      setFormValues(userData);
    }
  }, [userData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const email = localStorage.getItem("email");
      if (!email) {
        throw new Error("No email found in local storage.");
      }

      const endpoint = `http://localhost:7000/edit-profile/${email}`;
      const response = await axios.put(endpoint, formValues);

      if (response.data) {
        onSaveSuccess(response.data);
      }
      onClose();
    } catch (error) {
      console.error("There was an error updating the user data", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogContent>
        <TextField
          label="First Name"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Description"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          fullWidth
          margin="dense"
          multiline
        />
        <TextField
          label="Avatar URL"
          name="avatar"
          value={formValues.avatar}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Facebook Profile"
          name="facebook"
          value={formValues.facebook}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Twitter Handle"
          name="twitter"
          value={formValues.twitter}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Instagram Profile"
          name="instagram"
          value={formValues.instagram}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="LinkedIn Profile"
          name="linkedIn"
          value={formValues.linkedIn}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileForm;
