import ToDoItem from "./ToDoItem";

const ToDoList = ({ BtnComponent, items, setItems }) => {
  // ---------------- Delete todo function ----------------
  function deleteToDo(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems([...newArray]);
  }

  // ---------------- edit todo function ----------------
  function updateToDo(id) {
    const updatedToDo = items.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: true };
      }
      return todo;
    });
    setItems([...updatedToDo]);
  }

  // ---------------- update todo function ----------------
  function saveChanges(id, updatedText) {
    if (updatedText) {
      const updatedArray = items.map((item) => {
        if (item.id === id) {
          item.item = updatedText;
          return item;
        } else {
          return item;
        }
      });
      const item = items.find((item) => item.id === id);
      item.isEditing = false;
      setItems([...updatedArray]);
    } else {
      alert("Enter your TODO");
    }
  }

  // ---------------- Set todo is completed function ----------------
  const setTaskIsCompleted = (id) => {
    const newArray = items.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = todo.isCompleted === true ? false : true;
        return todo;
      } else {
        return todo;
      }
    });
    setItems([...newArray]);
  };

  return (
    <>
      <section className="w-full block mx-auto mt-14">
        <ul className="space-y-6">
          {items.map((item) => (
            <ToDoItem
              key={item.id}
              BtnComponent={BtnComponent}
              item={item}
              deleteToDo={deleteToDo}
              updateToDo={updateToDo}
              saveChanges={saveChanges}
              setTaskIsCompleted={setTaskIsCompleted}
              id={item.id}
            />
          ))}
        </ul>
      </section>
    </>
  );
};
export default ToDoList;
