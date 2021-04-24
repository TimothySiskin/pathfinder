import react from "react";

const buttons = (props) => {
  console.log(props);
  const {
    visualizePath,
    visualizeMaze,
    setMaze,
    mazeGen,
    cleanVisualization,
  } = props;

  async function submitHandler(e) {
    e.preventDefault();
    await cleanVisualization();
    await setMaze({ type: e.target[0].value });
    await mazeGen(e.target[0].value);
    await visualizeMaze();
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <select name="maze-type">
          <option value="empty" selected>
            Empty Maze
          </option>
          <option value="primsMaze">Prims Maze</option>
          <option value="recursive">Recursive Division Maze</option>
        </select>
        <button type="submit">Create Maze</button>
      </form>
      <button onClick={visualizePath}>Visualize Path</button>
    </div>
  );
};

export default buttons;
