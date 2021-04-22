function Astar(startNode, endNode) {
  let openSet = [];
  let closeSet = [];
  let path = [];
  let visitedNodes = [];
  

  openSet.push(startNode);

  while (openSet.length > 0) {
    let leastIndex = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[leastIndex].f) {
        leastIndex = i;
      }
    }

    let current = openSet[leastIndex];

    visitedNodes.push(current);
    if (current === endNode) {
      let temp = current;
      path.push(temp);

      while (temp.previous) {
        path.push(temp.previous);
        temp = temp.previous;
      }

      return { path, visitedNodes };
    }

    openSet = openSet.filter((element) => element !== current);

    closeSet.push(current);

    let neighbors = current.neighbors;
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];

      if (!closeSet.includes(neighbor) && !neighbor.isWall) {
        let tempG = current.g + 1;
        let newPath = false;
        if (openSet.includes(neighbor)) {
          if (tempG < neighbor.g) {
            neighbor.g = tempG;
            newPath = true;
          }
        } else {
          neighbor.g = tempG;
          newPath = true;
          openSet.push(neighbor);
        }

        if (newPath) {
          neighbor.h = heruistic(neighbor, endNode);
          neighbor.f = neighbor.h + neighbor.g;
          neighbor.previous = current;
        }
      }
    }
  }

  function heruistic(a, b) {
    let d = Math.abs(a.x - a.y) + Math.abs(b.x - b.y);
    return d;
  }

  return { path, visitedNodes, error: "No path found!" };
}

export default Astar;
