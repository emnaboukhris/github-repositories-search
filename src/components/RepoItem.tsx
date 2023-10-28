import React, { useState } from 'react';
import {
  Link,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  Box,
} from '@mui/material';
import { FiberManualRecord, Star, StarBorder } from '@mui/icons-material';
import { Button, Chip } from '@mui/material';

import { Repo } from '../models/models';

// Props for the RepoItem component
export interface RepoItemProps {
  repo: Repo;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  // State to manage whether the repo is starred or not
  const [value, setValue] = useState<boolean>(false);

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              {/* Repository Name and Link */}
              <Typography variant="h5" color="text.secondary">
                <Link href={repo?.url} underline="hover">
                  {repo?.name}
                </Link>
                <Chip
                  label={repo?.isPrivate ? 'private' : 'public'}
                  sx={{
                    margin: 2,
                    color: 'grey',
                  }}
                  size="small"
                  variant="outlined"
                />
              </Typography>
              {/* Repository Description */}
              <Typography variant="body1">{repo?.description}</Typography>
              {/* Repository Primary Language */}
              <Typography variant="body2">
                <FiberManualRecord
                  sx={{
                    verticalAlign: 'middle',
                    paddingRight: 1,
                    fontSize: 20,
                    color: 'primary.main',
                  }}
                />
                {repo.primaryLanguage?.name}
              </Typography>
            </Box>
            <Box>
              {/* Star/Unstar Button */}
              <Button
                variant="outlined"
                sx={{ textTransform: 'none' }}
                onClick={() => setValue(!value)}
                startIcon={
                  value === true ? (
                    <StarBorder />
                  ) : (
                    <Star sx={{ color: 'warning.main' }} />
                  )
                }
              >
                {value === true ? 'Star' : 'Starred'}
              </Button>
            </Box>
          </Stack>
        </ListItemText>
      </ListItem>
    </>
  );
};

export default RepoItem;
