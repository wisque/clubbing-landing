import Router from 'koa-router';

const indexRouter = new Router();

indexRouter
    .get('/', function *() {
        yield this.render('index');
    });

export default app => {
    app.use(indexRouter.routes());
};

