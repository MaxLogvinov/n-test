import { Toolbar } from '@mui/material';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import RepositoryList from './components/RepositoryList/RepositoryList';

//ToDo

// разобраться с центрированием заголовка

export default function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Toolbar />
      {/* <h1 className={styles.heading}>Добро пожаловать</h1> */}
      {/* <Box sx={{ width: '100%', maxWidth: 500 }}> */}

      {/* </Box> */}
      <RepositoryList />
    </div>
  );
}
