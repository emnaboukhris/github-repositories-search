import { Person, Star } from '@mui/icons-material';

import {
  Box,
  Avatar,
  Typography,
  Stack,
  Button,
  useTheme,
  Divider,
  Chip,
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';

import { User } from '../models/models';

//  Props for the UserCard component
export interface UserCardProps {
  user: User | null;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const theme = useTheme(); // Get the current theme

  return (
    <Box>
      <List>
        {/* User's Profile Information */}
        <ListItem alignItems="flex-start">
          <Box
            flexDirection={{ md: 'column' }}
            display="flex"
            alignItems="center"
          >
            {/* User's Avatar */}
            <Avatar
              alt="profile"
              src={user?.avatarUrl}
              sx={{
                width: '30%',
                height: 'auto',
                margin: '20px',
                maxWidth: '100%',
                zIndex: 7,
                [theme.breakpoints.up('md')]: {
                  width: '100%',
                },
              }}
            />
            {/* User's Name and Login */}
            <ListItemText
              primary={
                <Typography variant="h4" color="text.primary">
                  {user?.name}
                </Typography>
              }
              secondary={
                <Typography gutterBottom variant="h6" color="text.secondary">
                  {user?.login}
                </Typography>
              }
            />
          </Box>
        </ListItem>

        {/* User's Bio */}
        <ListItem>
          <Typography color="text.primary" variant="body2">
            {user?.bio}
          </Typography>
        </ListItem>

        {/* Follow Button */}
        <ListItem>
          <Button
            variant="outlined"
            color="primary"
            sx={{ width: '100%', display: 'flex' }}
          >
            Follow
          </Button>
        </ListItem>

        {/* User's Followers and Following Count */}
        <ListItem>
          <ListItemIcon>
            <Person sx={{ fontSize: '18px' }} />
            <Typography variant="caption">
              100 followers. 5 following
            </Typography>
          </ListItemIcon>
        </ListItem>

        {/* User's Location */}
        <ListItem>
          <LocationOnIcon sx={{ marginRight: ' 10px' }} />
          <Typography> {user?.location}</Typography>
        </ListItem>

        {/* User's Company */}
        <ListItem>
          <BusinessIcon sx={{ marginRight: ' 10px' }} />
          <Typography> {user?.company}</Typography>
        </ListItem>

        {/* Divider Line */}
        <Divider />

        {/* User Highlights Section */}
        <ListItem>
          <Typography variant="h5">Highlights</Typography>
        </ListItem>

        {/* User's Star Count and Pro Status */}
        <ListItem>
          <Stack direction="row" spacing={1} sx={{ color: 'text.secondary' }}>
            <Star />
            <Typography>200</Typography>
            <Chip label="pro" size="small" color="success" variant="outlined" />
          </Stack>
        </ListItem>
      </List>
    </Box>
  );
};
export default UserCard;
