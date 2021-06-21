const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  { //this is the ID column
    id: {
      // this means the type of data in this column is a number
      type: DataTypes.INTEGER,
      //this means something has to go in this column, it cannot be empty
      allowNull: false,
      //
      primaryKey: true,
      //this automatically adds one to the id when it is created
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
