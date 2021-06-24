//define the model of the post with his parameters (title, content)

module.exports = (sequelize, Sequelize) => {
    
    const Post = sequelize.define('posts', {
      author: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
    });
  
    return Post;
};
  