import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [data, setData] = useState([{ name: "DATA NOT FOUND" }]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json");
      const data = await response.json();
      setData([
        data[0],
        data[9],
        data[10],
        data[18],
        data[30],
        data[44],
        data[50],
        data[51],
        data[52],
        data[56],
      ]);
    })();
  }, []);

  return data.map((character) => {
    return (
      <div id={character.id}>
        <p>
          {data.indexOf(character) + 1} {character.name}
        </p>
        <img src={character.image} alt={character.name} />
      </div>
    );
  });
}

export default App;
