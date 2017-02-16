const Article = require('../models/article-model');
const Comment = require('../models/comment-model');

const WRONG_DATA = 'Wrong data given';
const STRING = 'string';

class BlogService {
    static createArticle (input, callback) {
        let createdArticle;
        let data = input.data;
        let user = input.user;

        if (!data ||
            !user ||
            (typeof data.title) !== STRING ||
            (typeof data.content) !== STRING) {

            callback({success: false, error: WRONG_DATA});

            return;
        }

        createdArticle = new Article({
            _creator: user._id,
            title: data.title,
            content: data.content
        });

        createdArticle.save((err, article) => {
            if (err) {
                callback({success: false, error: err});
                return;
            }

            callback({success: true, article: article});
        });
    }

    static getArticleById (data, callback) {
        if (!data || !data.articleId) {
            callback({success: false, error: WRONG_DATA});
            return;
        }

        Article.findOne({_id: data.articleId})
            .populate('comments')
            .exec((err, article) => {
                if (err) {
                    callback({success: false, error: err});
                    return;
                }

                callback({success: true, article: article});
            });
    }

    static addComment (input, callback) {
        let createdComment;
        let data = input.data;
        let user = input.user;
        let article = input.article;

        if (!data ||
            !user ||
            !data.articleId ||
            (typeof data.content) !== STRING) {

            callback({success: false, error: WRONG_DATA});
            return;
        }
        createdComment = new Comment({
            _creator: user._id,
            _article: article._id,
            content: data.content
        });

        createdComment.save((err, comment) => {
            if (err) {
                callback({success: false, error: err});
                return;
            }

            article.comments.push(comment);
            article.save((err, article) => {
                if (err) {
                    callback({success: false, error: err});
                    return;
                }
                callback({success: true, comment: comment});

            });
        });
    }
};

module.exports = BlogService;
