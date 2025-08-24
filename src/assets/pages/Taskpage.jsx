import { IoArrowUndoSharp } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";

const Taskpage = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-3 bg-slate-400 text-3xl text-slate-700 p-2 rounded-full hover:bg-slate-700 hover:text-slate-500 duration-300"
      >
        <IoArrowUndoSharp />
      </button>
      <div className="bg-slate-400 text-white font-semibold p-5 rounded-lg space-y-5 max-w-3xl m-auto">
        <h1 className="text-3xl text-center">{title}</h1>
        <div className="space-y-4">
          <h2 className="text-2xl text-slate-600 ">decrição da tarefa:</h2>
          <p className="bg-slate-600 p-3 rounded-md">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Taskpage;
