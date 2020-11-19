function primsMaze(grid, startNode, endNode){

let current = startNode;

let end = endNode;
let maze = [];
let walls = [];

let save = 0;




//First step of algorithm: all cells must be walls
//Additionaly I added a weight to all grid cells
    for(let values of grid){
    for(let value of values){
        value.isWall = true;
        value.weight = Math.floor(
            Math.random() * 100
            ) +1 ;
    }
}




//secend step: chose a first cell and add it to the maze, next add neighbors to the walls:

current.isWall = false;
end.isWall = false;
maze.push(current);
//console.log(maze)



primsAlgorithm(current);


//***************************************************************************************************** */

function primsAlgorithm (current) {
    
    
    //console.log(`to jest current`)
    //console.log(current)

    for(let value of current.neighbors){

        walls.push(value)
        
       // //console.log(value);
       
    }
    //console.log(`jestem w petli przypisujacej sąsiadów do wall[]: i w tym momencie wygląda to tak:`);
    //console.log(walls);
    
    
    
    //third step: 
    
    if(walls.length > 0){

        //Random, hight number
        let lowestWeight = 200;
    
        let randomCell = Math.floor(Math.random() * (walls.length))
        let randomWall = walls[randomCell];

        //console.log(`jestem w głównej pętli while)`)
        //console.log(walls.length)

        console.log(lowestWeight);

        console.log(`to jest wall po usunieciu elementow ktore sa w maze`)
                for(let value of walls){

                   console.log(value)
                }

        for(let cell of walls){
            if(cell.weight < lowestWeight){

                lowestWeight = cell.weight 
                
            }
        }
        console.log(`jestem w pętli sprawdzającej najmniejszą wartość sąsiadów, nie wiem, czy to działa poprawnie. Najmnijesza wartość to:`)
        console.log(lowestWeight);


        for(let cell of walls){

                //Cheking if only one cell neighbor is a path

                let neighborPath = 0;


                for(let value of cell.neighbors){
                    if(value.isWall === false ){
                        neighborPath++
                        
                        
                    }
                    
                }

                //console.log(`jestem w pętli sprawdzającej ilu sąsiadów jest elementem ścieżki labiryntu: na ten moment wynosi ona: ${neighborPath}`)

                //checking if cell weight is lowest from neighbours and it has only one neighbor that is path element

            if(cell.weight === lowestWeight && neighborPath === 1 && cell.isWall){


                //console.log(`jestem w pętli która sprawdza czy waga ściany jest najmniejsza i czy ma ona dokładnie jednego sasiada bedącego ścieżką`)
                cell.isWall = false;
                maze.push(cell);

                for (let values of cell.neighbors){
                    walls.push(values)
                    
                }
                //console.log(`jestem w pętli na końcu algorytmu, która dodaje sąsiadów do wall wygląda to teraz tak:`)
                //console.log(walls)
                //i must pop cell from walls[]

               console.log(`to jest wall`)
               
                for(let value of walls){

                    console.log(value)
                }


                console.log(`to jest maze`)


                for( let value of maze){


                    //TEN DZIAŁA

                    walls.splice(walls.indexOf(value), 1)


                }


               console.log(`to jest wall po usunieciu elementow ktore sa w maze`)
                for(let value of walls){

                   console.log(value)
                }

                //console.log(`przeprowadziłem cały algorytm z pętli while i usunołem element, który stał się częścią ścieżki. walls wygląda teraz tak:`)
                //console.log(walls)
                //console.log(maze)

            }


        }

        save++;

        if(save === 3 ){
            //console.log("przekroczono limit")
            return;
        }

        current = randomWall;

        primsAlgorithm(current);

    }

// if (!(current.isWall && randomWall.isWall)){

//     randomWall.isWall = false;


// }



    //     if((current.isWall === false && randomWall.isWall !== false) || (current.isWall !== false && randomWall.isWall === false)){

            
    //         randomWall.isWall = false;
    //         walls = [];
    //         for(let value of randomWall.neighbors){
    //             walls.push(value)
    //         }
    
    //         // walls = walls.filter((values) => values !== randomWall)
    //         //         //  .filter((values) => {

    //         //         //     //console.log(values)
    //         //         //     return (values.isWall === false);

    //         //         //   });
    //     }
    
        
    
        
    
        
    //     recursion++
    //     if(recursion === 25){

    //         return //console.log("zjebałeś")
    //     }
    //     primsAlgorithm(randomWall);
    
    // }





}

}



//*********************************************************************** */



export default primsMaze