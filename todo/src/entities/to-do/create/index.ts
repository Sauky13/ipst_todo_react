import { useMutation } from "@tanstack/react-query";
import { taskActions } from "../../slice/model/index";

const addTask = async ({ text, date }: { text: string; date: string }) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      taskActions.addTask(text, date);
      resolve();
    }, 200);
  });
};

export const useAddTask = () => {
  return useMutation({
    mutationFn: addTask,
  });
};
