module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {
      user_name: DataTypes.STRING,
      user_email: DataTypes.STRING,
      user_password: DataTypes.STRING,
      user_secid: DataTypes.INTEGER,
      user_delete: DataTypes.BOOLEAN

    });
    return Users;
  };