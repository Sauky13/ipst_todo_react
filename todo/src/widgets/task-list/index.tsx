import { taskStore } from "../../entities/task-store";
import { useSyncExternalStore } from "react";
import { useDeleteTask } from "../../entities/to-do/delete";

export const TaskList = ({ date }: { date: string }) => {
  const tasks = useSyncExternalStore(
    taskStore.subscribe,
    () => taskStore.state
  );

  const mutation = useDeleteTask();

  const filteredTasks = tasks.tasks.filter((task) => task.date === date);

  return (
    <div>
      <h2>Задачи на {date}</h2>
      {filteredTasks.length === 0 ? <p>Нет задач</p> : null}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span>{task.text}</span>
            </div>
            <button
              onClick={() => mutation.mutate(task.id)}
              disabled={mutation.isPending}
              className="text-red-500 hover:text-red-700">
               Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


