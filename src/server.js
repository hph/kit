import Express from 'express';
import compression from 'compression';
import { renderFile } from 'ejs';


export const app = new Express();

app.set('views', `${__dirname}/../build`);
app.engine('html', renderFile);

app.use(compression());
app.use(Express.static(`${__dirname}/../build`, { maxAge: '1 year' }));

app.get('*', (req, res) => res.render('index.html'));
