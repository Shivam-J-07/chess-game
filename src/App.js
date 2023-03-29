import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState } from "react";

function App() {
  const [game, setGame] = useState(new Chess());

  const pieceDrop = (source, target) => {
    console.log(source, target)
    const newGame = new Chess(game.fen())
    let move;
    try {
      move = newGame.move({
        from: source,
        to: target
      })
    } catch (e) {
      console.log(e)
    }
    setGame(newGame)
  }

  return (
    <>
      <div className="w-screen h-screen flex justify-center bg-[#4D2E19]">
        <div className="my-auto">
          <Chessboard position={game.fen()} boardWidth={750} onPieceDrop={(source, target) => pieceDrop(source, target)}/>
        </div>
      </div>
    </>
  );
}

export default App;

  // const makeRandomMove = () => {
  //   const possibleMove = game.move();

  //   if (game.isGameOver() || game.isDraw() || possibleMove.length() === 0)
  //     return;

  //   const randomIndex = Math.floor(Math.random() * possibleMove.length);
  //   //play random move
  //   safeGameMutate((game) => {
  //     game.move(possibleMove[randomIndex]);
  //   });
  // };

  // const safeGameMutate = (modify) => {
  //   setGame((g) => {
  //     const update = { ...g };
  //     modify(update);
  //     return update;
  //   });
  // };