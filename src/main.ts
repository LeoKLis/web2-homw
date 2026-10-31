import express, { type Express, type Request, type Response } from 'express';
import 'dotenv/config';

const EXTERNAL_URL = process.env.RENDER_EXTERNAL_URL;
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4080;
const BASE_URL = EXTERNAL_URL || `http://localhost:${PORT}`;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const HOSTNAME = EXTERNAL_URL ? '0.0.0.0' : '127.0.0.1';
app.listen(PORT, HOSTNAME, () => {
    console.log(`Listening locally on http://${HOSTNAME}:${PORT}`)
    if (EXTERNAL_URL)
        console.log(`External url: ${EXTERNAL_URL}`)
});