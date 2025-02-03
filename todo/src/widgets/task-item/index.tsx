import { Task } from "../../entities/task-store";
import { useUpdateTaskPresenter } from "../../entities/slice/to-do/update/presenter";
import { useDeleteTask } from "../../entities/slice/to-do/delete/use-case";
import { taskActions } from "../../entities/slice/model";
import { Button } from "../../shared/ui/button";

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
  } = useUpdateTaskPresenter();

  return (
    <li className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => taskActions.toggleTaskCompletion(task.id)}
        />
        {editingTaskId === task.id ? (
          <>
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="border px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoFocus
            />
            <Button onClick={handleSave} variant="primary">
              Сохранить
            </Button>
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
      <Button
        onClick={() => deleteMutation.mutate({ taskId: task.id })}
        disabled={deleteMutation.isPending}
        variant="danger"
      >
        Удалить
      </Button>
    </li>
  );
};
