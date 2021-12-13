import React, { useCallback } from 'react';
import { Task } from '../index';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  newTaskLabel: string;
  setNewTaskLabel: React.Dispatch<React.SetStateAction<string>>;
};

const TaskForm: React.FC<Props> = ({ tasks, setTasks, newTaskLabel, setNewTaskLabel }) => {
  // フォームの値を保持する
  const handleNewTaskLabel = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
  }, []);

  // Taskの登録
  const handleAddTask = useCallback(() => {
    const newTask = { label: newTaskLabel, isDone: false };
    setTasks([...tasks, newTask]);
  }, [newTaskLabel, tasks, tasks]);

  // 完了したTaskを削除する
  const handleClearTask = useCallback(() => {
    const newTasks = tasks.filter((task) => !task.isDone);
    setTasks(newTasks);
  }, [tasks]);

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

export const MemolizedTaskForm = React.memo(TaskForm);
