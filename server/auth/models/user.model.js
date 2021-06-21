//define the model of the user with his parameters (username, email, password)

module.exports = (sequelize, Sequelize) => {
    
    const User = sequelize.define('users', {
      username: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
    });
  
    return User;
};
  