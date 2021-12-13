import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { request } from './server';

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
    <div style={{ marginLeft: 'auto', marginRight: 'auto', width: 700 }}>
      {/* ヘッダー */}
      <h1>Tutorial Works</h1>
      {/* 一覧表示 */}
      {/* <TaskList {...{ tasks, setTasks }} /> */}
      <TaskList tasks={tasks} setTasks={setTasks} />

      {/* タスク追加、削除 */}
      <TaskForm {...{ tasks, setTasks, newTaskLabel, setNewTaskLabel }} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
