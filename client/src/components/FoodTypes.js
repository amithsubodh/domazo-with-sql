import React from 'react';

const FoodTypes = () => {
  const typesData = [
    {
      name: "Biryani",
      imageUrl: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
      name: "Burger",
      imageUrl: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
      name: "Rolls",
      imageUrl: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
      name: "Chicken",
      imageUrl: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
      name: "Biryani",
      imageUrl: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    }
  ];

  return (
    <div>
      <div className="food-types-heading">
        <h3>Inspiration for your first order</h3>
      </div>
      <div className="food-types">
        {typesData.map((type, index) => (
          <div className="food-types-img" key={index}>
            <img alt={type.name} src={type.imageUrl} />
            <p className="food-name">{type.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodTypes;
