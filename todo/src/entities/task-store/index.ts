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

