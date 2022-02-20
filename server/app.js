import express from 'express';
import sequelize from './utils/database';
import router from './routes/routes';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(router);
sequelize.sync(); 
app.listen(5000);