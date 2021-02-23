import app from './app';
import './database';

//Listening
app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server working on host ${app.get('host')}, port ${app.get('port')}`)
});