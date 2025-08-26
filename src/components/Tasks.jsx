import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Tasks = ({ tasks, onTaskclick, onDeleteTaskDelete }) => {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    navigate(`/task/${task.id}`);
  }

  return (
    <ul className="flex flex-col gap-3">
      {tasks.map((task) => (
        <li className="flex justify-between gap-2" key={task.id}>
          <button
            onClick={() => onTaskclick(task.id)}
            className={`flex w-full list-none items-center gap-1 rounded-lg bg-slate-400 p-3 text-start font-semibold tracking-wide text-white ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted && <FaCheck className="duration-300" />}
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="rounded-lg bg-slate-400 p-3 text-white duration-300 hover:bg-slate-600"
          >
            <MdKeyboardDoubleArrowRight size={18} />
          </button>
          <button
            onClick={() => onDeleteTaskDelete(task.id)}
            className="rounded-lg bg-slate-400 p-3 text-white duration-300 hover:bg-slate-600"
          >
            <FaRegTrashAlt size={18} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
