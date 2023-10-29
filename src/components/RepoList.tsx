import { useEffect, useState } from 'react';
import { Repo } from '../models/models';
import RepoItem from './RepoItem';
import { Divider } from '@mui/material';
import ReactPaginate from 'react-paginate';

interface RepoListProps {
  repositories: Repo[];
}

const RepoList: React.FC<RepoListProps> = ({ repositories }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState<number>(0);

  // handle current page on filter
  useEffect(() => {
    setCurrentPage(0);
  }, [repositories]);

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };
  const offset = currentPage * itemsPerPage;
  const paginatedRepos = repositories.slice(offset, offset + itemsPerPage);

  return (
    <div>
      {/* Mapping and Rendering Repository Items */}
      {paginatedRepos.map((repo, id) => (
        <div key={id}>
          <RepoItem repo={repo} />
          <Divider />
        </div>
      ))}

      {/* Pagination Component */}
      <ReactPaginate
        pageCount={Math.ceil(repositories.length / itemsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={({ selected }) => handlePageChange(selected)}
        forcePage={currentPage}
        containerClassName="pagination"
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'pagination__link--active'}
      />
    </div>
  );
};

export default RepoList;
