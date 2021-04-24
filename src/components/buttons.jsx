import react from "react";

const buttons = (props) => {
  const {
    visualizePath,
    visualizeMaze,
    setMaze,
    mazeGen,
    cleanVisualization,
    cleanMaze,
  } = props;

  async function submitHandler(e) {
    e.preventDefault();
    cleanVisualization();
    setMaze({ type: e.target[0].value });
    mazeGen(e.target[0].value);
    visualizeMaze();
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <select name="maze-type">
          <option value="recursive" selected>
            Recursive Division Maze
          </option>
          <option value="primsMaze">Prims Maze</option>
          <option value="random">Random Maze</option>
        </select>
        <button type="submit">Create Maze</button>
      </form>
      <button onClick={visualizePath}>Visualize Path</button>
      <button onClick={cleanMaze}>Clean Maze</button>
    </div>
  );
};

export default buttons;
