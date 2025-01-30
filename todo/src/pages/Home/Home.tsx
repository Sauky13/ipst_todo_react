import { AddTask } from "../../features/add-task/ui";
import { TaskList } from "../../widgets/task-list";
import { useDateSelector } from "../../features/date-selector/model";
import { DateSelector } from "../../features/date-selector/ui";

export const Home = () => {
  const { selectedDate, setSelectedDate } = useDateSelector();

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 ">Мои задачи</h1>

      <DateSelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <div className="mb-6 w-full max-w-lg bg-white p-4 rounded-md text-center shadow-md">
        <AddTask date={selectedDate} />
      </div>

      <div className="w-full max-w-lg bg-white p-4 rounded-md shadow-md">
        <TaskList date={selectedDate} />
      </div>
    </div>
  );
};
