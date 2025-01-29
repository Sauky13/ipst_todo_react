import { taskStore } from "../../entities/task/model/taskStore";
import { useSyncExternalStore } from "react";

export const TaskList = ({ date }: { date: string }) => {
  const tasks = useSyncExternalStore(
    taskStore.subscribe,
    () => taskStore.state
  );

  const filteredTasks = tasks.tasks.filter((task) => task.date === date);

  return (
    <div>
      <h2>Задачи на {date}</h2>
      {filteredTasks.length === 0 ? <p>Нет задач</p> : null}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <div>
              <input type="checkbox" />
              <span>{task.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


