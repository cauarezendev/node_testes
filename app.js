import express from 'express';
import bodyParser from 'body-parser';

import config from './src/config/config';
import datasource from './src/config/datasource';
import booksRouter from './src/routes/books';

const app = express();

app.config = config;
app.datasource = datasource(app);
app.set('port', 7000);
app.use(bodyParser.json());

const { Books } = app.datasource.models.Books;
booksRouter(app, Books);

export default app;
