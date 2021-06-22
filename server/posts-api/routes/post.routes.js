module.exports = (app) => {

    const router = require('express').Router()
    const posts = require('../controllers/post.controller')


    //create a new post
    router.post('/', posts.create);

    //retrieve all the posts
    router.get('/', posts.findAll);

    //retrieve all the posts from a specific title
    router.get('/t/', posts.findAllByTitle)

    //retrieve all the posts from a specific author
    router.get('/a/', posts.findAllByAuthor)

    //update a post from its ID
    router.put('/:id', posts.update);

    //delete a post from its ID
    router.delete('/:id', posts.delete);


    app.use('/api/posts', router);

}