import express from 'express'
import * as articlesControllers from '../controllers/articles.js'
import * as loginControllers from '../controllers/login.js'

const router = express.Router();

router.get('/create', loginControllers.isLoggedIn, articlesControllers.showCreateForm);
router.get('/', loginControllers.isLoggedIn, articlesControllers.getAllArticles);
router.post('/create', loginControllers.isLoggedIn, articlesControllers.createArticle);
router.get('/:id', loginControllers.isLoggedIn, articlesControllers.getArticle);

export {
    router
}