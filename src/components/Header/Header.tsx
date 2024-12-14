import { AppBar, InputBase, Button } from '@mui/material';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FormEvent } from 'react';
import { getRepositories } from '../../servises/thunks/getRepositories';
import { AppDispatch } from '../../servises/store';
import { setIsSearchStarted } from '../../servises/slices/getRepositoriesSlice';
import { githubStates } from '../../servises/selectors/githubSelector';
import { setQuery } from '../../servises/slices/getRepositoriesSlice';

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const { perPage, currentPage, query } = useSelector(githubStates);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(getRepositories({ query, perPage, page: currentPage }));
      dispatch(setIsSearchStarted(true));
    }
  };

  return (
    <AppBar>
      <form onSubmit={handleSearch} className={styles.AppBar}>
        <InputBase
          className={styles.input}
          placeholder="Введите поисковый запрос"
          inputProps={{ 'aria-label': 'Введите поисковый запрос' }}
          onChange={e => dispatch(setQuery(e.target.value))}
        />
        <Button type="submit" className={styles.button} variant="contained">
          Искать
        </Button>
      </form>
    </AppBar>
  );
}
