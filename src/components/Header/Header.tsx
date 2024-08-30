import { AppBar, InputBase, Button } from '@mui/material';
import styles from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getRepositories } from '../../servises/thunks/getRepositories';

export default function Header() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = e => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(getRepositories(query));
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
