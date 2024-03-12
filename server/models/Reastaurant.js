module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define("Restaurant", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    speciality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  // Define association to MenuItem model
  Restaurant.associate = (models) => {
    Restaurant.hasMany(models.MenuItem);
  };

  return Restaurant;
};