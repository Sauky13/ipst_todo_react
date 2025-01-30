import { useMutation } from "@tanstack/react-query";
import { taskActions } from "../../slice/model/index";

const deleteTask = async (taskId: string) => {
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
