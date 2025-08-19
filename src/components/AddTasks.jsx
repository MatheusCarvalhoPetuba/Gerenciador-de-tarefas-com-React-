import { useRef, useState } from "react";

import InputTask from "./InputTask";

const AddTasks = ({ AddTaskClick }) => {
  const nameTask = useRef(null);
  // const [nameTask, setNameTask] = useState("");
  const descriptionTask = useRef(null);

  function handleAddTaskClick(e) {
    e.preventDefault();

    const title = nameTask.current.value;
    const description = descriptionTask.current.value;

    AddTaskClick(title, description);
  }

  return (
    <div className="bg-slate-300 p-4 rounded-lg mb-5 shadow-md">
      <form className="flex flex-col gap-3">
        <InputTask ref={nameTask} type="text" placeholder="Nome da tarefa" />
        <InputTask
          ref={descriptionTask}
          type="text"
          placeholder="Descrição da tarefa"
        />
        <button
          onClick={handleAddTaskClick}
          className="bg-slate-600 text-white font-semibold p-2 rounded-lg hover:bg-slate-500 duration-300"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default AddTasks;
