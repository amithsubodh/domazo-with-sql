module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define("MenuItem", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    speciality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    openingHours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    menu: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });

  return MenuItem;
};
