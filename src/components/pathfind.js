import React, {useState, useEffect} from 'react'
import Node from './node'
import "./pathfind.css"

//DECLARING ROWS AND COLLUMNS FOR GRID

const rows = 15;
const cols = 10;





const Pathfind = () =>{

const [Grid, setGrid] = useState([]);


useEffect( () => {
    initializeGrid();
}, [])

//FUNCTION TO CREATE GRID
const initializeGrid = () => {
    const grid = new Array(rows);

    for (let i = 0; i < rows; i++){

        grid[i] = new Array(cols)
    }
        
    createSpot(grid);
    
    setGrid(grid);
}

//CREATE THE SPOT

const createSpot = (grid) => {

    for( let i = 0; i < rows; i++){

        for(let j = 0; j < cols; j++){

            grid[i][j] = new Spot(i, j);
        }
    }
}

//SPOT CONSTRUCTOR

function Spot(i, j){
    this.x = i;
    this.y = j;
    this.g = 0;
    this.f = 0;
    this.h = 0;
}


//GRID WITH NODE

const gridWithNode = (

    <div className="container"> 
        {Grid.map((cols, colsIndex) => {
            return (
                <div key={colsIndex}>
                    {cols.map((rows, rowsIndex) => {
                            return(
                                <Node key = {rowsIndex} />
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

console.log(Grid)

//RENDERING PATHFIND COMPONENT

    return (

        <div>
            <h1>PathFind Component!</h1>
            {gridWithNode}
        </div>
    )

}

export default Pathfind;