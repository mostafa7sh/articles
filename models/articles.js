let articles = [{id: 1, title:'meow', content:'siu'},
                {id: 2, title:'meow1', content:'siu1'},
                {id: 3, title:'meow2', content:'siu2'}]

function getArticles() {
    return articles;
}

function getArticle(id) {
    return articles.find(a => a.id === id);
}

function createArticle(title, content) {
    const article = articles[articles.length - 1];

    let newArticle = {id: article.id + 1, title, content};
    articles.push(newArticle);

    return newArticle;
}

export {
    getArticles,
    getArticle,
    createArticle
}