import config from '../config/config'
const colors = require('colors');
const sRes = (text: string) => {
  console.log(`${colors.cyan(config.SERVER_RES)} ${text}`);
}
const sError = (text: string) => {
  console.log(`${colors.red(config.SERVER_ERR)} ${text}`);
}
const sWarn = (text: string) => {
  console.log(`${colors.yellow(config.SERVER_WARN)} ${text}`);
}


export const renderIndexPage = (req, res) => {
  const path = 'index';
  res.render(path);
  sRes(`${colors.gray('Successfully rendered')} ${colors.brightBlue(path)}`);
}

export const renderAboutPage = (req, res) => {
  const path = 'about';
  res.render(path);
  sRes(`${colors.gray('Successfully rendered')} ${colors.brightBlue(path)}`);
}

export const notFound = (req, res) => {
  res.render('notfound');
  sError(`${colors.gray('Page not found at')} ${colors.brightBlue(config.SERVER_HOST)}:${colors.white(config.SERVER_PORT)}`);
}