import styles from './RepositoryDetails.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import { RepoDetailsProps } from '../../utils/types';

export default function RepositoryDetails({ repo }: RepoDetailsProps) {
  return (
    <>
      <Card className={styles.card} variant="outlined">
        {!repo && <Typography className={styles.notification}>Выберите репозитарий</Typography>}
        {repo && (
          <CardContent className={styles.cardContent}>
            <Typography className={styles.name}>Название: {repo.name || 'Нет названия'}</Typography>
            <div className={styles.container}>
              {repo.language && (
                <Button variant="contained" className={styles.button}>
                  <Typography className={styles.language}>{repo.language}</Typography>
                </Button>
              )}
              {!repo.language && (
                <Typography className={styles.description}>Язык не указан</Typography>
              )}
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
        )}
      </Card>
    </>
  );
}
