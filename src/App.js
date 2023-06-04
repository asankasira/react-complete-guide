import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import {TASK_URL} from "./constants";
import {useHttp} from "./hooks/use-http";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const transformTasks = (data) => {
    const loadedTasks = Object.entries(data).map(([k, {text}]) => ({id: k, text}))
    setTasks(loadedTasks);
  }

  const {isLoading, error, sendRequest} = useHttp()

  useEffect(() => {
    (async () => await sendRequest({url: TASK_URL}, transformTasks))()
  }, [sendRequest]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task))
  }

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </>
  );
}

export default App;
