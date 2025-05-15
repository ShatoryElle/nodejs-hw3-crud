import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import contactsRouter from './routers/contacts.js';
import errorHandler from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';




export const setupServer = () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
        options: { colorize: true },
      },
    }),
  );

  // Підключення роутів контактів
  app.use('/contacts', contactsRouter);

  // Обробка неіснуючих маршрутів
  app.use('*', notFoundHandler);

  // Обробка помилок
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
