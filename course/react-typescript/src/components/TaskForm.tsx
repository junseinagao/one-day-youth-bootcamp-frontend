import React from 'react';
import { Task } from '..';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  newTaskLabel: string;
  setNewTaskLabel: React.Dispatch<React.SetStateAction<string>>;
};

export const TaskForm: React.FC<Props> = ({ tasks, setTasks, newTaskLabel, setNewTaskLabel }) => {
  // フォームの値を保持する
  const handleNewTaskLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
  };

  // Taskの登録
  const handleAddTask = () => {
    const newTask = { label: newTaskLabel, isDone: false };
    setTasks([...tasks, newTask]);
  };

  // 完了したTaskを削除する
  const handleClearTask = () => {
    const newTasks = tasks.filter((task) => !task.isDone);
    setTasks(newTasks);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleNewTaskLabel}
        value={newTaskLabel}
        placeholder="Enter the task"
      />
      <div>
        <button onClick={handleAddTask}>Add</button>
        <button onClick={handleClearTask}>Clear</button>
      </div>
    </>
  );
};
