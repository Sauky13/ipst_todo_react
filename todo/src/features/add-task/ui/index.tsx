import { useState } from "react";
import { useAddTask } from "../../../entities/to-do/create";

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
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача"
      />
      <button onClick={handleAddTask} disabled={mutation.isPending}>
         Добавить
      </button>
    </div>
  );
};
