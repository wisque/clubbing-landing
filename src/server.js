'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import Koa from 'koa';
import registerMiddlewares from './middleware';
import registerRoutes from './routes';

const app = new Koa();

registerMiddlewares(app);
registerRoutes(app);

app.listen(2000, () => {
    console.log(`
    ==============================
    WISQUE CLUBBING LANDING   ****
    NOW RUNNING ON PORT 2000 *****
    ENVIRONMENT IS DEVELOPMENT ***
    ==============================
    `);
});

export default app;