import { taskStore } from "../../task-store";
import { Task } from "../../task-store";

const saveTasksToLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(taskStore.state.tasks));
};

export const taskActions = {
  addTask: (text: string, date: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      date,
      completed: false,
    };
    taskStore.setState((prev) => ({ tasks: [...prev.tasks, newTask] }));
    saveTasksToLocalStorage();
  },

  deleteTask: (taskId: string) => {
    taskStore.setState((prev) => ({
      tasks: prev.tasks.filter((task) => task.id !== taskId),
    }));
    saveTasksToLocalStorage();
  },

  updateTask: (taskId: string, newText: string) => {
    taskStore.setState((prev) => ({
      tasks: prev.tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      ),
    }));
    saveTasksToLocalStorage();
  },

  toggleTaskCompletion: (taskId: string) => {
    taskStore.setState((prev) => ({
      tasks: prev.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
    saveTasksToLocalStorage();
  },
};
