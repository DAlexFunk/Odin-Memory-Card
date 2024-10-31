import { useEffect, useState } from "react";
import Card from "./components/card";
import "./index.css";

function App() {
  const [data, setData] = useState([{ name: "DATA NOT FOUND" }]);
  const [alreadyClicked, setAlreadyClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json"
      );
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

  const randomOrder = data.toSorted((a,b) => 0.5 - Math.random())

  return (
  <>
  <h1>{`Score: ${currentScore} High Score: ${highScore}`}</h1>
  {randomOrder.map((character) => (
    <Card
      charactrData={character}
      alreadyClicked={alreadyClicked}
      setAlreadyClicked={setAlreadyClicked}
      score={currentScore}
      setScore={setCurrentScore}
      highScore={highScore}
      setHighScore={setHighScore}
    />
  ))}
  </>)
}

export default App;
