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
  
  const getMoves = (space = start) => {
    let moves = [];
    for (const move of possibleMoves) {
      const newMove = space.map(function (num, idx) {
        return num + move[idx];
      })
      if (validateSpace(newMove)) {
        moves.push(newMove);
      }
    }
    console.log(moves);
    return moves;
  };

  return {
    getMoves
  };
}

let bob = knight((0, 0));
console.log(bob.getMoves());