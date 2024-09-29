import styles from './RepositoryList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { githubStates } from '../../servises/selectors/githubSelector';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import RepositoryDetails from '../RepositoryDetails/RepositoryDetails';
import { useState } from 'react';
import { Repo } from '../../utils/types';
import TablePagination from '@mui/material/TablePagination';
import { AppDispatch } from '../../servises/store';
import { setCurrentPage, setPerPage } from '../../servises/slices/getRepositoriesSlice';
import { getRepositories } from '../../servises/thunks/getRepositories';

export default function RepositoryList() {
  const dispatch = useDispatch<AppDispatch>();
  const { repositories, total_count, currentPage, perPage, isSearchStarted, query } =
    useSelector(githubStates);
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);

  const handleRowClick = (repo: Repo): void => {
    setSelectedRepo(repo);
  };

  const handlePageChange = (event: unknown, newPage: number) => {
    dispatch(setCurrentPage(newPage + 1));
    dispatch(getRepositories({ query: query, perPage, page: newPage + 1 }));
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPerPage(parseInt(event.target.value, 10)));
    dispatch(setCurrentPage(1));
    dispatch(getRepositories({ query: query, perPage: parseInt(event.target.value, 10), page: 1 }));
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('ru-RU');
  };

  return (
    <>
      {isSearchStarted && (
        <section className={styles.section}>
          <div className={styles.container}>
            <Typography className={styles.subheading} variant="h1" component="h2">
              Результаты поиска
            </Typography>
            <TableContainer>
              <Table className={styles.tableContainer} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={styles.itemTitle}>Название</TableCell>
                    <TableCell className={styles.itemTitle} align="left">
                      Язык
                    </TableCell>
                    <TableCell className={styles.itemTitle} align="left">
                      Число&nbsp;форков
                    </TableCell>
                    <TableCell className={styles.itemTitle} align="left">
                      Число&nbsp;звёзд
                    </TableCell>
                    <TableCell className={styles.itemTitle} align="left">
                      Дата&nbsp;обновления
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {repositories.map(repo => (
                    <TableRow
                      className={styles.itemRow}
                      key={repo.id}
                      onClick={() => handleRowClick(repo)}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell className={styles.item} component="th" scope="row">
                        {repo.name}
                      </TableCell>
                      <TableCell className={styles.item} align="left">
                        {repo.language}
                      </TableCell>
                      <TableCell className={styles.item} align="left">
                        {repo.forks_count}
                      </TableCell>
                      <TableCell className={styles.item} align="left">
                        {repo.stargazers_count}
                      </TableCell>
                      <TableCell className={styles.item} align="left">
                        {formatDate(repo.updated_at)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                component="div"
                count={total_count}
                page={currentPage - 1}
                onPageChange={handlePageChange}
                rowsPerPage={perPage}
                onRowsPerPageChange={handlePerPageChange}
                rowsPerPageOptions={[10, 25, 50]}
              />
            </TableContainer>
          </div>
          <RepositoryDetails repo={selectedRepo} />
        </section>
      )}
    </>
  );
}
