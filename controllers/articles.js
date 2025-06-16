import * as articlesModel from '../models/articles.js'

function getAllArticles(req, res) {
    const articles = articlesModel.getArticles()

    if (!articles) {
        return res.status(404).send('Articles not found');
    }

    res.render('../views/allArticles.ejs', { articles: articles });
}

function getArticle(req, res) {
    const id = parseInt(req.params.id);
    const article = articlesModel.getArticle(id);

    if (!article) {
        return res.status(404).send('Article not found');
    }

    res.render('../views/article.ejs', { article: article });
}


function showCreateForm(req, res) {
    res.render('../views/createArticle.ejs');
}

function createArticle(req, res) {
    const { title, content } = req.body;
    const article = articlesModel.createArticle(title, content);

    if (!article) {
        return res.status(400).send('Article not created');
    }
    res.redirect('/articles'); 
}

export {
    getAllArticles,
    getArticle,
    createArticle,
    showCreateForm
}