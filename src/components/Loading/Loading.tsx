import styles from './Loading.module.scss';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <div className={styles.container}>
      <CircularProgress className={styles.loading} size="3rem" />
    </div>
  );
}
