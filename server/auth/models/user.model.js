//define the model of the user with its parameters (username, email, password)

module.exports = (sequelize, Sequelize) => {
    
    const User = sequelize.define('users', {
      username: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  
    return User;
};
  