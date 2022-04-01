const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT REJECTION! 🔥 Shutting down...');
  console.log(err.name, err.stack);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose
  .connect(process.env.DATABASE_LOCALE, {
    useNewUrlParser: true,
  })
  .then(() => {
    //console.log(con.connections);
    console.log('DB connection successful');
  });

const PORT = process.env.PORT || 3500;
const server = app.listen(PORT, '127.0.0.1', () => {
  console.log(`App running on port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLER REJECTION! 🔥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
