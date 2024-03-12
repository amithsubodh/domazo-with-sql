module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    food_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuisine_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    is_veg: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Cart;
};
