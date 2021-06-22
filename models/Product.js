// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define 5 columns
    id: {
      //the data must be a number
      type: DataTypes.INTEGER,
      //this means the column cant be empty
      allowNull: false,
      // this column is the primary key
      primaryKey: true,
      //the id adds one to the previous id automatically 
      autoIncrement: true
    },
    //the product name is a string and cannot be empty
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //the price is a number with a decimal, cannot be empty, gets checked to MAKE SURE its a decimal
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    //stock column is a number
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //default value is 0 unless otherwise defined
      defaultValue: 10,
      //makes sure we get a number
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
