import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

interface CareScaleProps {
  scaleValue: number;
  careType: string;
}

const adjectiveValue = ["peu", "modérément", "modérément"];

export default function CareScale({ scaleValue, careType }: CareScaleProps) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={sun} alt="sun-icon" />
    ) : (
      <img src={water} alt="water-icon" />
    );

  function displayAlert(value: number, type: string) {
    alert(
      `Cette plante requiert ${adjectiveValue[value - 1]} de ${
        type === "light" ? "de lumiere" : "d'arrosage"
      }`
    );
  }

  return (
    <div onClick={() => displayAlert(scaleValue, careType)}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}
