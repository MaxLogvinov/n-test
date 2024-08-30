import { Typography, Toolbar } from '@mui/material';
import styles from './App.module.scss';
import Header from './components/Header/Header';

//ToDo
// поменять onClick на onChange
// разобраться с центрированием заголовка

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Toolbar />
      {/* <h1 className={styles.heading}>Добро пожаловать</h1> */}
      {/* <Box sx={{ width: '100%', maxWidth: 500 }}> */}
      <Typography className={styles.heading} variant="h1" component="h2">
        Добро пожаловать
      </Typography>
      {/* </Box> */}
    </div>
  );
}

export default App;
