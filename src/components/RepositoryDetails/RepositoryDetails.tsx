import styles from './RepositoryDetails.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';

export default function RepositoryDetails({ repo }) {
  console.log(repo);
  return (
    <>
      <Card className={styles.card} variant="outlined">
        <CardContent className={styles.cardContent}>
          <Typography className={styles.name}>Название: {repo.name || 'Нет названия'}</Typography>
          <div className={styles.container}>
            <Button variant="contained" className={styles.button}>
              <Typography className={styles.language}>{repo.language}</Typography>
            </Button>

            <div className={styles.starContainer}>
              <StarIcon className={styles.star} />
              <Typography className={styles.count}>{repo.stargazers_count}</Typography>
            </div>
          </div>
          <Typography className={styles.description} variant="h5" component="div">
            Описание: {repo.description || 'Нет описания'}
          </Typography>
          {repo.license ? (
            <Typography className={styles.license} variant="body2">
              {repo.license.name}
            </Typography>
          ) : (
            <Typography className={styles.license} variant="body2">
              Нет данных о лицензии
            </Typography>
          )}
        </CardContent>
      </Card>
    </>
  );
}
