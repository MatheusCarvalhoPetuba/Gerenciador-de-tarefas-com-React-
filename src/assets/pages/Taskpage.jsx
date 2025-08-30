import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

import api from "../../server/api";

const Taskpage = () => {
  const [task, setTask] = useState();
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  const navigate = useNavigate();

  const { taskid } = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await api.get(`/tasks/${taskid}`);
        console.log(response.data);

        setTask(response.data);
        setIsLoadingPage(false);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };

    fetchTask();
  }, [taskid]);

  if (isLoadingPage) {
    return (
      <div className="w-screen h-screen bg-slate-400 flex items-center justify-center text-4xl">
        <AiOutlineLoading3Quarters className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-3 bg-slate-400 text-3xl text-slate-700 p-2 rounded-full hover:bg-slate-700 hover:text-slate-500 duration-300"
      >
        <IoArrowUndoSharp />
      </button>
      <div
        className={`shadow-lg bg-slate-400 text-white font-semibold p-5 rounded-lg space-y-5 max-w-3xl m-auto ${task?.isCompleted ? "bg-green-400" : ""}`}
      >
        <h1 className="text-3xl text-center text-slate-600">{task?.title}</h1>
        <div className="space-y-4">
          <h2 className="text-2xl">decrição da tarefa:</h2>
          <p className="bg-slate-600 p-3 rounded-md">{task?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Taskpage;
