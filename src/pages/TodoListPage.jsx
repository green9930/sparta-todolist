import Form from 'components/Form';
import Layout from 'components/layout/Layout';
import TodoList from 'components/TodoList';
import { useSelector } from 'react-redux';

function TodoListPage() {
  // console.log('RENDERING TODOLISTPAGE');
  const todolist = useSelector((state) => state.todos);

  console.log(todolist);

  return (
    <Layout>
      <Form todolist={todolist} />
      <TodoList todolist={todolist} />
    </Layout>
  );
}

export default TodoListPage;
