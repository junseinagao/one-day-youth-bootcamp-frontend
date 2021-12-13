import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { MemolizedTaskList } from './components/TaskList';
import { MemolizedTaskForm } from './components/TaskForm';
import { request } from './server';
import './index.css';

// TODOタスクの型
export type Task = { label: string; isDone: boolean };

const App: React.VFC = () => {
  // タスクリストを格納する
  const [tasks, setTasks] = useState<Task[]>([]);
  // 追加前のタスクを格納する
  const [newTaskLabel, setNewTaskLabel] = useState<string>('');

  // ページマウント時にモックAPIからデータを取得
  useEffect(() => {
    request.fetchTasks((payload: Task[]) => {
      setTasks(payload);
    });
  }, []);

  return (
    // TODO inline-style を CSS Moduleに置き換える
    <div className="index">
      {/* ヘッダー */}
      <h1>Tutorial Works</h1>
      {/* 一覧表示 */}
      <MemolizedTaskList {...{ tasks, setTasks }} />
      {/* <MemolizedTaskList tasks={tasks} setTasks={setTasks} /> */}

      {/* タスク追加、削除 */}
      <MemolizedTaskForm {...{ tasks, setTasks, newTaskLabel, setNewTaskLabel }} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
