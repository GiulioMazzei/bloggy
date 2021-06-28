//define the model of the post with its parameters (author, title, content, category)

module.exports = (sequelize, Sequelize) => {
    
    const Post = sequelize.define('posts', {
      author: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT('long'),
      },
      category: {
        type: Sequelize.STRING,
      },
    });
  
    return Post;
};
  