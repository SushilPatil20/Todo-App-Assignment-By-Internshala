import { useState } from "react";
const ToDoItem = ({
  BtnComponent,
  item,
  deleteToDo,
  updateToDo,
  saveChanges,
  setTaskIsCompleted,
  id,
}) => {
  const [updatedText, setUpdatedText] = useState(item.item);

  return (
    <>
      <li
        className={`min-h-14 border border-purple-700 flex
          items-center justify-between px-4 py-2 rounded-md ${
            item.isCompleted ? "blur-sm" : ""
          }`}
      >
        {item.isEditing ? (
          <input
            type="text"
            value={updatedText}
            placeholder="Enter new Todo"
            className="border border-gray-500 px-4 py-2 outline-none w-full mx-2"
            onChange={(e) => setUpdatedText(e.target.value)}
          />
        ) : (
          <span className="text-xl">{item.item}</span>
        )}
        <div className="flex items-center space-x-4">
          {!item.isCompleted && (
            <BtnComponent
              btnName={item.isEditing ? "Save" : "Edit"}
              style={` ${
                item.isEditing ? "bg-blue-600 hover:bg-blue-700" : ""
              } text-sm border-none px-4 py-1 rounded bg-green-600 hover:bg-green-700 text-white font-bold duration-200`}
              Operation={() =>
                item.isEditing ? saveChanges(id, updatedText) : updateToDo(id)
              }
            />
          )}
          {item.isEditing ? null : (
            <BtnComponent
              btnName="Delete"
              style="text-sm border-none px-4 py-1 rounded bg-red-600 hover:bg-red-700 text-white font-bold duration-200"
              Operation={() => deleteToDo(id)}
            />
          )}
          {console.log(item)}
          {item.isEditing ? null : (
            <input
              type="checkbox"
              className="h-6 w-6"
              onChange={() => setTaskIsCompleted(id)}
              checked={item.isCompleted}
            />
          )}
        </div>
      </li>
    </>
  );
};

export default ToDoItem;
