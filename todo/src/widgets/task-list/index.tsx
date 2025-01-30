import { taskStore } from "../../entities/task-store";
import { useSyncExternalStore } from "react";
import { TaskItem } from "../task-item";

export const TaskList = ({ date }: { date: string }) => {
  const tasks = useSyncExternalStore(
    taskStore.subscribe,
    () => taskStore.state
  );

  const filteredTasks = tasks.tasks.filter((task) => task.date === date);

  return (
    <div>
      <h2 className="text-center mb-3">Задачи на {date}</h2>
      {filteredTasks.length === 0 ? <p>Нет задач</p> : null}
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};