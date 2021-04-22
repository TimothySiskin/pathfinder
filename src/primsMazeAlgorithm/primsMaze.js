function primsMaze(grid, startNode, endNode) {
  let current = startNode;

  let end = endNode;
  let maze = new Set();
  let walls = new Set();

  //First step of algorithm: all cells must be walls

  for (let cells of grid) {
    for (let value of cells) {
      value.isWall = true;
    }
  }

  //secend step: chose a first cell and add it to the maze, next add neighbors to the walls:

  current.isWall = false;
  end.isWall = true;

  maze.add(current);

  for (let value of current.neighbors) {
    walls.add(value);
  }

  primsAlgorithm(current);

  //***************************************************************************************************** */

  function primsAlgorithm(current) {
    //third step:

    if (walls.size > 0) {
      //Cheking if only one cell neighbor is a path

      let neighborPath = 0;

      for (let value of current.neighbors) {
        if (value.isWall === false) {
          neighborPath++;
        }
      }

      if (neighborPath === 1) {
        current.isWall = false;
        maze.add(current);
        for (let values of current.neighbors) {
          if (!maze.has(values)) {
            walls.add(values);
          }
        }
      }
    } else {
      return;
    }

    /*********************************************************************************************** */

    let randomCell = Math.floor(Math.random() * walls.size);
    let wallsArr = [...walls];
    let randomWall = wallsArr[randomCell];

    walls.delete(randomWall);
    console.log(walls);

    primsAlgorithm(randomWall);
  }

  end.isWall = false;
}

export default primsMaze;
