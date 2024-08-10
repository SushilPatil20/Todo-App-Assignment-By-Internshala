import { useState, useEffect } from "react";
const dataFronmLocal = JSON.parse(localStorage.getItem("items"));

const Header = ({ BtnComponent, ToDoList }) => {
  const [items, setItems] = useState(dataFronmLocal || []);
  const [item, setItem] = useState("");

  // ------ storing the items into local storage each time there us changes in items ------
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (item) {
      const newItem = {
        id: Date.now(),
        item: item,
        isEditing: false,
        isCompleted: false,
      };
      setItems([...items, newItem]);
    } else {
      alert("Enter your TODO");
    }
    setItem("");
  };

  return (
    <>
      <header className="w-4/5 block mx-auto md:w-1/2">
        <h1 className="text-center text-6xl text-purple-600 my-12 font-mono">
          ToDo App
        </h1>
        <section className="flex items-center justify-between space-x-4 mt-16">
          <input
            type="text"
            placeholder="Enter task"
            className="border border-purple-700 outline-none w-4/5 px-4 py-4 rounded-md text-lg focus:shadow-md focus:shadow-purple-700 focus:border-none"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <BtnComponent
            btnName="Add Task"
            style="px-4 py-4 border border-gray-600 min-w-28 rounded-md text-lg bg-purple-600 font-bold text-white cursor-pointer hover:bg-purple-700 duration-200"
            Operation={addItem}
          />
        </section>
        <ToDoList
          BtnComponent={BtnComponent}
          items={items}
          setItems={setItems}
        />
      </header>
    </>
  );
};

export default Header;
