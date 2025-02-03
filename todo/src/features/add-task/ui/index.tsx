import { useState } from "react";
import { useAddTask } from "../../../entities/slice/to-do/create/use-case";

export const AddTask = ({ date }: { date: string }) => {
  const [text, setText] = useState("");
  const mutation = useAddTask();

  const handleAddTask = () => {
    if (text.trim()) {
      mutation.mutate(
        { text, date },
        {
          onSuccess: () => {
            setText("");
          },
        }
      );
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача"
        className="border border-gray-300 rounded-md p-2 flex-grow"
      />
      <button
        onClick={handleAddTask}
        disabled={mutation.isPending}
        className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 disabled:bg-gray-400"
      >
        Добавить
      </button>
    </div>
  );
};
