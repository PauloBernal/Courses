import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from './config'

import videoRoutes from './routes/videos.routes'

const app = express();

//settings
app.set('port', config.PORT);
app.set('host', config.HOST);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use(videoRoutes)

export default app;