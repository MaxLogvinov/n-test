import { Toolbar } from '@mui/material';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Repository from './components/Repository/Repository';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className={styles.block}>
      <div className={styles.page}>
        <Header />
        <Toolbar />
        <Repository />
      </div>
      <Footer />
    </div>
  );
}
