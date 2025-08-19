import { forwardRef } from "react";

const InputTask = forwardRef(({ placeholder }, ref) => {
  return (
    <input
      className="py-2 px-3 font-semibold text-slate-500 rounded-lg"
      type="text"
      placeholder={placeholder}
      ref={ref}
    />
  );
});

InputTask.name = "input";

export default InputTask;
