function space(value, route) {
  return {
    value,
    route
  }
}

function knight(start) {
  const possibleMoves = [
    [1, 2], [2, 1],
    [1, -2], [2, -1],
    [-1, 2], [-2, 1],
    [-1, -2], [-2, -1]
  ];

  const validateSpace = (space) => {
    for (let i of space) {
      if (i < 0 || i > 7) {
        return false;
      }
    }
    return true;
  };
  
  const getMoves = (coord = start) => {
    let moves = [];
    for (const move of possibleMoves) {
      const newMove = coord.map(function (num, idx) {
        return num + move[idx];
      })
      if (validateSpace(newMove)) {
        moves.push(newMove);
      }
    }
    return moves;
  };

  const compareCoord = (a, b) => {
    if (a.length !== b.length) return false;
    for (var i = 0, len = a.length; i < len; i++){
      if (a[i] !== b[i]){
        return false;
      }
    }
    return true; 
  };

  const knightMoves = (end) => {
    const queue = [];
    const startNode = space(start, [start]);
    queue.push(startNode);
    let foundSpace = false;
    while (foundSpace === false) {
      const chessSquare = queue.shift();
      const moves = getMoves(chessSquare.value);
      for (const move of moves) {
        if (compareCoord(move, end)) {
          const knightMoves = chessSquare.route.concat([move]);
          return knightMoves;
        }
        const spaceNode = space(move, chessSquare.route.concat([move]));
        queue.push(spaceNode);
      }
    }
  };

  return {
    knightMoves
  };
}

let bob = knight([0, 0]);
console.log(bob.knightMoves([3,3]));