import React, { useState, useEffect } from "react";
import Node from "./node";
import Astar from "../aStarAlgorithm/aStar";
import primsMaze from "../primsMazeAlgorithm/primsMaze";
import "./pathfind.css";

//DECLARING ROWS AND COLLUMNS FOR GRID

const rows = 20;
const cols = 30;

const NODE_START_ROW = 0;
const NODE_START_COL = 0;

const NODE_END_ROW = rows - 1;
const NODE_END_COL = cols - 1;

const Pathfind = () => {
  const [Grid, setGrid] = useState([]);
  const [Path, setPath] = useState([]);
  const [VisitedNodes, setVisitedNodes] = useState([]);
  const [startAndEnd, setStartAndEnd] = useState({});
  const [Maze, setMaze] = useState({});

  useEffect(() => {
    initializeGrid();
  }, []);

  //FUNCTION TO CREATE GRID
  const initializeGrid = () => {
    const grid = new Array(cols);

    for (let i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
    }

    createSpot(grid);

    setGrid(grid);

    addNeighbors(grid);

    setStartAndEnd({
      start: grid[NODE_START_COL][NODE_START_ROW],
      end: grid[NODE_END_COL][NODE_END_ROW],
    });
  };

  //CREATE THE SPOT

  const createSpot = (grid) => {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = new Spot(i, j);
      }
    }
  };

  //Add neighbors

  const addNeighbors = (grid) => {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].addneighbors(grid);
      }
    }
  };

  //SPOT CONSTRUCTOR

  function Spot(i, j) {
    this.x = i;
    this.y = j;
    this.isStart = this.x === NODE_START_COL && this.y === NODE_START_ROW;
    this.isEnd = this.x === NODE_END_COL && this.y === NODE_END_ROW;
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.neighbors = [];
    this.isWall = false;
    this.weight = 0;
    this.previous = undefined;
    this.addneighbors = function (grid) {
      let i = this.x;
      let j = this.y;
      if (i > 0) this.neighbors.push(grid[i - 1][j]);
      if (i < cols - 1) this.neighbors.push(grid[i + 1][j]);
      if (j > 0) this.neighbors.push(grid[i][j - 1]);
      if (j < rows - 1) this.neighbors.push(grid[i][j + 1]);
    };
  }

  //GRID WITH NODE

  const gridWithNode = (
    <div className="container">
      {Grid.map((cols, colsIndex) => {
        return (
          <div key={colsIndex}>
            {cols.map((rows, rowsIndex) => {
              const { isStart, isEnd, isWall, weight } = rows;
              return (
                <Node
                  key={rowsIndex}
                  isStart={isStart}
                  isEnd={isEnd}
                  row={rowsIndex}
                  col={colsIndex}
                  isWall={isWall}
                  weight={weight}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );

  //Visualize Path

  const visualizePath = () => {
    let path = Astar(startAndEnd.start, startAndEnd.end);
    setVisitedNodes(path.visitedNodes);
    setPath(path.path);

    animate();

    console.log(path);
    console.log(VisitedNodes);
    console.log(Path);

    function animate() {
      for (let i = 0; i <= VisitedNodes.length; i++) {
        if (i === VisitedNodes.length) {
          setTimeout(() => {
            visualizeShortesPath(Path);
          }, 20 * i);
        } else {
          setTimeout(() => {
            const node = VisitedNodes[i];
            document.getElementById(`node-${node.x}-${node.y}`).className +=
              " node-visited";
          }, 20 * i);
        }
      }

      const visualizeShortesPath = (shotestPathNodes) => {
        for (let i = 0; i < shotestPathNodes.length; i++) {
          setTimeout(() => {
            const { x, y } = shotestPathNodes[i];
            document.getElementById(`node-${x}-${y}`).className +=
              "node node-shortest-path";
          }, 10 * i);
        }
      };
    }
  };

  /********************************************************************** */

  const visualizeMaze = () => {
    let maze = primsMaze(Grid, startAndEnd.start, startAndEnd.end);
    setMaze(maze);

    animate();

    function animate() {
      let index = 0;
      for (let cells of Grid) {
        for (let cell of cells) {
          if (!maze.has(cell)) {
            setTimeout(() => {
              const { x, y } = cell;
              document.getElementById(`node-${x}-${y}`).className += " isWall";
            }, 5 * index);
          }
          index++;
        }
      }
    }
  };

  //RENDERING PATHFIND COMPONENT

  return (
    <div>
      <h1>PathFind Component!</h1>
      <div>
        <button onClick={visualizePath}>Visualize Path</button>
        <button onClick={visualizeMaze}>Create Maze</button>
      </div>
      <div>{gridWithNode}</div>
    </div>
  );
};

export default Pathfind;
