import Express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import { renderFile } from 'ejs';

import forceTls from './force-tls';


const root = `${__dirname}/../../build`;
export const app = new Express();

app.set('views', root);
app.engine('html', renderFile);

if (process.env.NODE_ENV === 'production') {
  app.use(forceTls);
}

app.use(helmet());
app.use(helmet.contentSecurityPolicy({ setAllHeaders: true }));
app.use(compression());
app.use(Express.static(root, { maxAge: '1 year' }));

app.get('*', (req, res) => res.render('index.html'));
