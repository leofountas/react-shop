import "../styles/ShoppingList.css";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import { Plant } from "../@types/plantTypes";
import { CartItem, cartProps } from "../@types/cartPropsTypes";
import { useState } from "react";
import Categories from "./Categories";

export default function ShoppingList({ cart, updateCart }: cartProps) {
  const [activeCategory, setActiveCategory] = useState("");
  // Set object selct only the unique elements of the Array created by map
  // then the spread operator (...) take all the elemnt form the object Set e spread them again in the Array
  const categories = [
    ...new Set(plantList.map((plant: Plant) => plant.category)),
  ];
  function addToCart(name: string, price: number) {
    const currentPlantSaved = cart.find(
      (plant: CartItem) => plant.name === name
    );
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant: CartItem) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}
