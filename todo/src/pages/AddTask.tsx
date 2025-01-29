import { useState } from 'react';
import { taskActions } from '../entities/task/model/taskStore';

export const AddTask = ({ date }: { date: string }) => {
  const [text, setText] = useState('');

  const handleAddTask = () => {
    if (text.trim()) {
      taskActions.addTask(text, date);
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача"
      />
      <button onClick={handleAddTask}>
        Добавить
      </button>
    </div>
  );
};
