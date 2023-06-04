
import Section from '../UI/Section';
import TaskForm from './TaskForm';
import {TASK_URL} from "../../constants";
import {useHttp} from "../../hooks/use-http";

const NewTask = (props) => {
  const responseHandler = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask)
  }

  const {isLoading, error, sendRequest} = useHttp()

  const enterTaskHandler = async (taskText) => {
    await sendRequest({
      url: TASK_URL,
      method: 'POST',
      body: JSON.stringify({ text: taskText })
    }, responseHandler.bind(null, taskText))
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
