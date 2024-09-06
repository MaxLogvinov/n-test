import { Toolbar } from '@mui/material';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Repository from './components/Repository/Repository';

//ToDo

// Loading

export default function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Toolbar />
      <Repository />
    </div>
  );
}
