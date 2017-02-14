const BlogService = require('../services/BlogService');

class BlogController {
    static postArticle(req, res) {
        let user = req.user;
        let data = req.body;

        BlogService.createArticle({data, user}, function (data) {
            res.json(data);
        });
    }

    static getArticleById(req, res) {
        let data = req.body;

        BlogService.getArticleById(data, function (data) {
            res.json(data);
        });
    }

    static commentArticle(req, res) {
        let user = req.user;
        let data = req.body;
        let article;

        BlogService.getArticleById({articleId: data.articleId}, function (articleData) {
            if (articleData.success) {
                article = articleData.article;

                BlogService.addComment({data, user, article}, function (result) {
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