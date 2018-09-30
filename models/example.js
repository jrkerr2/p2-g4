const example = (sequelize, DataTypes) => {  
let Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};

module.exports = example;