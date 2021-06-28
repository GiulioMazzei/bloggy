//define the model of the post with its parameters (author, title, content, category)

module.exports = (sequelize, Sequelize) => {
    
    const Post = sequelize.define('posts', {
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
      },
    });
  
    return Post;
};
  