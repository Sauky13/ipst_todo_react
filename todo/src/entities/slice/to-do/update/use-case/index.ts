import { useMutation } from "@tanstack/react-query";
import { taskActions } from "../../../model";
import { UpdateTaskParams } from "../../../../../shared/interface/todo/port";

const updateTask = async ({ taskId, newText }: UpdateTaskParams) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      taskActions.updateTask(taskId, newText);
      resolve();
    }, 500);
  });
};

export const useUpdateTask = () => {
  return useMutation<void, unknown, UpdateTaskParams>({
    mutationFn: updateTask,
  });
};

