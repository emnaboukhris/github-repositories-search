import { PaginatedList } from 'react-paginated-list';
import { Repo } from '../models/models';
import RepoItem from './RepoItem';
import { Divider } from '@mui/material';

// Props for the RepoList component
export interface RepoListProps {
  repositories: Repo[];
}

const RepoList: React.FC<RepoListProps> = ({ repositories }) => {
  return (
    <div>
      {/* Paginated List Component */}
      <PaginatedList
        list={repositories}
        itemsPerPage={10}
        renderList={(repos) => (
          <>
            {/* Mapping and Rendering Repository Items */}
            {repos.map((repo, id) => {
              return (
                <>
                  <RepoItem repo={repo}></RepoItem>
                  <Divider />
                </>
              );
            })}
          </>
        )}
      />
    </div>
  );
};

export default RepoList;
