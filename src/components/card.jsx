export default function Card({ charactrData, alreadyClicked, setAlreadyClicked, score, setScore, highScore, setHighScore }) {
  function handleClick() {
    if (alreadyClicked.includes(charactrData)) {
      setAlreadyClicked([]);
      setScore(0);
      score > highScore ? setHighScore(score) : null;
    } else {
      setAlreadyClicked([...alreadyClicked, charactrData]);
      setScore(score + 1);
    }

  }

  return (
      <img
        className="card"
        src={charactrData.image}
        alt={charactrData.name}
        key={Math.random()}
        onClick={handleClick}
      />
  );
}
