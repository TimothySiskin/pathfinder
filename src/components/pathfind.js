import React, {useState, useEffect} from 'react'
import Node from './node'
import Astar from '../aStarAlgorithm/aStar'
import "./pathfind.css"

//DECLARING ROWS AND COLLUMNS FOR GRID

const rows = 10;
const cols = 15;

const NODE_START_ROW = 0;
const NODE_START_COL = 0;

const NODE_END_ROW = rows - 1;
const NODE_END_COL = cols - 1;



const Pathfind = () =>{

const [Grid, setGrid] = useState([]);
const [Path, setPath] = useState([]);


useEffect( () => {
    initializeGrid();
}, [])

//FUNCTION TO CREATE GRID
const initializeGrid = () => {
    const grid = new Array(cols);

    for (let i = 0; i < cols; i++){

        grid[i] = new Array(rows)
    }
        
    createSpot(grid);
    
    setGrid(grid);

     addNeighbors(grid);

    const startNode = grid[NODE_START_COL][NODE_START_ROW];
    const endNode = grid[NODE_END_COL][NODE_END_ROW];

    let path =Astar(startNode, endNode);
    setPath(path);
}

//CREATE THE SPOT

const createSpot = (grid) => {

    for( let i = 0; i < cols; i++){

        for(let j = 0; j < rows; j++){

            grid[i][j] = new Spot(i, j);
        }
    }
}


//Add neighbors


const addNeighbors = (grid) => {

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            grid[i][j].addneighbors(grid);
        }
    }
}




//SPOT CONSTRUCTOR

function Spot(i, j){
    this.x = i;
    this.y = j;
    this.isStart = this.x === NODE_START_COL && this.y === NODE_START_ROW;
    this.isEnd = this.x === NODE_END_COL && this.y === NODE_END_ROW;
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.neighbors = [];
    this.previous = undefined;
    this.addneighbors = function (grid) {
        let i = this.x;
        let j = this.y;
        if( i > 0) this.neighbors.push(grid[i-1][j]);
        if(i < cols - 1) this.neighbors.push(grid[i+1][j]);
        if(j > 0) this.neighbors.push(grid[i][j-1]);
        if(j < rows - 1) this.neighbors.push(grid[i][j+1]);
    };
}


//GRID WITH NODE

const gridWithNode = (

    <div className="container"> 
        {Grid.map((cols, colsIndex) => {
            return (
                <div key={colsIndex}>
                    {cols.map((rows, rowsIndex) => {
                            const{isStart, isEnd} = rows;
                            return(
                                <Node key = {rowsIndex} isStart={isStart} isEnd={isEnd} row={rowsIndex} col={colsIndex} />
                            )
                        }
                    )
                    }
                </div>   
                
            )
        }
        )
    }
        
    </div>
) 


//RENDERING PATHFIND COMPONENT
console.log(Path);
    return (

        <div>
            <h1>PathFind Component!</h1>
            {gridWithNode}
        </div>
    )

}

export default Pathfind;