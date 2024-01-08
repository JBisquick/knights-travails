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

  return {
    validateSpace
  };
}

let bob = knight((0, 0));
console.log(bob.validateSpace([4, 6]));