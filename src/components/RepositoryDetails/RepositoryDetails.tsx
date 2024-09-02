import styles from './RepositoryDetails.module.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RepositoryDetails({ repo }) {
  console.log(repo);
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 32 }}>
            {repo.name}
          </Typography>
          <Typography variant="h5" component="div">
            Описание: {repo.description || 'Нет описания'}
          </Typography>

          {repo.license ? (
            <>
              <Typography variant="body2">{repo.license.name}</Typography>
              <Typography variant="body2">{repo.license.key}</Typography>
              <Typography variant="body2">{repo.license.spdx_id}</Typography>
            </>
          ) : (
            <Typography variant="body2">Нет данных о лицензии</Typography>
          )}
        </CardContent>
      </Card>
    </>
  );
}
