const db = require('../../db/index')

const Post = db.post

const Op = db.Sequelize.Op;


//create and save a new post
exports.create = (req, res) => {

    //if there isn't the title or the content send a message back to the client
    if (!req.body.title || !req.body.content) {
      res.status(400).send({ message: 'Content Cannot be Empty' });
      return;
    }
  
    //create the post
    const post = {
      author: req.body.author,
      title: req.body.title,
      content: req.body.content,
    };
  
    //save the post in the DB
    Post.create(post)
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(500).send({ message: err.message || 'Some Error Occurred While Creating the Post' });
        });

};


//retrieve all posts from the DB 
exports.findAll = (req, res) => {

    Post.findAll({
        where: {}, 
        order: [['createdAt', 'DESC']] //order the post from the newest to the oldest
    })
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(500).send({ message: err.message || 'Some Error Occurred While Retrieving Posts.' });
        });

};

//retrieve all the posts with a specific title
exports.findAllByTitle = (req, res) => {

    const title = req.query.title;
  
    Post.findAll({
        where: { title: { [Op.like]: `%${title}%` } }, 
        order: [['createdAt', 'DESC']] //order the post from the newest to the oldest
    })
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(500).send({ message: err.message || 'Some Error Occurred While Retrieving Posts.' });
        });

}


//retrieve all the posts published from a specific author
exports.findAllByAuthor = (req, res) => {

    const author = req.query.author;
  
    Post.findAll({
        where: { author }, 
        order: [['createdAt', 'DESC']] //order the post from the newest to the oldest
    })
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(500).send({ message: err.message || 'Some Error Occurred While Retrieving Posts.' });
        });

}


//update a post by its ID
exports.update = (req, res) => {

    const id = req.params.id;
  
    Post.update(req.body, {
      where: { id },
    })
        .then((num) => {
            if (num == 1) res.send({ message: 'Post Updated Successfully' });
            else res.send({ message: 'Cannot Update the Post' });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message || 'Error During the Update Process' });
        });

};



//delete a post from its ID
exports.delete = (req, res) => {

    const id = req.params.id;
  
    Post.destroy({
      where: { id },
    })
        .then((num) => {
            if (num == 1) res.send({ message: 'Post Deleted Successfully' });
            else res.send({ message: 'Cannot Delete the Post' });
        })
        .catch((err) =>
            res.status(500).send({ message: err.message || 'Error During the Delete Process' })
        );

};