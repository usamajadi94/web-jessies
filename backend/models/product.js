'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: 'category_id',  // ✅ MATCH this with DB and category.js
        as: 'category'
      });
    }
  }

  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER   // ✅ use snake_case to match your DB column
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false
  });

  return Product;
};
