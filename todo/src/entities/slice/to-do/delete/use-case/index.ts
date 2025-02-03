import { useMutation } from "@tanstack/react-query";
import { taskActions } from "../../../model";
import { DeleteTaskParams } from "../../../../../shared/interface/todo/port";

const deleteTask = async ({ taskId }: DeleteTaskParams) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      taskActions.deleteTask(taskId);
      resolve();
    }, 200);
  });
};

export const useDeleteTask = () => {
  return useMutation({
    mutationFn: deleteTask,
  });
};
