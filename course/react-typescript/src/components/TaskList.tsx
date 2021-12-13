import React from 'react';
import { Task } from '..';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  // Taskの状態を切り替える
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const newTasks = tasks.map((task, _i) => {
      return _i === i ? { ...task, isDone: e.target.checked } : task;
    });
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={`todo-${index}`}>
            {task.isDone ? <s>{task.label}</s> : task.label}
            <input
              type="checkbox"
              onChange={(e) => handleCheckBox(e, index)}
              checked={task.isDone}
            />
          </li>
        );
      })}
    </ul>
  );
};

export const MemolizedTaskList = React.memo(TaskList);
