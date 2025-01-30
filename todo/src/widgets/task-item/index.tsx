import { Task } from "../../entities/task-store";
import { useUpdateTask } from "../../entities/to-do/update";
import { useDeleteTask } from "../../entities/to-do/delete";
import { taskActions } from "../../entities/slice/model";

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const deleteMutation = useDeleteTask();
  const {
    editingTaskId,
    editedText,
    setEditedText,
    handleEditClick,
    handleSave,
  } = useUpdateTask();

  return (
    <li key={task.id} className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center gap-4">
        <input type="checkbox" checked={task.completed} onChange={() => taskActions.toggleTaskCompletion(task.id)}/>
        {editingTaskId === task.id ? (
          <>
            <input type="text" value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="border px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoFocus
            />
            <button 
              onClick={() => handleSave(task.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Сохранить
            </button>
          </>
        ) : (
          <span
            onClick={() => handleEditClick(task.id, task.text)}
            className="cursor-pointer text-gray-800 font-medium hover:text-blue-500 transition-all duration-200"
          >
            {task.text}
          </span>
        )}
      </div>
      <button
        onClick={() => deleteMutation.mutate(task.id)}
        disabled={deleteMutation.isPending}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Удалить
      </button>
    </li>
  );
};
