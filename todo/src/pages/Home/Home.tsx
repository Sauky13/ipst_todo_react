import { useState } from "react";
import { AddTask } from "../../features/add-task/ui";
import { TaskList } from "../../widgets/task-list";
import { format } from "date-fns";

export const Home = () => {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Мои задачи</h1>

      <div className="mb-6">
        <label htmlFor="date" className="block text-lg font-medium mb-2">Выберите дату</label>
        <input
          id="date"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border"
        />
      </div>

      <div className="mb-6 w-full max-w-md">
        <AddTask date={selectedDate} />
      </div>

      <div className="w-full max-w-md">
        <TaskList date={selectedDate} />
      </div>
    </div>
  );
};