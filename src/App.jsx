import { useState } from "react";
import { v4 } from "uuid";

import ListTasks from "../ListTasks";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/tasks";

function App() {
  const [tasks, setTasks] = useState(ListTasks);

  function onTaskclick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  function AddTaskClick(title, description) {
    if (title.trim() === "" || description.trim() === "") {
      return alert("Preencha todos os campos.");
    }

    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="h-screen w-screen bg-slate-500 px-5">
      <div className="mx-auto max-w-3xl">
        <h2 className="py-5 text-center text-3xl font-semibold text-white">
          Gerenciador de tarefas
        </h2>
        <AddTasks AddTaskClick={AddTaskClick} />

        <div className="rounded-lg bg-slate-300 p-4 shadow-md">
          <Tasks
            tasks={tasks}
            onTaskclick={onTaskclick}
            onDeleteTaskDelete={onDeleteTaskDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
