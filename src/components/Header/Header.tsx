import { AppBar, InputBase, Button } from '@mui/material';
import styles from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { useState, FormEvent } from 'react';
import { getRepositories } from '../../servises/thunks/getRepositories';
import { AppDispatch } from '../../servises/store';
import { setIsSearchStarted } from '../../servises/slices/getRepositoriesSlice';

export default function Header() {
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(getRepositories(query));
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
          onChange={e => setQuery(e.target.value)}
        />
        <Button className={styles.button} variant="contained">
          Искать
        </Button>
      </form>
    </AppBar>
  );
}
