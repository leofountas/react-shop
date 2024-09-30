import "../styles/ShoppingList.css";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import { Plant } from "../@types/plantTypes";

export default function ShoppingList() {
  // Set object selct only the unique elements of the Array created by map
  // then the spread operator (...) take all the elemnt form the object Set e spread them again in the Array
  const categories = [
    ...new Set(plantList.map((plant: Plant) => plant.category)),
  ];
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
}
