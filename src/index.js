import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import chalk from 'chalk';

const app = express();

const PORT = process.env.API_PORT || 3000;
// const whiteList = ['https://app.teodrive.com', 'http://localhost:5173'];

app.use(helmet());
app.use(express.json());
// app.use(cors({ origin: '*' }));

// Not Found route
app.use((req, res, next) => {
  return res.status(404).send('404\nNot Found');
});

// Server listening
app.listen(PORT, () => {
  console.log(
    chalk.black.bgGreenBright.bold(` aaaaaaaaaaaaaaaaaaaaaaRunning \n`) +
      chalk.yellowBright(`🚀 Server listening on port `) +
      chalk.magentaBright.bold(`${PORT}`)
  );
});
