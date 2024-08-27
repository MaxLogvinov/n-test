import { AppBar, InputBase, Button } from '@mui/material';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <AppBar className={styles.AppBar}>
      <InputBase
        className={styles.input}
        placeholder="Введите поисковый запрос"
        inputProps={{ 'aria-label': 'Введите поисковый запрос' }}
      />
      <Button className={styles.button} variant="contained">
        Искать
      </Button>
    </AppBar>
  );
}
