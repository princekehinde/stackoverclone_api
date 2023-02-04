const server = require('./src/routes/index');

const db = require('./src/config/db');

const Port = process.env.PORT || 3000;

db()
  .then(() => {
    console.log('mongo_db database is connected');
  })
  .catch(err => {
    console.log(err);
  });

server.listen(Port, () => console.log(`Server running on port ${Port}`));