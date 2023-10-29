import React, { useState } from 'react';
import { Link, ListItem, Typography, Box } from '@mui/material';
import { FiberManualRecord, Star, StarBorder } from '@mui/icons-material';
import { Button, Chip } from '@mui/material';

import { Repo } from '../models/models';
import { LANGUAGES } from '../utils/utils';
// Props for the RepoItem component
export interface RepoItemProps {
  repo: Repo;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  // State to manage whether the repo is starred or not
  const [value, setValue] = useState<boolean>(false);

  // Function to get the color from the LANGUAGES list
  const getLanguageColor = (languageValue: string | null) => {
    const language = LANGUAGES.find((lang) => {
      return lang.value.toUpperCase() === languageValue?.toUpperCase();
    });
    return language ? language.color : 'gray';
  };

  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: 2,
        }}
      >
        <Box
          sx={{
            flex: '0 0 calc(80% - 16px)',
            maxWidth: 'calc(80% - 16px)',
          }}
        >
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
          <Typography
            variant="body1"
            sx={{
              maxWidth: '100%', // Allow it to take the full width
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {repo?.description}
          </Typography>
          {/* Repository Primary Language */}
          {repo.primaryLanguage?.name && (
            <Typography variant="body2">
              <FiberManualRecord
                sx={{
                  verticalAlign: 'middle',
                  paddingRight: 1,
                  fontSize: 20,
                  color: getLanguageColor(repo.primaryLanguage?.name),
                }}
              />
              {repo.primaryLanguage?.name}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            flex: '0 0 calc(20% - 16px)',
            width: '100px',
            alignContent: 'center',
          }}
        >
          {/* Star/Unstar Button */}
          <Button
            variant="outlined"
            sx={{ textTransform: 'none', width: '100%' }}
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
      </ListItem>
    </>
  );
};

export default RepoItem;
