// Example: models/category.js
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    color: DataTypes.STRING 
  }, {
    tableName: 'categories',
    timestamps: false
  });

  Category.associate = function(models) {
    Category.hasMany(models.Product, {
      foreignKey: 'category_id',
      as: 'products'          // ✅ Define the alias here
    });
  };

  return Category;
};
