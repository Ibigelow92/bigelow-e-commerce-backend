//This probably needs work
// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // what...
  // needs foreignKey and/or onDelete?
});

// Categories have many Products
Category.hasMany(Product, {
  // what...
  // needs foreignKey and/or onDelete?
});

// Products belongToMany Tags (through ProductTag)
// https://sequelize.org/api/v6/class/src/associations/belongs-to-many.js~belongstomany
Product.belongsToMany(Tag, { through: ProductTag 
  // what...
  // needs foreignKey and/or onDelete?
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag
  // what...
  // needs foreignKey and/or onDelete?
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
