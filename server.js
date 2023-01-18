const app = require('./app');
require('dotenv').config();

app.listen(process.env.port, () => {
    console.log(`Server jookseb pordil: ${process.env.port}`)
  });


