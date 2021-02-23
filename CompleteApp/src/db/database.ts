const mongoose = require('mongoose');
import { ConnectionOptions } from 'mongoose';
import config from '../config/config'

(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_NAME}`, mongooseOptions);
    console.log(`Database is connected to: ${db.connection.name}`)
  }
  catch (err) {
    console.log('An error has ocurred during connection');
  }
})()
