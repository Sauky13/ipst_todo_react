import { useMutation } from "@tanstack/react-query";
import { taskActions } from "../../slice/model/index";
import { useState } from "react";

const updateTask = async ({
  taskId,
  newText,
}: {
  taskId: string;
  newText: string;
}) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      taskActions.updateTask(taskId, newText);
      resolve();
    }, 500);
  });
};

export const useUpdateTask = () => {
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState<string>("");

  const mutation = useMutation({
    mutationFn: updateTask,
  });

  const handleEditClick = (taskId: string, text: string) => {
    setEditingTaskId(taskId);
    setEditedText(text);
  };

  const handleSave = (taskId: string) => {
    if (editedText.trim()) {
      mutation.mutate({ taskId, newText: editedText });
    }
    setEditingTaskId(null);
  };



  return {
    editingTaskId,
    editedText,
    setEditedText,
    handleEditClick,
    handleSave,
    isUpdating: mutation.isPending,
  };
};
