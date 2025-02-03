import { useState } from "react";
import { useUpdateTask } from "../use-case";

export const useUpdateTaskPresenter = () => {
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState<string>("");
  
  const mutation = useUpdateTask();

  const handleEditClick = (taskId: string, text: string) => {
    setEditingTaskId(taskId);
    setEditedText(text);
  };

  const handleSave = () => {
    if (editingTaskId && editedText.trim()) {
      mutation.mutate({ taskId: editingTaskId, newText: editedText });
      setEditingTaskId(null);
    }
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
