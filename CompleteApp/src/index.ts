import app from './app';
import config from './config/config';
const colors = require('colors');
const server = (text: string) => {
  console.log(`${colors.brightGreen(config.SERVER_NAME)} ${text}`)
}

// Global Variables

// Routes

// Static Files

// Listening
app.listen(app.get('port'), app.get('host'), () => {
  server(`Server at host ${colors.green(app.get('host'))}`)
  server(`Working on port ${colors.cyan(app.get('port'))}`);
})