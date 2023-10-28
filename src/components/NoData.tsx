import { Container, Box, Typography, Grid, Paper } from '@mui/material';

// The NoData component is used to display a message when no data matches the search.
const NoData = () => {
  return (
    <Container>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '70vh',
          marginY: '40px',
          border: '2px dotted gray',
          borderRadius: '10px',
        }}
      >
        <Grid container>
          <Grid item md={6}>
            <Box
              component="img"
              sx={{
                height: 'auto',
                maxWidth: '100%',
              }}
              src="NoData.png"
            />
          </Grid>
          <Grid item md={3}>
            <Container
              sx={{
                display: 'flex',
                padding: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '30vh',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  color: 'gray',
                }}
              >
                Your search did not match any user
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default NoData;
