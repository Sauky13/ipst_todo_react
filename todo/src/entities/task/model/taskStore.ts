import { Store } from "@tanstack/react-store";

export interface Task {
  id: string;
  text: string;
  date: string; 
  completed: boolean;
}


export const taskStore = new Store<{ tasks: Task[] }>({
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"), 
});


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

 
};
