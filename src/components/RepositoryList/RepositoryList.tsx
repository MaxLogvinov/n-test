import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import styles from './RepositoryList.module.scss';
import { githubStates } from '../../servises/selectors/githubSelector';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function RepositoryList() {
  const { repositories, status, error, isSearchStarted } = useSelector(githubStates);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('ru-RU');
  };

  return (
    <main>
      {!isSearchStarted && (
        <Typography className={styles.heading} variant="h1" component="h2">
          Добро пожаловать
        </Typography>
      )}
      {isSearchStarted && (
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 912 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell align="left">Язык</TableCell>
                <TableCell align="left">Число&nbsp;форков</TableCell>
                <TableCell align="left">Число&nbsp;звёзд</TableCell>
                <TableCell align="left">Дата&nbsp;обновления</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repositories.map(repo => (
                <TableRow key={repo.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {repo.name}
                  </TableCell>
                  <TableCell align="left">{repo.language}</TableCell>
                  <TableCell align="left">{repo.forks_count}</TableCell>
                  <TableCell align="left">{repo.stargazers_count}</TableCell>
                  <TableCell align="left">{formatDate(repo.updated_at)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </main>
  );
}
