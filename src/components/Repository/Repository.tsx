import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import styles from './Repository.module.scss';
import { githubStates } from '../../servises/selectors/githubSelector';
import RepositoryList from '../RepositoryList/RepositoryList';
import Loading from '../Loading/Loading';

export default function Repository() {
  const { status, error, isSearchStarted } = useSelector(githubStates);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <main>
      {!isSearchStarted && (
        <Typography className={styles.heading} variant="h1" component="h1">
          Добро пожаловать
        </Typography>
      )}
      {isSearchStarted && <RepositoryList />}
    </main>
  );
}
