import styles from './RepositoryList.module.scss';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { githubStates } from '../../servises/selectors/githubSelector';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function RepositoryList() {
  const { repositories, isSearchStarted } = useSelector(githubStates);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('ru-RU');
  };

  return (
    <>
      {isSearchStarted && (
        <section className={styles.section}>
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
                    key={repo.id}
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
          </TableContainer>
        </section>
      )}
    </>
  );
}
