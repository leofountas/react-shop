import CareScale from "./CareScale";
import "../styles/PlantItem.css";
import { Plant } from "../@types/plantTypes";

function handleClick(plantName: string) {
  alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}

export default function PlantItem({ name, cover, id, light, water }: Plant) {
  return (
    <li className="lmj-plant-item" key={id}>
      <img
        className="lmj-plant-item-cover"
        src={cover}
        alt={`${name} cover`}
        onClick={() => handleClick(name)}
      />
      {name}
      {/* {isBestSale && <span>🔥</span>} */}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}
