import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography } from '@mui/material';

const TeamMember = ({ image, firstName, lastName, role }) => {
  return (
    <Card style={{ marginRight: '20px' }}>
      <CardMedia
        component="div"
        sx={{
          pt: '100%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <>
          <Typography gutterBottom variant="h5" component="h2">
            {firstName} {lastName}
          </Typography>
          <Typography>
            {role}
          </Typography>
        </>
      </CardContent>
    </Card>
  );
};

const OurTeamPage = () => {
  // Sample data for team members
  const teamMembers = [
    { firstName: 'Anis', lastName: 'Jmeail', role: 'Lead Developer FULLSTACK JS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxvxYLGfR5ht2tpDCbjrG3w5zhFiQCvxPVGerhjup7xqYL-Wh7h26aoAuXz76UgJHlL5Y&usqp=CAU' },
    { firstName: 'Tarek', lastName: 'Ben Zaied', role: 'Lead Developer FULLSTACK JS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkS8v2vSpIzK2HCPWDdfZP3vbvQhEm5fxuwkNENSNSswbBoWScLb0h3GjVFqgZB9FEpSg&usqp=CAU' },
    { firstName: 'Wifek', lastName: 'LastName_Wifek', role: 'Lead Developer FULLSTACK JS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9JvlIX5iEtOTXjtnxMm5zO5bM26J-qT9-mrwpV4Cn0sCUCkSKn1xznHSJ20Ia4wj_Qw&usqp=CAU' },
    { firstName: 'Ikram', lastName: 'Ben Yahia', role: 'Lead Developer FULLSTACK JS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgREtbJGplFmbA3tCSTKAUDmgH1vPrefWgjEsRxBQEBay1FF4W3WCFnwC7jcz8yXBSVqo&usqp=CAU' },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Our Team
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </Container>
  );
};

export default OurTeamPage;
