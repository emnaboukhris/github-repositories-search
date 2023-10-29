import { useEffect, useState } from 'react';
import {
  AppBar,
  CssBaseline,
  Switch,
  ThemeProvider,
  Typography,
  createTheme,
  TextField,
  Box,
  Tabs,
  Tab,
  Grid,
  Divider,
  Container,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import RepoList from '../components/RepoList';
import UserCard from '../components/UserCard';
import { Repo, User } from '../models/models';
import { GET_USER_INFO } from '../graphql/queries';
import { useLazyQuery } from '@apollo/client';
import { Search } from '@mui/icons-material';
import FiltersComponent from '../components/FiltersComponent';
import NoData from '../components/NoData';
import ProfileComponent from '../components/ProfileComponent';
import LoaderComponent from '../components/LoaderComponent';
import BookIcon from '@mui/icons-material/Book';
import Person2Icon from '@mui/icons-material/Person2';

const MainPage: React.FC = () => {
  // Constant for default search value
  const GITHUB_USERNAME = 'emnaboukhris';

  // State variables
  const [darkMode, setDarkMode] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [searchUser, setSearchUser] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [repositories, setRepositories] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Create a function to execute the query
  const [executeQuery] = useLazyQuery(GET_USER_INFO, {
    onCompleted: (data) => {
      // Handle query completion
      const user = data.user;
      const userRepos = user?.repositories.nodes || [];
      setUser(user);
      setRepositories(userRepos);
      setFilteredRepos(userRepos);
      setLoading(false);
      setError(false);
    },
    onError: (queryError) => {
      // Handle query error
      setLoading(false);
      setError(true);
    },
  });

  useEffect(() => {
    // Execute the query on page load
    executeQuery({ variables: { username: GITHUB_USERNAME } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchHandler = () => {
    // Handle user search action
    setLoading(true);
    executeQuery({ variables: { username: searchUser } });
  };

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 700,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  // Toggle dark mode
  const darkModeChangeHandler = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{ bgcolor: '#121212' }}>
        <Toolbar>
          <img src={'githubWhite-logo.png'} alt="GitHub Logo" width="100" />
          <Box sx={{ flexGrow: 1 }} />
          <TextField
            sx={{
              width: '35vw',
              color: 'white',
            }}
            placeholder="Find user..."
            size="small"
            id="fullWidth"
            value={searchUser}
            onChange={(event) => setSearchUser(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                searchHandler();
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={searchHandler}>
                    <Search sx={{ color: 'white' }} />
                  </IconButton>
                </InputAdornment>
              ),
              sx: { color: 'white' },
            }}
            InputLabelProps={{
              sx: { color: 'white' },
            }}
          />

          {/* Control theme mode*/}
          <Switch checked={darkMode} onChange={darkModeChangeHandler} />
        </Toolbar>
      </AppBar>
      {/* Render different components based on loading, user, and error states */}
      {loading && <LoaderComponent />}
      {user === null && !loading && !error && <NoData />}
      {error && !loading && <NoData />}
      {user && !loading && !error && (
        <>
          {/* Render UserCard and Profile/Repositories tabs */}

          <Box
            sx={{
              position: 'sticky',
              top: 0,
              marginTop: '15px',
              zIndex: 3,
              bgcolor: 'background.default',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
              }}
            >
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                aria-label="Tabs"
                sx={{ width: '62vw' }}
              >
                <Tab
                  label="Repositories"
                  icon={<BookIcon />}
                  iconPosition="start"
                />
                <Tab
                  icon={<Person2Icon />}
                  iconPosition="start"
                  label=" Profile"
                />
              </Tabs>
            </Box>
            <Divider />
          </Box>
          <Container>
            <Grid container spacing={1}>
              <Grid item md={4} xs={11}>
                <UserCard user={user} />
              </Grid>
              <Grid item md={8} xs={12}>
                <Box>
                  {selectedTab === 1 ? (
                    <ProfileComponent />
                  ) : (
                    <>
                      <FiltersComponent
                        repositories={repositories}
                        setIsFilterActive={setIsFilterActive}
                        isFilterActive={isFilterActive}
                        filteredRepos={filteredRepos}
                        setFilteredRepos={setFilteredRepos}
                      />

                      {isFilterActive && filteredRepos.length === 0 ? (
                        <Box marginY="50px">
                          <Typography variant="h1">
                            {`${user?.name} doesn’t have any repositories that match.`}
                          </Typography>
                        </Box>
                      ) : (
                        <RepoList repositories={filteredRepos} />
                      )}
                    </>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </ThemeProvider>
  );
};
export default MainPage;
