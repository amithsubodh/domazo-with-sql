import React from "react";

const FoodBrands = () => {
  const brandsData = [
    {
      name: "Domino's",
      imageUrl:
        "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252640.png?output-format=webp",
      website: "https://www.dominos.co.in/",
    },
    {
      name: "Burger King",
      imageUrl:
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187803.png?output-format=webp",
      website: "https://www.burgerking.in/",
    },
    {
      name: "Pizza Hut",
      imageUrl:
        "https://b.zmtcdn.com/data/brand_creatives/logos/0b29d747e59e3733bd194c73529d36d7_1629461595.png?output-format=webp",
      website: "https://www.pizzahut.co.in/",
    },
    {
      name: "KFC",
      imageUrl:
        "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875219.png?output-format=webp",
      website: "https://online.kfc.co.in/",
    },
    {
      name: "Beijing Bites",
      imageUrl: "https://beijingbites.com/image/logo.png",
      website: "https://beijingbites.com/",
    },
  ];

  return (
    <div>
      <div className="food-types-heading">
        <h3>Top brands for you</h3>
      </div>
      <div className="food-brands">
        {brandsData.map((brand, index) => (
          <div className="food-brand-types" key={index}>
            <div className="food-brand-img">
              <a href={brand.website} target="_blank" rel="noopener noreferrer">
                <img alt={brand.name} src={brand.imageUrl} />
                <p className="brand">{brand.name}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodBrands;
