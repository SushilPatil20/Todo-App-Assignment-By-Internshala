const ToDoItem = ({ BtnComponent }) => {
  return (
    <>
      <li className="min-h-14 border border-purple-700 flex items-center justify-between px-4 py-2 rounded-md">
        <span className="text-xl">Task 1</span>
        <div className="flex items-center space-x-4">
          <BtnComponent
            btnName="Update"
            style="text-sm border-none px-4 py-1 rounded bg-green-600 hover:bg-green-700 text-white font-bold duration-200"
          />
          <BtnComponent
            btnName="Delete"
            style="text-sm border-none px-4 py-1 rounded bg-red-600 hover:bg-red-700 text-white font-bold duration-200"
          />
          <input type="checkbox" className="h-6 w-6" />
        </div>
      </li>
    </>
  );
};

export default ToDoItem;
