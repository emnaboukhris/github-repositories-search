import { useEffect, useState } from 'react';
import {
  Typography,
  TextField,
  Divider,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import { Repo } from '../models/models';
import ClearIcon from '@mui/icons-material/Clear';

export interface FiltersComponentProps {
  repositories: Repo[];
  filteredRepos: Repo[];
  setFilteredRepos: Function;
  setIsFilterActive: Function;
  isFilterActive: boolean;
}
// Represents a component for filtering and sorting a list of repositories.

const FiltersComponent: React.FC<FiltersComponentProps> = (props) => {
  // State variables
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const {
    repositories,
    filteredRepos,
    setFilteredRepos,
    setIsFilterActive,
    isFilterActive,
  } = props;

  // List of programming languages
  const languages = [
    { value: '', label: 'Language' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'java', label: 'Java' },
    { value: 'css', label: 'CSS' },
    { value: 'php', label: 'PHP' },
    { value: 'scss', label: 'SCSS' },
    { value: 'html', label: 'HTML' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'jupyter notebook', label: 'Jupyter Notebook' },
    { value: 'dart', label: 'Dart' },
    { value: 'ruby', label: 'Ruby' },
  ];

  // List of sorting options
  const sortOptions = [
    { value: 'date', label: 'Date creation' },
    { value: 'name', label: 'Name' },
  ];

  //Handle changes to the filter options
  const handleChangeFilter = (option: string, type: string) => {
    switch (type) {
      case 'language':
        setSelectedLanguage(option);
        break;
      case 'search':
        setSearchTerm(option);
        break;
      case 'sort':
        setSelectedSortOption(option);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Create a copy of the original repositories array
    let filteredRepositories = [...repositories];

    // Filter by language
    if (selectedLanguage) {
      const language = selectedLanguage.toLowerCase();
      filteredRepositories = filteredRepositories.filter((repo) =>
        (repo.primaryLanguage?.name ?? '').toLowerCase().includes(language)
      );
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredRepositories = filteredRepositories.filter((repo) =>
        repo.name.toLowerCase().includes(term)
      );
    }

    // Sort the filtered repositories
    if (selectedSortOption === 'date') {
      filteredRepositories.sort((a, b) =>
        a.createdAt.localeCompare(b.createdAt)
      );
    } else if (selectedSortOption === 'name') {
      filteredRepositories.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredRepos(filteredRepositories);

    if (searchTerm || selectedLanguage || selectedSortOption) {
      setIsFilterActive(true);
    } else {
      setIsFilterActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, selectedLanguage, selectedSortOption, repositories]);

  // Clear all active filters and reset the list to the original state
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedLanguage('');
    setSelectedSortOption('');
    setIsFilterActive(false);
    setFilteredRepos(repositories);
  };
  // Handle create new repo
  const handleClick = () => {
    alert('Coming soon !');
  };

  return (
    <>
      <Stack
        sx={{
          paddingY: 2,
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          alignItems: 'center',
        }}
      >
        {/* Search input */}
        <TextField
          style={{ width: '100%', display: 'flex', minWidth: 100 }}
          placeholder="Find a repository..."
          size="small"
          id="fullWidth"
          value={searchTerm}
          onChange={(event) => handleChangeFilter(event.target.value, 'search')}
        />
        {/* Language filter dropdown */}
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            value={selectedLanguage}
            onChange={(event) =>
              handleChangeFilter(event.target.value, 'language')
            }
            displayEmpty
          >
            {languages.map((language) => (
              <MenuItem key={language.value} value={language.value}>
                {language.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Sort options dropdown */}
        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          <Select
            value={selectedSortOption}
            onChange={(event) => handleChangeFilter(event.target.value, 'sort')}
            displayEmpty
          >
            <MenuItem value="">
              <em>Sort</em>
            </MenuItem>

            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          sx={{ minWidth: 120, color: 'white' }}
          variant="contained"
          color="success"
          onClick={handleClick}
        >
          New
        </Button>
      </Stack>
      <Divider />
      {/* Display the number of filtered results and clear filters button */}
      {isFilterActive && (
        <>
          <Stack
            direction="row"
            sx={{ paddingY: 1 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>
              {`${filteredRepos.length} results for repositories ${
                searchTerm !== '' ? `matching ${searchTerm} ` : ''
              } ${
                selectedLanguage !== '' ? `written in ${selectedLanguage} ` : ''
              }
                           ${
                             selectedSortOption !== ''
                               ? `sorted by ${selectedSortOption}`
                               : ''
                           }`}{' '}
            </Typography>
            <Button
              size="medium"
              variant="text"
              style={{ textTransform: 'none' }}
              onClick={clearFilters}
              startIcon={
                <ClearIcon
                  sx={{
                    backgroundColor: 'grey',
                    color: 'white',
                    borderRadius: '20%',
                  }}
                />
              }
            >
              Clear filter
            </Button>
          </Stack>
          <Divider />
        </>
      )}
    </>
  );
};

export default FiltersComponent;
