const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req,res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'title', 'created_at', 'post_content'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attribute: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'created_at', 'post_content'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ messege: 'No post found with that id' });
            return;
        }
        
        const post = dbPostData.get({ plain: true });

        res.render('edit-post', {
            post,
            loggedIn: true
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit-user', withAuth, (req, res) => {
    User.findOne({
        attributes: { exclude: ['passsword'] },
        where: {
            id: req.session.user_id
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with that id' });
            return;
        }
        const user = dbUserData.get({ plain: true });
        res.render('edit-user', {user, loggedIn: true });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;