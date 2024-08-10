import Button from "./components/Button";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <Header BtnComponent={Button} ToDoList={ToDoList} />
    </>
  );
}

export default App;
