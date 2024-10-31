export default function Card({ charactrData, alreadyClicked, setAlreadyClicked, score, setScore, highScore, setHighScore }) {
  function handleClick() {
    if (alreadyClicked.includes(charactrData)) {
      console.log("already clicked");
      setAlreadyClicked([])
      setScore(0)
      score > highScore ? setHighScore(score) : null;
    } else {
      console.log("new click");
      setAlreadyClicked([...alreadyClicked, charactrData]);
      setScore(score + 1);
    }
  }

  return (
    <img
      src={charactrData.image}
      alt={charactrData.name}
      key={charactrData.id}
      onClick={handleClick}
    />
  );
}
