import { Container, Box, Typography } from '@mui/material';

// The ProfileComponent is a simple component that displays a welcome message.
const ProfileComponent = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '70vh',
          marginY: '40px',
          textAlign: 'center',
          border: '2px dotted gray',
          borderRadius: '10px',
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'gray' }}
        >
          Welcome to my profile
        </Typography>
      </Box>
    </Container>
  );
};

export default ProfileComponent;
