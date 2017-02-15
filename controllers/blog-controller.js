const BlogService = require('../services/blog-service');

class BlogController {
    static postArticle(req, res) {
        let user = req.user;
        let data = req.body;

        BlogService.createArticle({data, user}, (data) => {
            res.json(data);
        });
    }

    static getArticleById(req, res) {
        let data = req.body;

        BlogService.getArticleById(data, (data) => {
            res.json(data);
        });
    }

    static commentArticle(req, res) {
        let user = req.user;
        let data = req.body;
        let article;

        BlogService.getArticleById({articleId: data.articleId}, (articleData) => {
            if (articleData.success) {
                article = articleData.article;

                BlogService.addComment({data, user, article}, (result) => {
                    res.json(result);
                });
            } else {
                res.status(400).json(articleData);
            }
        });
    }

    static replyComment(req, res) {
        res.json({dude: 'a'});
    }

    static getArticlesByTag(req, res) {
        res.json({dude: 'a'});
    }

    static getArticlesByUsername(req, res) {
        res.json({dude: 'a'});
    }
}

module.exports = BlogController;