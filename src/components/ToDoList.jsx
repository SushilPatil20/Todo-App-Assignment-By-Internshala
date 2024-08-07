import ToDoItem from "./ToDoItem";

const ToDoList = ({ BtnComponent }) => {
  return (
    <>
      <section className="w-4/5 block mx-auto mt-14 md:w-1/2">
        <ul>
          <ToDoItem BtnComponent={BtnComponent} />
        </ul>
      </section>
    </>
  );
};
export default ToDoList;
