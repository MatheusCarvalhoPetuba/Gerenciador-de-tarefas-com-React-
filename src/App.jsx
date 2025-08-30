import { useEffect, useState } from "react";
import { v4 } from "uuid";

// import ListTasks from "../ListTasks";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/tasks";
import api from "./server/api";

function App() {
  const [tasks, setTasks] = useState([]);

  async function onTaskclick(taskId) {
    const newTasks = tasks.map(async (task) => {
      if (task.id === taskId) {
        const completed = { ...task, isCompleted: !task.isCompleted };

        await api.patch(`/tasks/${taskId}`, completed);
        fetchTasks();
        return;
      }

      return task;
    });

    setTasks(newTasks);
  }

  // async function onDeleteTaskDelete(taskId) {

  //   const newTasks = tasks.filter((task) => task.id !== taskId);

  //   try {
  //     await api.delete(`/tasks/${taskId}`);

  //     setTasks(newTasks);
  //     fetchTasks();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function AddTaskClick(title, description) {
    if (title.trim() === "" || description.trim() === "") {
      return alert("Preencha todos os campos.");
    }

    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    try {
      const response = await api.post("/tasks", newTask);
      setTasks([...tasks, response]);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchTasks() {
    const response = await api.get("/tasks");

    setTasks(response.data);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="h-screen w-screen bg-slate-500 px-5">
      <div className="mx-auto max-w-3xl">
        <h2 className="py-5 text-center text-3xl font-semibold text-white">
          Gerenciador de tarefas
        </h2>
        <AddTasks AddTaskClick={AddTaskClick} />

        <div className="rounded-lg bg-slate-300 p-4 shadow-md">
          {tasks.map((task) => (
            <Tasks
              key={task.id}
              task={task}
              onTaskclick={onTaskclick}
              fetchTasks={fetchTasks}
            />
          ))}
          {/* <Tasks
            tasks={tasks}
            onTaskclick={onTaskclick}
            fetchTasks={fetchTasks}
            // onDeleteTaskDelete={onDeleteTaskDelete}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
